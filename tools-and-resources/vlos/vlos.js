// VLOS estimator. Loaded by index.qmd; requires plotly.js to be loaded first.
(function () {
  "use strict";

  // Presets. All dimensions in inches.
  //   h  = side-profile height
  //   w  = side-profile width (props or wings included)
  //   cd = EASA characteristic dimension, defined by EASA as the UA's
  //        maximum dimension
  // EVO II Pro V3: retailer spec sheets list 457 x 558 x 108 mm unfolded.
  //   558 mm (21.97 in) is used as both w and cd. Measure your own
  //   aircraft if you can.
  // eBee X: 116 cm wingspan (45.7 in).
  const PRESETS = {
    djimini:    { label: "DJI Mini 2",          type: "multirotor", h:  3.1, w:  8.5, cd: 10.0 },
    evo2v3:     { label: "Autel EVO II Pro V3", type: "multirotor", h:  4.4, w: 15.2, cd: 18.2 },
    djimav3:    { label: "DJI Mavic 3",         type: "multirotor", h:  4.2, w: 14.1, cd: 16.1 },
    djimat4:    { label: "DJI Matrice 4",       type: "multirotor", h:  5.5, w: 16.2, cd: 18.7 },
    djim300:    { label: "DJI Matrice 300",     type: "multirotor", h: 16.9, w: 26.4, cd: 35.2 },
    wing2:      { label: "WingtraOne Gen II",   type: "fixedwing",  h:  4.8, w: 49.2, cd: 49.2 },
    wingray:    { label: "WingtraRAY",          type: "fixedwing",  h:  4.8, w: 49.2, cd: 49.2 },
    skydiox10:  { label: "Skydio X10",          type: "multirotor", h:  5.7, w: 17.7, cd: 27.8 },
    djineo:     { label: "DJI Neo",             type: "multirotor", h:  1.9, w:  5.2, cd:  7.9 },
    ffastro:    { label: "Freefly Astro",       type: "multirotor", h: 14.1, w: 36.0, cd: 36.0 },
    ffaltax:    { label: "Freefly Alta-X",      type: "multirotor", h: 17.9, w: 55.7, cd: 55.7 },
    if800:      { label: "IF800",               type: "multirotor", h: 20.3, w: 24.7, cd: 35.6 },
    ebeex:      { label: "AgEagle eBee X",      type: "fixedwing",  h:  5.5, w: 45.7, cd: 45.7 }
  };

  const DEFAULT_PRESET = "evo2v3";

  // Okabe-Ito colors: distinguishable under common color-vision deficiencies.
  const ACUITIES = [
    { arcmin: 6, name: "Safe distance (6′)",          color: "#009E73" },
    { arcmin: 3, name: "Max distance (3′)",           color: "#0072B2" },
    { arcmin: 1, name: "20/20 resolution limit (1′)", color: "#D55E00" }
  ];

  const M_TO_FT = 3.280839895;
  const MAX_ALT = 1000;      // ft AGL computed
  const VIEW_ALT = 600;      // ft AGL shown on load
  const PART107_ALT = 400;   // ft AGL
  const MAX_INPUT = 600;     // in

  // ---------------------------------------------------------------
  // Math (see method.qmd for the derivation)
  // ---------------------------------------------------------------

  // Largest horizontal distance (ft) at which the drone's side-profile
  // diagonal subtends at least `arcmin`, or null if it never does at
  // this altitude. Closed-form solution of
  //   tan(theta) = (w*a + h*d) / (d^2 + a^2 - (w^2 + h^2)/4)
  function maxVisibleDistance(hIn, wIn, alt, arcmin) {
    const h = hIn / 12, w = wIn / 12;
    const t = Math.tan((arcmin / 60) * (Math.PI / 180));
    const c = t * (alt * alt - (w * w + h * h) / 4) - w * alt;
    const disc = h * h - 4 * t * c;
    if (disc < 0) return null;
    const d = (h + Math.sqrt(disc)) / (2 * t);
    return d >= 0 ? d : null;
  }

  // EASA attitude line of sight (straight-line distance), in feet.
  // Linear in CD, so CD in feet gives feet; only the constant converts.
  function easaAlosFt(cdIn, fixedWing) {
    const cdFt = cdIn / 12;
    return fixedWing ? 490 * cdFt + 30 * M_TO_FT
                     : 327 * cdFt + 20 * M_TO_FT;
  }

  function slantToHorizontal(slant, alt) {
    return alt <= slant ? Math.sqrt(slant * slant - alt * alt) : null;
  }

  // ---------------------------------------------------------------
  // UI
  // ---------------------------------------------------------------
  const $ = id => document.getElementById(id);
  const el = {
    preset: $("vlos-preset"),
    h: $("vlos-h"), w: $("vlos-w"), cd: $("vlos-cd"),
    error: $("vlos-error"), summary: $("vlos-summary"), plot: $("vlos-plot")
  };
  if (!el.plot || !el.preset || typeof Plotly === "undefined") return;

  const typeRadios = document.querySelectorAll('input[name="vlos-type"]');
  const getType = () => {
    const checked = document.querySelector('input[name="vlos-type"]:checked');
    return checked ? checked.value : "multirotor";
  };
  const setType = t => {
    const radio = document.querySelector(`input[name="vlos-type"][value="${t}"]`);
    if (radio) radio.checked = true;
  };

  // Build the preset dropdown from PRESETS, keeping "Custom…" last.
  const customOpt = el.preset.querySelector('option[value="custom"]');
  for (const [key, d] of Object.entries(PRESETS)) {
    const typeLabel = d.type === "fixedwing" ? "fixed-wing" : "multirotor";
    el.preset.add(new Option(`${d.label} (${typeLabel})`, key), customOpt);
  }
  el.preset.value = DEFAULT_PRESET;

  const fmt = v => (v === null ? "not visible" : Math.round(v).toLocaleString() + " ft");

  function applyPreset(key) {
    const p = PRESETS[key];
    if (!p) return;
    setType(p.type);
    el.h.value = p.h;
    el.w.value = p.w;
    el.cd.value = p.cd;
  }

  function readInputs() {
    const v = {
      h: parseFloat(el.h.value),
      w: parseFloat(el.w.value),
      cd: parseFloat(el.cd.value),
      fixedWing: getType() === "fixedwing"
    };
    const ok = x => x > 0 && x <= MAX_INPUT;
    const bad = [];
    if (!ok(v.h)) bad.push("height");
    if (!ok(v.w)) bad.push("width");
    if (!ok(v.cd)) bad.push("max dimension");
    [["h", el.h], ["w", el.w], ["cd", el.cd]].forEach(([k, input]) =>
      input.classList.toggle("is-invalid", !ok(v[k])));
    return { v, bad };
  }

  function update() {
    const { v, bad } = readInputs();
    if (bad.length) {
      el.error.textContent = "Enter a " + bad.join(", ") + " between 0.1 and " + MAX_INPUT + " inches.";
      return;
    }
    el.error.textContent = "";

    const altitudes = Array.from({ length: MAX_ALT }, (_, i) => i + 1);
    const hover = label => "%{x:,.0f} ft horizontal at %{y} ft AGL<extra>" + label + "</extra>";

    const traces = ACUITIES.map(a => ({
      x: altitudes.map(alt => maxVisibleDistance(v.h, v.w, alt, a.arcmin)),
      y: altitudes,
      type: "scatter", mode: "lines",
      name: a.name,
      line: { color: a.color, width: 2.5 },
      hovertemplate: hover(a.name)
    }));

    const alos = easaAlosFt(v.cd, v.fixedWing);
    traces.push({
      x: altitudes.map(alt => slantToHorizontal(alos, alt)),
      y: altitudes,
      type: "scatter", mode: "lines",
      name: "EASA ALOS (" + Math.round(alos).toLocaleString() + " ft straight-line)",
      line: { color: "#000000", dash: "dash", width: 2 },
      hovertemplate: hover("EASA ALOS")
    });

    const layout = {
      font: { family: getComputedStyle(document.body).fontFamily },
      title: { text: "Visual Line of Site Estimate" },
      xaxis: { title: { text: "Horizontal distance from pilot (ft)" }, rangemode: "tozero" },
      yaxis: { title: { text: "Altitude AGL (ft)" }, range: [0, VIEW_ALT] },
      shapes: [{
        type: "line", xref: "paper", x0: 0, x1: 1,
        y0: PART107_ALT, y1: PART107_ALT,
        line: { color: "#555555", dash: "dot", width: 1.5 }
      }],
      annotations: [{
        xref: "paper", x: 1, xanchor: "right", y: PART107_ALT, yanchor: "bottom",
        text: "400 ft AGL (Part 107)", showarrow: false,
        font: { size: 11, color: "#555555" }
      }],
      legend: { orientation: "h", x: 0.5, y: -0.2, xanchor: "center" },
      margin: { l: 60, r: 30, b: 110, t: 50 }
    };

    Plotly.react(el.plot, traces, layout, { responsive: true, displaylogo: false });

    const who = PRESETS[el.preset.value] ? "the " + PRESETS[el.preset.value].label : "this drone";
    const rows = ACUITIES.map(a =>
      "<tr><td>" + a.name + "</td><td class='text-end'>" +
      fmt(maxVisibleDistance(v.h, v.w, PART107_ALT, a.arcmin)) + "</td></tr>").join("");

    el.summary.innerHTML =
      "<p>For " + who + ", EASA's attitude-line-of-sight formula gives <strong>" +
      Math.round(alos).toLocaleString() + " ft</strong> straight-line distance. " +
      "At 400 ft AGL, the horizontal distances are:</p>" +
      "<table class='table table-sm'><thead><tr><th scope='col'>Criterion</th>" +
      "<th scope='col' class='text-end'>Horizontal distance at 400 ft AGL</th></tr></thead><tbody>" +
      rows +
      "<tr><td>EASA ALOS</td><td class='text-end'>" + fmt(slantToHorizontal(alos, PART107_ALT)) + "</td></tr>" +
      "</tbody></table>";
  }

  el.preset.addEventListener("change", () => {
    if (el.preset.value === "custom") {
      el.h.focus();
    } else {
      applyPreset(el.preset.value);
    }
    update();
  });

  // Any manual edit moves the selector to Custom, keeping current values.
  const toCustom = () => { el.preset.value = "custom"; update(); };
  [el.h, el.w, el.cd].forEach(input => input.addEventListener("input", toCustom));
  typeRadios.forEach(r => r.addEventListener("change", toCustom));

  applyPreset(el.preset.value);
  update();
})();