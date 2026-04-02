(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_18_1__articulate_design-system-to-25a547"],{71695(dn){var Ao="Expected a function",Br=NaN,Da="[object Symbol]",zo=/^\s+|\s+$/g,Lt=/^[-+]0x[0-9a-f]+$/i,Le=/^0b[01]+$/i,lr=/^0o[0-7]+$/i,Co=parseInt,na=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,So=typeof self=="object"&&self&&self.Object===Object&&self,_o=na||So||Function("return this")(),_r=Object.prototype,Za=_r.toString,Eo=Math.max,Rt=Math.min,Ka=function(){return _o.Date.now()};function ve(N,yr,ia){var Na,L,Er,za,Vr,Ur,qa=0,Io=!1,la=!1,c=!0;if(typeof N!="function")throw new TypeError(Ao);yr=Re(yr)||0,Ya(ia)&&(Io=!!ia.leading,la="maxWait"in ia,Er=la?Eo(Re(ia.maxWait)||0,yr):Er,c="trailing"in ia?!!ia.trailing:c);function y(tr){var pa=Na,Xa=L;return Na=L=void 0,qa=tr,za=N.apply(Xa,pa),za}function ue(tr){return qa=tr,Vr=setTimeout(Ja,yr),Io?y(tr):za}function Me(tr){var pa=tr-Ur,Xa=tr-qa,jo=yr-pa;return la?Rt(jo,Er-Xa):jo}function ge(tr){var pa=tr-Ur,Xa=tr-qa;return Ur===void 0||pa>=yr||pa<0||la&&Xa>=Er}function Ja(){var tr=Ka();if(ge(tr))return Be(tr);Vr=setTimeout(Ja,Me(tr))}function Be(tr){return Vr=void 0,c&&Na?y(tr):(Na=L=void 0,za)}function Bt(){Vr!==void 0&&clearTimeout(Vr),qa=0,Na=Ur=L=Vr=void 0}function i(){return Vr===void 0?za:Be(Ka())}function Pe(){var tr=Ka(),pa=ge(tr);if(Na=arguments,L=this,Ur=tr,pa){if(Vr===void 0)return ue(Ur);if(la)return Vr=setTimeout(Ja,yr),y(Ur)}return Vr===void 0&&(Vr=setTimeout(Ja,yr)),za}return Pe.cancel=Bt,Pe.flush=i,Pe}function Ya(N){var yr=typeof N;return!!N&&(yr=="object"||yr=="function")}function To(N){return!!N&&typeof N=="object"}function Mt(N){return typeof N=="symbol"||To(N)&&Za.call(N)==Da}function Re(N){if(typeof N=="number")return N;if(Mt(N))return Br;if(Ya(N)){var yr=typeof N.valueOf=="function"?N.valueOf():N;N=Ya(yr)?yr+"":yr}if(typeof N!="string")return N===0?N:+N;N=N.replace(zo,"");var ia=Le.test(N);return ia||lr.test(N)?Co(N.slice(2),ia?2:8):Lt.test(N)?Br:+N}dn.exports=ve},43712(dn,Ao,Br){"use strict";Br.r(Ao),Br.d(Ao,{Arc:()=>sv,ArcAbstractFlexLayouts:()=>yr,ArcAbstractGapSizes:()=>To,ArcAbstractIconSizes:()=>Ya,ArcAbstractOrientations:()=>ia,ArcAbstractPopoverActions:()=>ve,ArcAbstractPopoverModes:()=>Ka,ArcAbstractTextLayouts:()=>N,ArcAbstractTextOverflows:()=>Re,ArcAbstractTextSizes:()=>Mt,ArcAvatar:()=>ac,ArcAvatarColors:()=>En,ArcAvatarColorsReserved:()=>Rl,ArcAvatarOverflow:()=>jd,ArcAvatarOverflowSizes:()=>Nl,ArcAvatarPile:()=>vs,ArcAvatarPileSizes:()=>Dl,ArcAvatarSizes:()=>Ml,ArcAvatarText:()=>ec,ArcAvatarTextGapSizes:()=>Bl,ArcAvatarTextOverflows:()=>Pl,ArcAvatarTextSizes:()=>Ol,ArcBadge:()=>Zd,ArcBadgeColors:()=>Nd,ArcBadgeContrasts:()=>Ud,ArcBadgeCount:()=>th,ArcBadgeCountColors:()=>Fd,ArcBadgeCountContrasts:()=>ah,ArcBadgeCountShapes:()=>eh,ArcBadgeCountSizes:()=>Qd,ArcBadgeCountVariants:()=>rh,ArcBadgeLayouts:()=>Vd,ArcBadgeSizes:()=>Hd,ArcBadgeVariants:()=>Wd,ArcButton:()=>Ir,ArcButtonDeprecatedVariants:()=>si,ArcButtonHierarchies:()=>ed,ArcButtonLayouts:()=>Xs,ArcButtonPopoverActions:()=>od,ArcButtonSchemes:()=>rd,ArcButtonShadows:()=>ad,ArcButtonShapes:()=>qs,ArcButtonSizes:()=>Js,ArcButtonVariants:()=>Qs,ArcCheckbox:()=>bi,ArcCheckboxBar:()=>bh,ArcCheckboxBarLayouts:()=>ph,ArcCheckboxBarOption:()=>mh,ArcCheckboxBarSizes:()=>fh,ArcCheckboxLayouts:()=>hh,ArcCheckboxSizes:()=>vh,ArcCheckboxVariants:()=>uh,ArcDropdownMenu:()=>Sc,ArcIcon:()=>D,ArcIconText:()=>Yr,ArcIconTextVariants:()=>Ls,ArcInputAction:()=>Th,ArcLabel:()=>ne,ArcLabelContent:()=>ie,ArcLabelLayouts:()=>nh,ArcLink:()=>Rh,ArcLinkVariants:()=>Lh,ArcModal:()=>e0,ArcModalAlert:()=>t0,ArcModalAlertDefaults:()=>Ta,ArcModalAlertVariants:()=>Oh,ArcModalBackdropColors:()=>Dh,ArcModalBodyPaddings:()=>Nh,ArcModalCloseReasons:()=>Hh,ArcModalCommonDefaults:()=>Rr,ArcModalCommonVariants:()=>Bh,ArcModalConfirm:()=>_i,ArcModalConfirmDefaults:()=>Ua,ArcModalConfirmVariants:()=>Ph,ArcModalSchemes:()=>Mh,ArcModalSizes:()=>Fh,ArcPopover:()=>eo,ArcPopoverActions:()=>gs,ArcPopoverAnchors:()=>cc,ArcPopoverBoundaries:()=>nc,ArcPopoverButton:()=>Xe,ArcPopoverDefaults:()=>Or,ArcPopoverDensities:()=>Nn,ArcPopoverModes:()=>oc,ArcPopoverSchemes:()=>tc,ArcPopoverVariants:()=>Dn,ArcPopoverVariantsWithOutline:()=>ps,ArcRadio:()=>Ei,ArcRadioBar:()=>v0,ArcRadioBarLayouts:()=>s0,ArcRadioBarOption:()=>h0,ArcRadioBarSizes:()=>d0,ArcRadioLayouts:()=>n0,ArcRadioSizes:()=>i0,ArcSelect:()=>U0,ArcSelectLayouts:()=>g0,ArcSelectSizes:()=>p0,ArcSelectVariants:()=>f0,ArcSwitch:()=>K0,ArcSwitchLabelPositions:()=>Ee,ArcSwitchSizes:()=>W0,ArcSwitchStates:()=>br,ArcSystemAIGradients:()=>Eo,ArcSystemAlignments:()=>So,ArcSystemColors:()=>Za,ArcSystemGradients:()=>Rt,ArcSystemHierarchies:()=>Co,ArcSystemLayouts:()=>na,ArcSystemLineHeights:()=>_o,ArcSystemSchemes:()=>Da,ArcSystemShadows:()=>zo,ArcSystemShapes:()=>Le,ArcSystemSizes:()=>_r,ArcSystemSurfaces:()=>Lt,ArcSystemVariants:()=>lr,ArcTextAlignments:()=>ov,ArcTextBodyElements:()=>Gi,ArcTextBodySizes:()=>av,ArcTextBodyVariants:()=>ev,ArcTextElements:()=>Zi,ArcTextHeadingElements:()=>Wi,ArcTextHeadingSizes:()=>X0,ArcTextHeadingVariants:()=>rv,ArcTextInput:()=>gv,ArcTextInputLayouts:()=>dv,ArcTextInputSizes:()=>hv,ArcTextInputTypes:()=>uv,ArcTextInputVariants:()=>vv,ArcTextKinds:()=>Y0,ArcTextLineHeights:()=>tv,ArcTextSchemes:()=>q0,ArcTextSubheadingSizes:()=>Q0,ArcTextTitleSizes:()=>J0,ArcToast:()=>dl,ArcToastDefaults:()=>tl,ArcToastPlacements:()=>ol,ArcToastPopoverActions:()=>fv,ArcToastPopoverModes:()=>el,ArcToastProgressBarVariants:()=>mv,ArcToastSchemes:()=>Xi,ArcToastSeverities:()=>Qi,ArcToastSizes:()=>rl,ArcToastVariants:()=>al,ArcTooltip:()=>bc,ArcTooltipDefaults:()=>da,SVGLogoArticulate:()=>Zt,SVGLogoProductAI:()=>Kt,SVGLogoProductPeek:()=>Yt,SVGLogoProductReach:()=>qt,SVGLogoProductReview:()=>Jt,SVGLogoProductRise:()=>Xt,SVGLogoProductStoryline:()=>Qt,SVGLogoProductStudio:()=>rc,StorageType:()=>yo,adoptStyles:()=>H,adoptThemeTokens:()=>Tl,anchorNameRegistry:()=>Ge,assignRef:()=>za,bindDelegatedEvents:()=>ni,clamp:()=>Vr,createEmptyRect:()=>Ov,css:()=>i,cssFeatures:()=>lc,didElementRectChange:()=>Io,extractTextFromReactNode:()=>Ue,formatAnchorName:()=>sc,getPreferredAnchorForTooltipId:()=>mc,getShadowRootOrDocument:()=>la,handlePopover:()=>Vn,handleToast:()=>cl,hasNativeAnchorPositioning:()=>ic,isDifferent:()=>Ur,isObject:()=>Jn,isSame:()=>qa,isString:()=>No,joinArray:()=>We,logError:()=>_s,logMessage:()=>Ss,logWarning:()=>Qn,makeHtmlId:()=>us,mapDeprecated:()=>Na,noTailAnchors:()=>Fn,normalizeAnchorName:()=>Ze,pickFromList:()=>L,pickFromListByKeys:()=>Er,resolveTailMetrics:()=>Hn,shareAdoptedStyles:()=>El,splitString:()=>Xn,syncAnchorName:()=>Un,unbindDelegatedEvents:()=>Ks,useIsoLayoutEffect:()=>Po,useStableId:()=>Kr,useStorage:()=>Pv});const Da=["auto","light","dark","inverse"],zo=["none","sm","md","lg","xl"],Lt=["primary","secondary","inset","raised","floating"],Le=["circle","square","narrow"],lr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Co=["primary","secondary","tertiary","plain","link-style"],na=["hug","fill","icon","gutter","inline"],So=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],_o=["inherit","tight","standard","loose"],_r=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Za=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Eo=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],Rt=[...Eo],Ka=["","auto","manual"],ve=["toggle","show","hide"],Ya=["inherit","xl","lg","md","sm","xs"],To=["inherit","lg","md","sm"],Mt=["inherit","md","sm"],Re=["inherit","wrap","truncate"],N=["gutter","inline"],yr=["hug","fill"],ia=["horizontal","vertical"],Na=(a,r)=>r[a]||a,L=(a,r)=>a.filter(e=>r.includes(e)),Er=(a,r)=>r.filter(e=>a.includes(e)),za=(a,r)=>{a&&(typeof a=="function"?a(r):a.current=r)},Vr=(a,r=0,e=100)=>Math.min(Math.max(a,r),e),Ur=(a,r)=>a!==r,qa=(a,r)=>a===r,Io=({a,b:r})=>Ur(a?.top,r?.top)||Ur(a?.left,r?.left)||Ur(a?.width,r?.width)||Ur(a?.height,r?.height);function la(a){if(!(a instanceof Node))return null;const r=a.getRootNode();return r instanceof ShadowRoot||r instanceof Document?r:null}var c=Br(16881),y=Br(26372);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ue=globalThis,Me=ue.ShadowRoot&&(ue.ShadyCSS===void 0||ue.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol(),Ja=new WeakMap;class Be{constructor(r,e,o){if(this._$cssResult$=!0,o!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=r,this.t=e}get styleSheet(){let r=this.o;const e=this.t;if(Me&&r===void 0){const o=e!==void 0&&e.length===1;o&&(r=Ja.get(e)),r===void 0&&((this.o=r=new CSSStyleSheet).replaceSync(this.cssText),o&&Ja.set(e,r))}return r}toString(){return this.cssText}}const Bt=a=>new Be(typeof a=="string"?a:a+"",void 0,ge),i=(a,...r)=>{const e=a.length===1?a[0]:r.reduce(((o,t,l)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+a[l+1]),a[0]);return new Be(e,a,ge)},Pe=(a,r)=>{if(Me)a.adoptedStyleSheets=r.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of r){const o=document.createElement("style"),t=ue.litNonce;t!==void 0&&o.setAttribute("nonce",t),o.textContent=e.cssText,a.appendChild(o)}},tr=Me?a=>a:a=>a instanceof CSSStyleSheet?(r=>{let e="";for(const o of r.cssRules)e+=o.cssText;return Bt(e)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pa,defineProperty:Xa,getOwnPropertyDescriptor:jo,getOwnPropertyNames:$l,getOwnPropertySymbols:yl,getPrototypeOf:xl}=Object,Lo=globalThis,hn=Lo.trustedTypes,kl=hn?hn.emptyScript:"",wl=Lo.reactiveElementPolyfillSupport,Oe=(a,r)=>a,Pt={toAttribute(a,r){switch(r){case Boolean:a=a?kl:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,r){let e=a;switch(r){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},vn=(a,r)=>!pa(a,r),un={attribute:!0,type:String,converter:Pt,reflect:!1,useDefault:!1,hasChanged:vn};Symbol.metadata??=Symbol("metadata"),Lo.litPropertyMetadata??=new WeakMap;class pe extends HTMLElement{static addInitializer(r){this._$Ei(),(this.l??=[]).push(r)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(r,e=un){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(r)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(r,e),!e.noAccessor){const o=Symbol(),t=this.getPropertyDescriptor(r,o,e);t!==void 0&&Xa(this.prototype,r,t)}}static getPropertyDescriptor(r,e,o){const{get:t,set:l}=jo(this.prototype,r)??{get(){return this[e]},set(n){this[e]=n}};return{get:t,set(n){const h=t?.call(this);l?.call(this,n),this.requestUpdate(r,h,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(r){return this.elementProperties.get(r)??un}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;const r=xl(this);r.finalize(),r.l!==void 0&&(this.l=[...r.l]),this.elementProperties=new Map(r.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){const e=this.properties,o=[...$l(e),...yl(e)];for(const t of o)this.createProperty(t,e[t])}const r=this[Symbol.metadata];if(r!==null){const e=litPropertyMetadata.get(r);if(e!==void 0)for(const[o,t]of e)this.elementProperties.set(o,t)}this._$Eh=new Map;for(const[e,o]of this.elementProperties){const t=this._$Eu(e,o);t!==void 0&&this._$Eh.set(t,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(r){const e=[];if(Array.isArray(r)){const o=new Set(r.flat(1/0).reverse());for(const t of o)e.unshift(tr(t))}else r!==void 0&&e.push(tr(r));return e}static _$Eu(r,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof r=="string"?r.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((r=>this.enableUpdating=r)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((r=>r(this)))}addController(r){(this._$EO??=new Set).add(r),this.renderRoot!==void 0&&this.isConnected&&r.hostConnected?.()}removeController(r){this._$EO?.delete(r)}_$E_(){const r=new Map,e=this.constructor.elementProperties;for(const o of e.keys())this.hasOwnProperty(o)&&(r.set(o,this[o]),delete this[o]);r.size>0&&(this._$Ep=r)}createRenderRoot(){const r=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Pe(r,this.constructor.elementStyles),r}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((r=>r.hostConnected?.()))}enableUpdating(r){}disconnectedCallback(){this._$EO?.forEach((r=>r.hostDisconnected?.()))}attributeChangedCallback(r,e,o){this._$AK(r,o)}_$ET(r,e){const o=this.constructor.elementProperties.get(r),t=this.constructor._$Eu(r,o);if(t!==void 0&&o.reflect===!0){const l=(o.converter?.toAttribute!==void 0?o.converter:Pt).toAttribute(e,o.type);this._$Em=r,l==null?this.removeAttribute(t):this.setAttribute(t,l),this._$Em=null}}_$AK(r,e){const o=this.constructor,t=o._$Eh.get(r);if(t!==void 0&&this._$Em!==t){const l=o.getPropertyOptions(t),n=typeof l.converter=="function"?{fromAttribute:l.converter}:l.converter?.fromAttribute!==void 0?l.converter:Pt;this._$Em=t;const h=n.fromAttribute(e,l.type);this[t]=h??this._$Ej?.get(t)??h,this._$Em=null}}requestUpdate(r,e,o){if(r!==void 0){const t=this.constructor,l=this[r];if(o??=t.getPropertyOptions(r),!((o.hasChanged??vn)(l,e)||o.useDefault&&o.reflect&&l===this._$Ej?.get(r)&&!this.hasAttribute(t._$Eu(r,o))))return;this.C(r,e,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(r,e,{useDefault:o,reflect:t,wrapped:l},n){o&&!(this._$Ej??=new Map).has(r)&&(this._$Ej.set(r,n??e??this[r]),l!==!0||n!==void 0)||(this._$AL.has(r)||(this.hasUpdated||o||(e=void 0),this._$AL.set(r,e)),t===!0&&this._$Em!==r&&(this._$Eq??=new Set).add(r))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const r=this.scheduleUpdate();return r!=null&&await r,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,l]of this._$Ep)this[t]=l;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[t,l]of o){const{wrapped:n}=l,h=this[t];n!==!0||this._$AL.has(t)||h===void 0||this.C(t,void 0,l,h)}}let r=!1;const e=this._$AL;try{r=this.shouldUpdate(e),r?(this.willUpdate(e),this._$EO?.forEach((o=>o.hostUpdate?.())),this.update(e)):this._$EM()}catch(o){throw r=!1,this._$EM(),o}r&&this._$AE(e)}willUpdate(r){}_$AE(r){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(r)),this.updated(r)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(r){return!0}update(r){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(r){}firstUpdated(r){}}pe.elementStyles=[],pe.shadowRootOptions={mode:"open"},pe[Oe("elementProperties")]=new Map,pe[Oe("finalized")]=new Map,wl?.({ReactiveElement:pe}),(Lo.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=globalThis,Ro=Ot.trustedTypes,gn=Ro?Ro.createPolicy("lit-html",{createHTML:a=>a}):void 0,Dt="$lit$",Ca=`lit$${Math.random().toFixed(9).slice(2)}$`,Nt="?"+Ca,Al=`<${Nt}>`,Qa=document,De=()=>Qa.createComment(""),Ne=a=>a===null||typeof a!="object"&&typeof a!="function",Ft=Array.isArray,pn=a=>Ft(a)||typeof a?.[Symbol.iterator]=="function",Ht=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fn=/-->/g,mn=/>/g,re=RegExp(`>|${Ht}(?:([^\\s"'>=/]+)(${Ht}*=${Ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bn=/'/g,$n=/"/g,yn=/^(?:script|style|textarea|title)$/i,Vt=a=>(r,...e)=>({_$litType$:a,strings:r,values:e}),Fv=Vt(1),Hv=Vt(2),Vv=Vt(3),fe=Symbol.for("lit-noChange"),gr=Symbol.for("lit-nothing"),xn=new WeakMap,ae=Qa.createTreeWalker(Qa,129);function kn(a,r){if(!Ft(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return gn!==void 0?gn.createHTML(r):r}const wn=(a,r)=>{const e=a.length-1,o=[];let t,l=r===2?"<svg>":r===3?"<math>":"",n=Fe;for(let h=0;h<e;h++){const d=a[h];let v,u,p=-1,g=0;for(;g<d.length&&(n.lastIndex=g,u=n.exec(d),u!==null);)g=n.lastIndex,n===Fe?u[1]==="!--"?n=fn:u[1]!==void 0?n=mn:u[2]!==void 0?(yn.test(u[2])&&(t=RegExp("</"+u[2],"g")),n=re):u[3]!==void 0&&(n=re):n===re?u[0]===">"?(n=t??Fe,p=-1):u[1]===void 0?p=-2:(p=n.lastIndex-u[2].length,v=u[1],n=u[3]===void 0?re:u[3]==='"'?$n:bn):n===$n||n===bn?n=re:n===fn||n===mn?n=Fe:(n=re,t=void 0);const f=n===re&&a[h+1].startsWith("/>")?" ":"";l+=n===Fe?d+Al:p>=0?(o.push(v),d.slice(0,p)+Dt+d.slice(p)+Ca+f):d+Ca+(p===-2?h:f)}return[kn(a,l+(a[e]||"<?>")+(r===2?"</svg>":r===3?"</math>":"")),o]};class He{constructor({strings:r,_$litType$:e},o){let t;this.parts=[];let l=0,n=0;const h=r.length-1,d=this.parts,[v,u]=wn(r,e);if(this.el=He.createElement(v,o),ae.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(t=ae.nextNode())!==null&&d.length<h;){if(t.nodeType===1){if(t.hasAttributes())for(const p of t.getAttributeNames())if(p.endsWith(Dt)){const g=u[n++],f=t.getAttribute(p).split(Ca),k=/([.?@])?(.*)/.exec(g);d.push({type:1,index:l,name:k[2],strings:f,ctor:k[1]==="."?zn:k[1]==="?"?Cn:k[1]==="@"?Sn:Ve}),t.removeAttribute(p)}else p.startsWith(Ca)&&(d.push({type:6,index:l}),t.removeAttribute(p));if(yn.test(t.tagName)){const p=t.textContent.split(Ca),g=p.length-1;if(g>0){t.textContent=Ro?Ro.emptyScript:"";for(let f=0;f<g;f++)t.append(p[f],De()),ae.nextNode(),d.push({type:2,index:++l});t.append(p[g],De())}}}else if(t.nodeType===8)if(t.data===Nt)d.push({type:2,index:l});else{let p=-1;for(;(p=t.data.indexOf(Ca,p+1))!==-1;)d.push({type:7,index:l}),p+=Ca.length-1}l++}}static createElement(r,e){const o=Qa.createElement("template");return o.innerHTML=r,o}}function ee(a,r,e=a,o){if(r===fe)return r;let t=o!==void 0?e._$Co?.[o]:e._$Cl;const l=Ne(r)?void 0:r._$litDirective$;return t?.constructor!==l&&(t?._$AO?.(!1),l===void 0?t=void 0:(t=new l(a),t._$AT(a,e,o)),o!==void 0?(e._$Co??=[])[o]=t:e._$Cl=t),t!==void 0&&(r=ee(a,t._$AS(a,r.values),t,o)),r}class An{constructor(r,e){this._$AV=[],this._$AN=void 0,this._$AD=r,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(r){const{el:{content:e},parts:o}=this._$AD,t=(r?.creationScope??Qa).importNode(e,!0);ae.currentNode=t;let l=ae.nextNode(),n=0,h=0,d=o[0];for(;d!==void 0;){if(n===d.index){let v;d.type===2?v=new me(l,l.nextSibling,this,r):d.type===1?v=new d.ctor(l,d.name,d.strings,this,r):d.type===6&&(v=new _n(l,this,r)),this._$AV.push(v),d=o[++h]}n!==d?.index&&(l=ae.nextNode(),n++)}return ae.currentNode=Qa,t}p(r){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(r,o,e),e+=o.strings.length-2):o._$AI(r[e])),e++}}class me{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(r,e,o,t){this.type=2,this._$AH=gr,this._$AN=void 0,this._$AA=r,this._$AB=e,this._$AM=o,this.options=t,this._$Cv=t?.isConnected??!0}get parentNode(){let r=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&r?.nodeType===11&&(r=e.parentNode),r}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(r,e=this){r=ee(this,r,e),Ne(r)?r===gr||r==null||r===""?(this._$AH!==gr&&this._$AR(),this._$AH=gr):r!==this._$AH&&r!==fe&&this._(r):r._$litType$!==void 0?this.$(r):r.nodeType!==void 0?this.T(r):pn(r)?this.k(r):this._(r)}O(r){return this._$AA.parentNode.insertBefore(r,this._$AB)}T(r){this._$AH!==r&&(this._$AR(),this._$AH=this.O(r))}_(r){this._$AH!==gr&&Ne(this._$AH)?this._$AA.nextSibling.data=r:this.T(Qa.createTextNode(r)),this._$AH=r}$(r){const{values:e,_$litType$:o}=r,t=typeof o=="number"?this._$AC(r):(o.el===void 0&&(o.el=He.createElement(kn(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===t)this._$AH.p(e);else{const l=new An(t,this),n=l.u(this.options);l.p(e),this.T(n),this._$AH=l}}_$AC(r){let e=xn.get(r.strings);return e===void 0&&xn.set(r.strings,e=new He(r)),e}k(r){Ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,t=0;for(const l of r)t===e.length?e.push(o=new me(this.O(De()),this.O(De()),this,this.options)):o=e[t],o._$AI(l),t++;t<e.length&&(this._$AR(o&&o._$AB.nextSibling,t),e.length=t)}_$AR(r=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);r!==this._$AB;){const o=r.nextSibling;r.remove(),r=o}}setConnected(r){this._$AM===void 0&&(this._$Cv=r,this._$AP?.(r))}}class Ve{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(r,e,o,t,l){this.type=1,this._$AH=gr,this._$AN=void 0,this.element=r,this.name=e,this._$AM=t,this.options=l,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=gr}_$AI(r,e=this,o,t){const l=this.strings;let n=!1;if(l===void 0)r=ee(this,r,e,0),n=!Ne(r)||r!==this._$AH&&r!==fe,n&&(this._$AH=r);else{const h=r;let d,v;for(r=l[0],d=0;d<l.length-1;d++)v=ee(this,h[o+d],e,d),v===fe&&(v=this._$AH[d]),n||=!Ne(v)||v!==this._$AH[d],v===gr?r=gr:r!==gr&&(r+=(v??"")+l[d+1]),this._$AH[d]=v}n&&!t&&this.j(r)}j(r){r===gr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,r??"")}}class zn extends Ve{constructor(){super(...arguments),this.type=3}j(r){this.element[this.name]=r===gr?void 0:r}}class Cn extends Ve{constructor(){super(...arguments),this.type=4}j(r){this.element.toggleAttribute(this.name,!!r&&r!==gr)}}class Sn extends Ve{constructor(r,e,o,t,l){super(r,e,o,t,l),this.type=5}_$AI(r,e=this){if((r=ee(this,r,e,0)??gr)===fe)return;const o=this._$AH,t=r===gr&&o!==gr||r.capture!==o.capture||r.once!==o.once||r.passive!==o.passive,l=r!==gr&&(o===gr||t);t&&this.element.removeEventListener(this.name,this,o),l&&this.element.addEventListener(this.name,this,r),this._$AH=r}handleEvent(r){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,r):this._$AH.handleEvent(r)}}class _n{constructor(r,e,o){this.element=r,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(r){ee(this,r)}}const Uv={M:Dt,P:Ca,A:Nt,C:1,L:wn,R:An,D:pn,V:ee,I:me,H:Ve,N:Cn,U:Sn,B:zn,F:_n},zl=Ot.litHtmlPolyfillSupport;zl?.(He,me),(Ot.litHtmlVersions??=[]).push("3.3.1");const Cl=(a,r,e)=>{const o=e?.renderBefore??r;let t=o._$litPart$;if(t===void 0){const l=e?.renderBefore??null;o._$litPart$=t=new me(r.insertBefore(De(),l),l,void 0,e??{})}return t._$AI(a),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ut=globalThis;class Mo extends pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const r=super.createRenderRoot();return this.renderOptions.renderBefore??=r.firstChild,r}update(r){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(r),this._$Do=Cl(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return fe}}Mo._$litElement$=!0,Mo.finalized=!0,Ut.litElementHydrateSupport?.({LitElement:Mo});const Sl=Ut.litElementPolyfillSupport;Sl?.({LitElement:Mo});const Wv={_$AK:(a,r,e)=>{a._$AK(r,e)},_$AL:a=>a._$AL};(Ut.litElementVersions??=[]).push("4.2.1");const _l=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(to right top, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(to right top, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(to right top, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(to right top, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(to right top, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(to right top, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(to right top, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-20), var(--arc-color-alpha-white-20));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static tokens (primitive colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(6px, 0.375em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
  }
  [arc-gradient][arc-icon] {
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-primary-hover: var(--arc-color-fg-hover);
  --arc-color-text-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-hover-heavy);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - temporary shadow mappings */
  --arc-shadow-light-none: var(--arc-shadow-none);
  --arc-shadow-light-sm: var(--arc-shadow-sm);
  --arc-shadow-light-md: var(--arc-shadow-md);
  --arc-shadow-light-lg: var(--arc-shadow-lg);
  --arc-shadow-light-xl: var(--arc-shadow-xl);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,Wt={};function H(a,r){if(typeof document<"u"&&r?.styleSheet){const e=Wt[a];Wt[a]=r.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(o=>o!==e),r.styleSheet]}}function El(a){const r=Object.values(Wt),e=document.adoptedStyleSheets.filter(o=>r.includes(o));if(a.adoptedStyleSheets){const o=e.filter(t=>!a.adoptedStyleSheets.includes(t));a.adoptedStyleSheets=[...a.adoptedStyleSheets,...o]}}function Tl(a){if(typeof CSSStyleSheet<"u"){const r=new CSSStyleSheet;r.replaceSync(_l),a.adoptedStyleSheets&&(a.adoptedStyleSheets.includes(r)||(a.adoptedStyleSheets=[...a.adoptedStyleSheets,r]))}}const Il=a=>a?.trim().charAt(0)??void 0,jl=(a,r)=>{let e=0;const o=Math.min(a.length,50);for(let t=0;t<o;t+=1)e=(e+a.charCodeAt(t))%(r??33);return e},Ll=(a,r,e)=>r?.length?a?.trim()===""?e||r[0]:r[jl(a,r.length)]||e||r[0]:e,En=L(Za,["blue","orange","mint","red","yellow","green","maroon","purple"]),Rl=L(Za,["neutral","white","black"]),Bo=L(_r,["lg","md","sm","xs"]),Ml=[...Bo,"profile-sm","profile-md","profile-lg"],Bl=To,Pl=Re,Ol=Bo,Dl=Bo,Nl=Bo,x=i`--arc•input•mask`,s=i`--arc•size`,m=i`--arc•space`,W=i`--arc•avatar`,pr=i`${W}•chars`,Gt=i`

  &[data-size=lg] {
    ${W}•font•size: var(${s}•16);
    ${W}•size: 2.5em; /* target: 40px @ 100% */
    ${pr}•1: var(${s}•16);
    ${pr}•2: var(${s}•14);
    ${pr}•3: var(${s}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${W}•font•size: var(${s}•14);
    ${W}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${pr}•1: var(${s}•14);
    ${pr}•2: var(${s}•12);
    ${pr}•3: var(${s}•10);
  }

  &[data-size=sm] {
    ${W}•font•size: var(${s}•12);
    ${W}•size: 2em; /* target: 24px @ 100% */
    ${pr}•1: var(${s}•12);
    ${pr}•2: var(${s}•10);
    ${pr}•3: var(${s}•8);
  }

  &[data-size=xs] {
    ${W}•font•size: var(${s}•10);
    ${W}•size: 2em; /* target: 20px @ 100% */
    ${pr}•1: var(${s}•10);
    ${pr}•2: var(${s}•8);
    ${pr}•3: var(${s}•6);
  }

`,Fl=i`

  &[data-size=profile-lg] {
    ${W}•font•size: var(${s}•40);
    ${W}•size: 4em;
  }

  &[data-size=profile-md] {
    ${W}•font•size: var(${s}•32);
    ${W}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${W}•font•size: var(${s}•28);
    ${W}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,Tn=i`

  [arc-avatar] {
    ${W}•font•size: inherit;
    ${W}•size: inherit;
    ${pr}•1: inherit;
    ${pr}•2: inherit;
    ${pr}•3: inherit;
  }

`,oe=i`${W}•fg`,Pr=i`${W}•bg`,Hl=i`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${oe}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${Pr}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${Pr}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${Pr}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${Pr}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${Pr}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${Pr}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${Pr}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${Pr}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${oe}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${Pr}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${oe}: var(--arc-color-fg-secondary);
      ${Pr}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${oe}: var(--arc-color-mono-black);
      ${Pr}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Gt}
    ${Fl}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${W}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${W}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${pr}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${pr}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${pr}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${W}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${Pr}));
      --arc-button-color: var(--arc-avatar-color, var(${oe}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${W}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${oe}: transparent;
        ${Pr}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${Pr});
      color: var(${oe});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${W}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${W}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,Vl=({children:a,initial:r,color:e,...o})=>(0,c.jsx)("span",{...o,"data-element":"initial","data-color":e,children:a||r}),Ul=({isLoaded:a,hasError:r,onLoad:e,onError:o,...t})=>{const l=!a&&""||void 0,n=r&&""||void 0,h=!a||r||void 0;return(0,c.jsx)("img",{...t,hidden:h,"data-element":"image","data-not-loaded":l,"data-has-error":n,onLoad:e,onError:o})},Zt=a=>(0,c.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Kt=a=>(0,c.jsxs)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,c.jsx)("defs",{children:(0,c.jsxs)("linearGradient",{id:"ai_gradient",x1:"2",y1:"18",x2:"18",y2:"2",gradientUnits:"userSpaceOnUse",children:[(0,c.jsx)("stop",{stopColor:"var(--arc-color-logo-ai-purple, #9c15ff)"}),(0,c.jsx)("stop",{offset:"1",stopColor:"var(--arc-color-logo-ai-blue, #1eb4fb)"})]})}),(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:"url(#ai_gradient)"})]}),Yt=a=>(0,c.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),qt=a=>(0,c.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Jt=a=>(0,c.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Xt=a=>(0,c.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Qt=a=>(0,c.jsx)("svg",{...a,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),rc=a=>(0,c.jsx)("svg",{...a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,c.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Wl;const Gl="fa-width-auto",In="fa-fw",Zl="arc-fw",jn="arc-aw",Kl=a=>typeof a=="number"?`calc(${a/10}rem * var(--arc-internal-font-size))`:a,Yl={"arc-svg logo-articulate":(0,c.jsx)(Zt,{}),"arc-svg product-ai":(0,c.jsx)(Kt,{}),"arc-svg product-peek":(0,c.jsx)(Yt,{}),"arc-svg product-reach":(0,c.jsx)(qt,{}),"arc-svg product-review":(0,c.jsx)(Jt,{}),"arc-svg product-rise":(0,c.jsx)(Xt,{}),"arc-svg product-storyline":(0,c.jsx)(Qt,{}),"arc-svg product-studio":(0,c.jsx)(rc,{})},Kv=a=>a&&a.length>0&&a?.includes("arc-svg")?Yl[a]:Wl("span",{className:a}),Ln=a=>{const r=a.includes(Gl),e=a.includes(In),o=a.includes(Zl),t=a.includes(jn);return{hasFaAutoWidth:r,hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}},Rn=a=>((0,y.isValidElement)(a)&&a.type===D?a.props.icon:a)??void 0,Mn=a=>{const r=Rn(a);if(typeof r!="string")return r;const{hasFaFixedWidth:e,hasArcFixedWidth:o,hasArcAutoWidth:t}=Ln(r);return!e&&!o&&!t?`${r} ${jn}`:r},ql=a=>{const r=Rn(a);if(typeof r!="string")return r;let e=r;const{hasArcFixedWidth:o,hasFaFixedWidth:t}=Ln(e);return o&&!t&&(e=`${e} ${In}`),e},Jl=i`--arc•icon`,Sa=i`${Jl}•fg`,Xl=i`
@layer arc-components {

[arc-icon] {
  ${Sa}: currentcolor;

  color: var(--arc-icon-color, var(${Sa}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, 1lh);
    max-height: var(--arc-icon-max-height, 1lh);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${Sa}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* Some SVG icons are also already styled as [arc-icon] so we need to ignore the nested [arc-icon] styles */
/* [arc-icon]:not([hidden]) > [arc-icon] { display: contents; } */

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand] {
    ${Sa}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Sa}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Sa}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Sa}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error] {
    ${Sa}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Sa}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,Ql=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-articulate arc-aw",color:a?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":a?.["aria-label"]||"Articulate Logo"}),rs=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":a?.["aria-label"]||"Articulate AI Logo",gradient:a?.gradient||"ai"}),as=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-product-badge-peek arc-aw",color:a?.color||"var(--arc-color-logo-peek, #497add)","aria-label":a?.["aria-label"]||"Articulate Peek Logo"}),es=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-product-badge-reach arc-aw",color:a?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":a?.["aria-label"]||"Articulate Reach Logo"}),os=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-product-badge-review arc-aw",color:a?.color||"var(--arc-color-logo-review, #35b062)","aria-label":a?.["aria-label"]||"Articulate Review Logo"}),ts=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-product-badge-rise arc-aw",color:a?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":a?.["aria-label"]||"Articulate Rise Logo"}),cs=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-product-badge-storyline arc-aw",color:a?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":a?.["aria-label"]||"Articulate Storyline Logo"}),ns=a=>(0,c.jsx)(D,{...a,icon:"fa-kit fa-product-badge-studio arc-aw",color:a?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":a?.["aria-label"]||"Articulate Studio Logo"}),D=({children:a,icon:r="fa-regular fa-circle-dashed",color:e,size:o,style:t,gradient:l,...n})=>{const h={...t,"--arc-icon-size":Kl(o),"--arc-icon-color":e},d=!!(n["aria-label"]||n["aria-labelledby"]),v=ql(r),u=typeof v=="string"&&v.length>0?(0,c.jsx)("span",{className:v}):v;return(0,c.jsx)("span",{"aria-hidden":!d||void 0,...n,"arc-icon":"",style:h,"arc-gradient":l,children:a||u})};H("ArcIcon",Xl),D.Articulate=Ql,D.AI=rs,D.Peek=as,D.Reach=es,D.Review=os,D.Rise=ts,D.Storyline=cs,D.Studio=ns,D.SVGArticulate=Zt,D.SVGAI=Kt,D.SVGPeek=Yt,D.SVGReach=qt,D.SVGReview=Jt,D.SVGRise=Xt,D.SVGStoryline=Qt,D.SVGStudio=rc;const is=({children:a,icon:r,color:e,...o})=>(0,c.jsx)("span",{...o,"data-element":"anonymous","data-color":"neutral",children:a||(0,c.jsx)(D,{icon:r})}),Bn="blue",Pn="neutral",ls="fa-solid fa-user arc-aw",ac=(0,y.forwardRef)(({children:a,size:r,color:e,isActive:o=!0,isAnonymous:t,alt:l,src:n,name:h,email:d,...v},u)=>{const[p,g]=(0,y.useState)(!1),[f,k]=(0,y.useState)(!1),z=P=>{g(!0),k(!1),v.onLoad?.(P)},I=P=>{g(!1),k(!0),v.onError?.(P)},M=Il(h||d),_=!!M,E=t||(!p||f)&&!_,C=!E&&!!n&&!f||void 0,S=(E&&Pn||void 0)??(e||void 0)??Ll(String(d||h||void 0),En,Bn)??Bn,F={src:n,alt:l,isLoaded:p,hasError:f,onLoad:z,onError:I};return(0,y.useEffect)(()=>{E&&g(!1)},[E]),(0,c.jsx)("span",{...v,ref:u,"arc-avatar":"","data-is-inactive":!o||void 0,"data-size":r,"aria-label":(v.title??h??d)||void 0,children:a||(E?(0,c.jsx)(is,{icon:ls,color:Pn}):(0,c.jsxs)(c.Fragment,{children:[C&&(0,c.jsx)(Ul,{...F}),_&&(0,c.jsx)(Vl,{initial:M,color:S})]}))})});H("ArcAvatar",Hl);const wr=i`${W}•text`,te=i`${W}•subtext`,be=i`${W}•gap`,ss=i`
@layer arc-components {

  [arc-avatar-text] {
    ${wr}•font•size: var(${s}•14);
    ${te}•font•size: var(${s}•12);
    ${be}: var(${s}•8);

    ${wr}•overflow: unset;
    ${wr}•text•overflow: unset;
    ${wr}•white•space: unset;

    &[data-overflow=truncate] {
      ${wr}•overflow: hidden;
      ${wr}•text•overflow: ellipsis;
      ${wr}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${wr}•font•size: 1em;
      ${te}•font•size: 0.875em;
      ${be}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${wr}•font•size: var(--arc-font-size-14);
      ${te}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${wr}•font•size: var(--arc-font-size-14);
      ${te}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${wr}•font•size: var(--arc-font-size-14);
      ${te}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${wr}•font•size: var(--arc-font-size-12);
      ${te}•font•size: var(--arc-font-size-12);
      ${be}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${be}: var(${s}•12); }
    &[data-gap=sm] { ${be}: var(${s}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${wr}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${be});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${te}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${wr}•overflow);
      text-overflow: var(${wr}•text•overflow);
      white-space: var(${wr}•white•space);
    }
  }

}
`,ds="Anonymous",ec=({children:a,avatar:r={},subtext:e,size:o,gapSize:t,overflow:l,isStrong:n,...h})=>{const d=r.anonymousName||ds,v=r.name||r.email||r.src,u=r.name||r.email,p=r.isAnonymous||!v,g=a||p?d:u,f=t!=="inherit"?t:void 0,k=l!=="inherit"?l:void 0;return(0,c.jsxs)("span",{...h,"arc-avatar-text":"","data-gap":f,"data-overflow":k,"is-strong":n?"":void 0,children:[(0,c.jsx)(ac,{...r,isAnonymous:p,size:o}),(0,c.jsxs)("span",{"data-element":"text",children:[g,e&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("small",{"data-element":"subtext",children:e})]})]})]})};H("ArcAvatarText",ss);const hs=i`
@layer arc-components {

  [arc-avatar-pile] {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Gt}
    ${Tn}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,vs=({size:a="md",...r})=>(0,c.jsx)("div",{...r,"arc-avatar-pile":"","data-size":a});H("ArcAvatarPile",hs);const Ue=a=>typeof a=="string"?a:typeof a=="number"?a.toString():Array.isArray(a)?a.map(Ue).join(""):(0,y.isValidElement)(a)?Ue(a.props.children):"",On={},us=(a="id")=>{const r=(On[a]??0)+1;return On[a]=r,`${a}-${r}`},Kr=(a,r="id")=>{const e=(0,y.useId)();return a??`${r}-${e}`},oc=[...Ka],tc=[...Da],gs=[...ve],Dn=L(lr,["common"]),ps=L(lr,["ai","brand"]),cc=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],nc=["ignore","flip"],Nn=["compact","comfortable"],We=(a,r=1/0,e=" ")=>[...a].flat(r)?.filter(Boolean)?.join(e),Or={popover:oc[0],anchorAt:cc[13],boundary:nc[0],tryFallbacks:!1,variant:Dn[0],scheme:tc[0],density:Nn[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},ic=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name"),fs=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),lc={canAnchor:ic(),canAnchoredContainers:fs()},Fn=["center","nw-corner","ne-corner","se-corner","sw-corner"],Hn=({canHaveTail:a,tailSize:r})=>{if(!a)return{cssTailVar:"",floatingTailPx:0};const e=Math.abs(Number(r||Or.tailSize)),o=e>0?e:Or.tailSize;return{cssTailVar:o===Or.tailSize?"":`${o}px`,floatingTailPx:o}},Po=typeof window>"u"?y.useEffect:y.useLayoutEffect,Vn=(a,r="toggle",e=document)=>{const o=e.getElementById(a);({toggle:()=>o?.togglePopover(),show:()=>o?.showPopover(),hide:()=>o?.hidePopover()})[r]()},Ge=new WeakMap,sc=a=>{const r=String(a??"").trim();if(r==="none")return"none";let e=r.replace(/[^\w-]/g,"-");for(;e.startsWith("-");)e=e.slice(1);for(;e.endsWith("-");)e=e.slice(0,-1);return e?`--${e}`:"--"},Ze=a=>{const r=sc(a);return r==="none"?null:r},Un=(a,r)=>{const e=Ze(r);if(!e)return()=>{};let o=Ge.get(a);return o||(o=new Set,Ge.set(a,o)),o.has(e)?()=>{}:(o.add(e),a.style.setProperty("anchor-name",We([...o],1/0,", ")),()=>{const t=Ge.get(a);if(t){if(t.delete(e),t.size===0){Ge.delete(a),a.style.removeProperty("anchor-name");return}a.style.setProperty("anchor-name",We([...t],1/0,", "))}})},Wn=a=>a==="start"||a==="end"?a:"center",ms=a=>{const r=a.split("-")[0];return r==="top"||r==="right"||r==="bottom"||r==="left"?r:null},Gn=a=>{const r=ms(a),e=Wn(a.split("-")[1]);switch(r){case"top":return{block:"start",inline:e};case"bottom":return{block:"end",inline:e};case"left":return{block:e,inline:"start"};case"right":return{block:e,inline:"end"};default:return{block:"center",inline:"center"}}},Zn=(a,r)=>a!=="center"&&r!=="center"&&a!==r,Kn=(a,r)=>{const e=Gn(a),o=Gn(r),t=Zn(e.block,o.block),l=Zn(e.inline,o.inline);return t&&l?"flip-block-inline":t?"flip-block":l?"flip-inline":""},bs={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Yn=a=>{a.style.removeProperty("top"),a.style.removeProperty("left"),a.style.removeProperty("position"),a.style.removeProperty("margin"),delete a.dataset.fallbacks},$s=[{test:(a,r,e)=>a==="y"&&r.includes("top")&&e.includes("top"),value:-1},{test:(a,r,e)=>a==="y"&&r.includes("top")&&e.includes("bottom"),value:-1},{test:(a,r,e)=>a==="y"&&r.includes("bottom")&&e.includes("top"),value:1},{test:(a,r,e)=>a==="x"&&r.includes("left")&&e.includes("left"),value:-1},{test:(a,r,e)=>a==="x"&&r.includes("left")&&e.includes("right"),value:-1},{test:(a,r,e)=>a==="x"&&r.includes("right")&&e.includes("left"),value:1}],qn=(a,r,e)=>$s.find(o=>o.test(a,r,e))?.value||0,ys=({anchorEl:a,popoverEl:r,anchorAt:e,tryFallbacks:o,offsetPx:t,tailSizePx:l,hasTail:n,isOpen:h})=>{Po(()=>{if(!(h&&!ic()&&!!a&&!!r)){r&&Yn(r);return}const v=a,u=r,p=bs[e];let g=!0,f;return(async()=>{try{const{autoUpdate:I,computePosition:M,flip:_,offset:E}=await Br.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Br.bind(Br,40153));if(!g)return;const C=n?Math.max(0,l)*(Math.sqrt(2)/2):0,S=[E(t)];o&&S.push(_({fallbackStrategy:"bestFit"}));const F=async()=>{try{const P=await M(v,u,{placement:p,strategy:"fixed",middleware:S}),G=P.x+C*qn("x",P.placement,p),Z=P.y+C*qn("y",P.placement,p);if(u.style.left=`${G}px`,u.style.top=`${Z}px`,!n||!o){delete u.dataset.fallbacks;return}const or=Kn(p,P.placement);or?u.dataset.fallbacks=or:delete u.dataset.fallbacks}catch{}};f=I(v,u,F),await F()}catch{}})(),()=>{g=!1,f?.(),Yn(u)}},[e,a,n,h,t,r,l,o])},Oo=1,$e=2,xs=[{test:(a,r)=>r.top>=a.bottom+Oo,value:"bottom"},{test:(a,r)=>r.bottom<=a.top-Oo,value:"top"},{test:(a,r)=>r.left>=a.right+Oo,value:"right"},{test:(a,r)=>r.right<=a.left-Oo,value:"left"}],Ke=a=>{delete a.dataset.fallbacks};let dc;const ks=()=>(dc||(dc=Br.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Br.bind(Br,40153))),dc),Do=a=>({x:a.left+a.width/2,y:a.top+a.height/2}),ws=(a,r,e,o)=>{const t=Do(r),l=Do(e);if(a==="top"||a==="bottom"){const v=Math.abs(o==="rtl"?e.right-r.right:e.left-r.left),u=Math.abs(o==="rtl"?e.left-r.left:e.right-r.right),p=Math.abs(l.x-t.x);return Math.abs(v-u)<=$e&&p<=$e||p+$e<Math.min(v,u)?"center":v<=u?"start":"end"}const n=Math.abs(e.top-r.top),h=Math.abs(e.bottom-r.bottom),d=Math.abs(l.y-t.y);return Math.abs(n-h)<=$e&&d<=$e||d+$e<Math.min(n,h)?"center":n<=h?"start":"end"},As=(a,r,e,o)=>{const t=xs.find(d=>d.test(r,e));let l;if(t)l=t.value;else{const d=Do(r),v=Do(e),u=v.y-d.y,p=v.x-d.x,g=Math.min(r.height,e.height)*.1;Math.abs(u)>g?l=u>=0?"bottom":"top":l=p>=0?"right":"left"}if(Wn(a.split("-")[1])==="center")return l;const h=ws(l,r,e,o);return`${l}-${h}`},zs=({anchorEl:a,popoverEl:r,anchorAt:e,tryFallbacks:o,isOpen:t,hasTail:l})=>{Po(()=>{if(!r||!lc.canAnchor)return;if(!l||!o||!t||lc.canAnchoredContainers||!a){Ke(r);return}const n=e;if(n==="center"||n.includes("corner")){Ke(r);return}const h=a,d=r;let v=!0,u;const p=()=>{const f=h.getBoundingClientRect(),k=d.getBoundingClientRect(),z=getComputedStyle(h).direction==="rtl"?"rtl":"ltr",I=As(n,f,k,z),M=Kn(n,I);n===I?Ke(d):M?d.dataset.fallbacks=M:Ke(d)};return(async()=>{try{const{autoUpdate:k}=await ks();if(!v)return;u=k(h,d,p),p()}catch{}})(),()=>{v=!1,u?.(),Ke(d)}},[e,a,l,t,r,o])},No=a=>typeof a=="string",Jn=a=>a!==null&&typeof a=="object",Xn=(a,r=" ")=>a.split(r).map(e=>e.trim()).filter(Boolean),Cs=i`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,hc=(0,y.forwardRef)(({progress:a,...r},e)=>(0,c.jsxs)("svg",{...r,ref:e,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":a??""},children:[(0,c.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,c.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));hc.displayName="ArcSpinner",H("ArcSpinner",Cs);const Ss=(...a)=>console.log(...a),Qn=(...a)=>console.warn(...a),_s=(...a)=>console.error(...a),ye=i`--arc•icon•text`,Ye=i`${ye}•font•size`,ri=i`${ye}•icon`,vc=i`${ye}•text`,ai=i`${ye}•subtext`,sa=i`${ye}•fg`,_a=i`${ye}•gap`,Fa=i`${ri}•size`,Fo=i`${ri}•vertical•align`,qe=i`${vc}•overflow`,Ho=i`${vc}•text•overflow`,Vo=i`${vc}•white•space`,Uo=i`${ai}•font•size`,ei=i`${ai}•fg`,Es=i`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${sa}: currentcolor;
  }

  &[data-variant=primary] {
    ${sa}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${sa}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${sa}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${sa}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${sa}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${sa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${sa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${sa}: var(--arc-color-fg-critical-mid);
  }

`,Ts=i`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Ye}: 1em;
    ${Uo}: 0.75em;
    ${Fa}: 1em;
    ${_a}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Ye}: var(--arc-font-size-14);
    ${Uo}: var(--arc-font-size-12);
    ${_a}: var(${m}•3);
  }

  &[data-size=sm] {
    ${Ye}: var(--arc-font-size-12);
    ${Uo}: var(--arc-font-size-12);
    ${_a}: var(${m}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${_a}: var(${m}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${_a}: var(${m}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${_a}: var(${m}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${Fa}: var(${s}•24); }
  &[icon-size=lg] { ${Fa}: var(${s}•20); }
  &[icon-size=md] { ${Fa}: var(${s}•16); }
  &[icon-size=sm] { ${Fa}: var(${s}•14); }
  &[icon-size=xs] { ${Fa}: var(${s}•12); }
`,Is=i`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${ei}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${sa}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${Fa}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: normal;

  &[data-layout=inline] {
    ${qe}: unset;
    ${Ho}: unset;
    ${Vo}: unset;

    ${Fo}: calc((var(${Fa}) - var(${Ye})) / -2);

    &:has(svg) { ${Fo}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${qe}: visible;
    ${Ho}: unset;
    ${Vo}: normal;

    &[data-overflow=truncate] {
      ${qe}: hidden;
      ${Ho}: ellipsis;
      ${Vo}: nowrap;
    }
  }

`,js=i`
@layer arc-components {

  [arc-icon-text] {
    ${Es}
    ${Ts}
    ${Is}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Ye}));
    color: var(--arc-icon-text-text-color, var(${sa}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${_a}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${qe}));

      &[is-flipped] { flex-direction: row-reverse; }

      &:not(:has([arc-gradient])) [data-element=icon] { display: contents; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Uo}));
        color: var(--arc-icon-text-subtext-color, var(${ei}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${qe}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Ho}));
        white-space: var(--arc-icon-text-white-space, var(${Vo}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] {
        line-height: normal;
        vertical-align: var(--arc-icon-text-icon-vertical-align, var(${Fo}));
      }

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${_a})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${_a})); }
      [data-element=subtext] { display: contents; }

      &:has(svg) {
        ${Fo}: text-bottom;
      }
    }
  }
}

`,Ls=L(lr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),Yr=({children:a,layout:r="gutter",size:e="inherit",variant:o="inherit",tag:t="span",icon:l,iconTooltip:n,text:h,subtext:d,gradient:v,overflow:u,iconSize:p,gapSize:g,isFlipped:f=!1,isStrong:k=!1,...z})=>{const I=a||h,M=!!l,_=!!I,E=r==="gutter",C=r==="inline",S=M&&(!f||E),F=M&&_&&f&&C,P=!!p&&p!=="inherit",G=P&&Ya.includes(p)?p:void 0,Z=P&&!Ya.includes(p)?p:void 0,or=g!=="inherit"?g:void 0,sr=u!=="inherit"?u:void 0,Q=Mn(l),dr=typeof Q=="string"?(0,c.jsx)(D,{icon:Q,size:Z,gradient:v}):Q,xr=n?(0,c.jsx)(bc,{text:n,children:dr}):dr;return(0,c.jsxs)(t,{...z,"arc-icon-text":"","data-variant":o,"data-layout":r,"data-overflow":sr,"data-size":e,"data-gap":or,"icon-size":G,"is-flipped":f?"":void 0,"is-strong":k?"":void 0,children:[S&&(0,c.jsx)("span",{"data-element":"icon",children:xr}),_&&(0,c.jsxs)("span",{"data-element":"text",children:[I,!!d&&(E?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("br",{}),(0,c.jsx)("small",{"data-element":"subtext",children:d})]}):(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsx)("span",{"data-element":"subtext",children:d})]}))]}),F&&(0,c.jsx)("span",{"data-element":"icon",children:xr})]})};H("ArcIconText",js);const da={...Or,popover:oc[2],anchorAt:cc[2],boundary:nc[1],tryFallbacks:!0,scheme:tc[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Wo=new WeakSet,Rs=100,Ms=100;let uc=!0,gc=null;const Bs=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),Ps=a=>a instanceof Element?Bs?a.matches(":focus-visible")===!0:uc:!1,pc=new WeakMap,fc=new WeakMap,Go=(a,r)=>{const e=a.get(r);e!=null&&(clearTimeout(e),a.delete(r))},oi=(a,r,e,o)=>{const t=window.setTimeout(()=>{o(),a.delete(r)},e);a.set(r,t)},ti="[aria-describedby]",Os=a=>typeof a=="object"&&a!==null&&a.hasAttribute?.("popover")===!0,ci=a=>a instanceof HTMLElement&&a.getAttribute("role")==="tooltip"&&Os(a),Ds=a=>!!a&&(a.tagName==="LABEL"||a.hasAttribute("arc-label")),Ns=a=>a?.match(/\S+/g)??[],mc=(a,r)=>{const e=la(r??document.documentElement);if(!e)return null;const o=e.querySelector(`[aria-describedby~="${a}"]`);return o?o.closest("label,[arc-label]")??o:null},Fs=a=>{if(!(a instanceof Element))return null;const r=a.closest?.(ti);if(r){const o=r.getAttribute("aria-describedby")??"";if(o)return{anchor:r.closest?.("label,[arc-label]")??r,tooltipId:o}}let e=a;for(;e;){if(Ds(e)){const o=e.querySelector?.(ti),t=o?.getAttribute?.("aria-describedby")??"";if(o&&t)return{anchor:e,tooltipId:t}}e=e.parentElement}return null},Hs=a=>{if(!(a instanceof Element))return null;const r=a.closest?.('[role="tooltip"][popover]')??null;return r instanceof HTMLElement?r:null},Vs=a=>a?.id?mc(a.id,a):null,Us=a=>{const r=Hs(a),e=Fs(a);if(!e&&r){const d=Vs(r);return!d||!r.id?null:{anchor:d,tooltip:r}}if(!e)return null;const{anchor:o,tooltipId:t}=e;if(!t)return null;const l=la(a);if(!l)return null;const n=Ns(t),h=r??n.map(d=>l.getElementById(d)).find(d=>ci(d))??null;return ci(h)?{anchor:o,tooltip:h}:null},Ws=(a,r,e)=>{const o=e instanceof Element?e:null;if(!o)return!1;const t=a===o||a.contains(o),l=r===o||r.contains(o);return t||l},Gs=(a,r)=>{if(Go(fc,a),Go(pc,a),!r){a.isConnected&&a.showPopover?.();return}oi(pc,a,Rs,()=>{a.isConnected&&a.showPopover?.()})},Zs=(a,r)=>{if(Go(pc,a),Go(fc,a),!r){a.isConnected&&a.hidePopover?.();return}oi(fc,a,Ms,()=>{a.isConnected&&a.hidePopover?.()})},Je=(a,r,e,o)=>{const t=Us(r);if(!t)return;const{anchor:l,tooltip:n}=t;if(a){Gs(n,o);return}Ws(l,n,e)||Zs(n,o)};let Zo=null,Ko=null,Yo=null,qo=null,Jo=null,Xo=null,xe=null;const ni=a=>{if(!a&&typeof document>"u")return;const r=a?la(a):document;if(!r||Wo.has(r))return;Xo=o=>{uc=!1,gc=o.target},xe=()=>{gc=null},Zo=o=>Je(!0,o.target,void 0,!0),Ko=o=>{Ps(o.target)&&Je(!0,o.target,void 0,!1)},Yo=o=>Je(!1,o.target,o.relatedTarget,!0),qo=o=>{const t=o.relatedTarget??gc;Je(!1,o.target,t,!1)},Jo=o=>{o.key==="Tab"&&(uc=!0),o.key==="Escape"&&Je(!1,o.target,void 0,!1)},[["pointerdown",Xo],["pointerup",xe],["pointercancel",xe],["pointerover",Zo],["focusin",Ko],["pointerout",Yo],["focusout",qo],["keydown",Jo]].forEach(([o,t])=>{r.addEventListener(o,t)}),Wo.add(r)},Ks=()=>{if(!Wo.has(document)||typeof document>"u")return;[["pointerdown",Xo],["pointerup",xe],["pointercancel",xe],["pointerover",Zo],["focusin",Ko],["pointerout",Yo],["focusout",qo],["keydown",Jo]].forEach(([r,e])=>{e&&document.removeEventListener(r,e)}),Zo=null,Ko=null,Yo=null,qo=null,Jo=null,Xo=null,xe=null,Wo.delete(document)},ha=i`--arc•tooltip`,ii=i`${ha}•subtext`,li=i`${ha}•slot`,Ys=i`
@layer arc-components {
  [arc-tooltip] {
    ${ha}•width: max-content;
    ${ha}•max•width: 20em;
    ${ha}•font•size: var(${s}•12);
    ${ha}•padding: var(${m}•10);
    ${ii}•spacing: var(${m}•6);
    ${li}•margin•top: var(${m}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: auto; /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${ha}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${ha}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${ha}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${ha}•padding));

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${ha}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-line-height: var(--arc-line-height-tight);
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${ii}•spacing));

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${li}•margin•top));
    }
  }
}
`,bc=(0,y.forwardRef)(({id:a,children:r,slot:e,isEnabled:o=da.isEnabled,popover:t=da.popover,variant:l=da.variant,anchorAt:n=da.anchorAt,alternateAnchor:h,boundary:d=da.boundary,tryFallbacks:v=da.tryFallbacks,hasTail:u=da.hasTail,offset:p=da.offset,scheme:g=da.scheme,isStrong:f=da.isStrong,text:k,subtext:z,icon:I,isFlipped:M,..._},E)=>{const C=Kr(a,"arc-tooltip"),S=(0,y.useRef)(null);(0,y.useImperativeHandle)(E,()=>S.current);const F=Q=>typeof Q=="object"&&Q!==null&&"tabIndex"in Q,P=r,G=!!h;let Z=null;(0,y.isValidElement)(P)?Z=o?(0,y.cloneElement)(P,{"aria-describedby":C,...F(P.props)&&P.props.tabIndex!=null?{}:{tabIndex:0}}):P:!G&&typeof console<"u"&&Qn("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const or=(0,y.useMemo)(()=>()=>mc(C,S.current),[C]),sr=g==="auto"?void 0:g;return(0,y.useEffect)(()=>{if(o)try{ni(S.current)}catch{}},[o]),(0,c.jsxs)(c.Fragment,{children:[Z,o&&(0,c.jsxs)(eo,{..._,"arc-tooltip":"",scheme:_?.isInverse?"inverse":sr,role:"tooltip",id:C,ref:S,popover:t,anchorAt:n,tryFallbacks:v||d==="flip",variant:l,hasTail:u,offset:p,hidePopoverButton:!0,alternateAnchor:h??or,tag:_?.tag??"span",contentTag:_?.contentTag??"span",children:[k&&(0,c.jsx)(Yr,{"arc-tooltip-content":"",text:k,subtext:z,icon:I,isFlipped:M,isStrong:f,size:"inherit",variant:"inherit"}),e&&(0,c.jsx)("span",{"arc-tooltip-slot-content":"",children:e})]})]})});H("ArcTooltip",Ys);const qs=L(Le,["circle","square","narrow"]),Js=L(_r,["xxl","xl","lg","md","sm"]),Xs=L(na,["hug","fill","icon"]),Qs=L(lr,["common","ai","critical","alpha"]),rd=[...Da],ad=[...zo],si=L(lr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),ed=L(Co,["primary","secondary","tertiary","plain","link-style"]),od=[...ve],td=i`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* common-secondary variant floating button */
  --arc-button-common-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-common-secondary-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));
  --arc-button-common-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-common-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-common-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* critical-secondary variant floating button */
  --arc-button-critical-secondary-floating-bg: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-secondary-floating-bg-active: var(--arc-color-bg-critical-muted);
  --arc-button-critical-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-critical-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-critical-secondary-floating-bg-focus: var(--arc-color-bg-primary);

  /* ai-secondary variant floating button */
  --arc-button-ai-secondary-floating-bg-processing: var(--arc-color-bg-primary);
  --arc-button-ai-secondary-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-ai-secondary-floating-bg-focus: var(--arc-color-bg-primary);
}
`,cd=i`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-blue-600));
}
`,nd=i`
:root {
  --arc-popover-ai-purple-50: light-dark(#fbf2ff, #210125);
  --arc-popover-ai-purple-200: light-dark(#9c15ff, #ad44cb);
  --arc-popover-ai-blue-50: light-dark(#f4fbff, #00223b);
  --arc-popover-ai-blue-200: light-dark(#1eb4fb, #169cfe);
}
`,$=i`--arc•button`,w=i`${$}•fg`,b=i`${$}•bg`,B=i`${$}•edge`,Tr=i`${$}•border`,ke=i`${$}•outline`,U=i`${$}•spinner`,Ar=i`${$}•icon`,id=i`
  &[data-size=xxl] {
    ${$}•font•size: var(${s}•16);
    ${U}•size: var(${s}•32);
    ${Ar}•size: var(${s}•20);
    ${Ar}•size•large: var(${s}•24);
    ${$}•height: var(${s}•56);
    ${$}•gap: var(${s}•10);
    ${$}•padding•inline: var(${s}•32);
  }

  &[data-size=xl] {
    ${$}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${Ar}•size: var(${s}•16);
    ${Ar}•size•large: var(${s}•20);
    ${$}•height: var(${s}•48);
    ${$}•gap: var(${s}•8);
    ${$}•padding•inline: var(${s}•32);
  }

  &[data-size=lg] { /** @default */
    ${$}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${Ar}•size: var(${s}•16);
    ${Ar}•size•large: var(${s}•20);
    ${$}•height: var(${s}•40);
    ${$}•gap: var(${s}•8);
    ${$}•padding•inline: var(${s}•20);
  }

  &[data-size=inherit] {
    ${$}•font•size: 1em;
    ${U}•size: 1em;
    ${Ar}•size: 1em;
    ${Ar}•size•large: 1.25em;
    ${$}•gap: 0.5em;
    ${$}•padding•inline: 1em;
  }

  &[data-size=md] {
    ${$}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${Ar}•size: var(${s}•14);
    ${Ar}•size•large: var(${s}•20);
    ${$}•height: var(${s}•32);
    ${$}•gap: var(${s}•6);
    ${$}•padding•inline: var(${s}•16);
  }

  &[data-size=sm] {
    ${$}•font•size: var(${s}•12);
    ${U}•size: var(${s}•14);
    ${Ar}•size: var(${s}•12);
    ${Ar}•size•large: var(${s}•14);
    ${$}•height: var(${s}•24);
    ${$}•gap: var(${s}•4);
    ${$}•padding•inline: var(${s}•12);
  }

  /* Custom buttons start out matching [data-size=lg] size */
  &[arc-button=custom] {
    ${$}•font•size: var(${s}•14);
    ${U}•size: var(${s}•16);
    ${Ar}•size: var(${s}•16);
    ${Ar}•size•large: var(${s}•20);
    ${$}•gap: var(${s}•8);
    ${$}•padding•inline: var(${s}•4); /* results in 24x24 for icon button @ 100% font size */
  }
`,ld=i`
  &[data-layout=hug] {
    ${$}•width: auto;
    ${$}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${$}•display: flex;
    ${$}•width: 100%;
    ${$}•content•width: 0;
  }

  &[data-layout=icon] {
    ${$}•aspect•ratio: 1 / 1;
    ${$}•flex: none;
    ${$}•min•width: min-content;
    ${$}•max•width: none;
    ${$}•padding•inline: var(${s}•0);

    &[data-shape=narrow] {
      ${$}•aspect•ratio: auto;
      ${$}•padding•inline: var(${s}•2);
    }
  }

`,sd=i`
  &:not([data-variant]) { /** @default - when no variant is set (i.e.: 'custom' buttons) */
    ${w}: inherit;
    ${b}: transparent;
    ${B}: transparent;
    ${w}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &:is(
    [data-variant=common],
    [data-variant=primary],
    [data-variant=primary-inverse]
  ) {
    ${w}: var(--arc-color-fg-on-theme-heavy);
    ${b}: var(--arc-color-bg-theme-heavy);
    ${B}: transparent;

    ${w}•active: var(--arc-color-fg-on-theme-mid);
    ${w}•processing: var(--arc-color-fg-on-theme-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-theme-stark);
    ${b}•active: var(--arc-color-bg-theme-mid);
    ${b}•processing: var(--arc-color-bg-theme-stark);
    ${b}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=secondary], &[data-variant=secondary-inverse] { /** @default - when icon-only */
    ${w}: var(--arc-color-fg-primary);
    ${B}: var(--arc-color-border-theme-heavy);

    ${w}•active: var(--arc-color-fg-secondary);
    ${w}•processing: var(--arc-color-fg-secondary);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${B}•active: var(--arc-color-border-theme-mid);
    ${B}•processing: var(--arc-color-border-theme-subtle);
    ${B}•disabled: var(--arc-color-border-disabled);

    &[data-layout=icon] {
      ${B}: var(--arc-color-border-mid);
      ${B}•hover: var(--arc-color-border-stark);
      ${B}•focus: var(--arc-color-border-mid);
    }

    &[data-hierarchy=secondary] {
      ${b}: transparent;
      ${b}•hover: var(--arc-color-bg-neutral-muted);
      ${b}•active: var(--arc-color-bg-neutral-subtle);
      ${b}•processing: transparent;
      ${b}•disabled: transparent;
      ${b}•focus: var(--arc-color-alpha-white-3);
    }
  }

  &[data-variant=secondary]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${b}: var(--arc-color-mono-white);
    ${b}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-white);
    ${b}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-white);
    ${b}•processing: var(--arc-color-mono-white);
    ${b}•disabled: var(--arc-color-mono-white);
    ${b}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-white);
  }

  &[data-variant=secondary-inverse]:not([data-hierarchy=secondary]) { /** @deprecated */
    ${b}: var(--arc-color-mono-black);
    ${b}•hover: linear-gradient(var(--arc-color-bg-neutral-muted) 0 0), var(--arc-color-mono-black);
    ${b}•active: linear-gradient(var(--arc-color-bg-neutral-subtle) 0 0), var(--arc-color-mono-black);
    ${b}•processing: var(--arc-color-mono-black);
    ${b}•disabled: var(--arc-color-mono-black);
    ${b}•focus: linear-gradient(var(--arc-color-alpha-white-3) 0 0), var(--arc-color-mono-black);
  }

  /* "floating" button mitigation */
  &:is([data-variant=secondary], [data-variant=secondary-inverse])[arc-shadow] {
    ${b}: var(--arc-button-common-secondary-floating-bg);
    ${b}•hover: var(--arc-button-common-secondary-floating-bg-hover);
    ${b}•active: var(--arc-button-common-secondary-floating-bg-active);
    ${b}•processing: var(--arc-button-common-secondary-floating-bg-processing);
    ${b}•disabled: var(--arc-button-common-secondary-floating-bg-disabled);
    ${b}•focus: var(--arc-button-common-secondary-floating-bg-focus);
  }

  &:is(
    [data-variant=tertiary],
    [data-variant=tertiary-inverse]
   ) {
    ${w}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${B}: transparent;

    ${w}•active: var(--arc-color-fg-secondary);
    ${w}•processing: var(--arc-color-fg-secondary);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-neutral-muted);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-neutral-muted);
    ${b}•processing: var(--arc-color-bg-neutral-muted);
  }

  &[data-hierarchy=plain] {
    ${w}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${B}: transparent;

    ${w}•hover: var(--arc-color-alpha-heavy);
    ${w}•active: var(--arc-color-alpha-heavy);
    ${w}•processing: var(--arc-color-alpha-heavy);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: transparent;
    ${b}•active: transparent;
    ${b}•processing: transparent;
  }

`,dd=i`
  &[data-variant=ai-primary] {
    ${w}: var(--arc-color-fg-on-theme-stark);
    ${b}: var(--arc-gradient-ai-500) padding-box, var(--arc-gradient-ai-200) border-box;

    ${U}•base•color: var(--arc-color-alpha-white-30);

    ${w}•active: var(--arc-color-fg-neutral-mid);
    ${w}•processing: var(--arc-color-fg-on-theme-heavy);
    ${w}•hover: var(--arc-color-fg-on-theme-heavy);

    ${b}•hover: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-200) border-box;
    ${b}•active: var(--arc-gradient-ai-600) padding-box, var(--arc-gradient-ai-200) border-box;
    ${b}•processing: var(--arc-gradient-ai-400) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•disabled: var(--arc-color-bg-disabled);
  }

  &[data-variant=ai-secondary] {
    ${w}: var(--arc-color-fg-primary);
    ${b}: linear-gradient(var(--arc-color-bg-primary) 0 0) padding-box, var(--arc-gradient-ai-200) border-box;

    ${w}•active: var(--arc-color-fg-neutral-stark);
    ${w}•processing: var(--arc-color-fg-primary);

    ${b}•hover: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-300) border-box;
    ${b}•active: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•processing: var(--arc-gradient-ai-50) padding-box, var(--arc-gradient-ai-100) border-box;
    ${b}•disabled: var(--arc-color-bg-disabled);
    ${b}•focus: var(--arc-color-alpha-white-3);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}•processing: var(--arc-button-ai-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-ai-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-ai-secondary-floating-bg-focus);
    }
  }

  &[data-variant^=ai-] {
    ${B}: transparent;

    ${w}•disabled: var(--arc-color-fg-disabled);
    ${B}•disabled: var(--arc-color-border-disabled);
  }

`,hd=i`
  &[data-variant=alpha-primary] {
    ${w}: var(--arc-color-mono-black);
    ${b}: var(--arc-color-mono-white);
    ${B}: transparent;

    ${w}•focus: var(--arc-color-mono-black);
    ${w}•active: var(--arc-color-alpha-black-60);
    ${w}•processing: var(--arc-color-mono-black);
    ${w}•disabled: var(--arc-color-alpha-black-60);

    ${b}•hover: var(--arc-color-alpha-white-70);
    ${b}•focus: var(--arc-color-mono-white);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-40);
    ${b}•disabled: var(--arc-color-alpha-white-15);
  }

  &[data-variant=alpha-secondary] {
    ${w}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${B}: var(--arc-color-alpha-white-80);

    ${w}•active: var(--arc-color-alpha-white-80);
    ${w}•processing: var(--arc-color-alpha-white-95);
    ${w}•disabled: var(--arc-color-alpha-white-50);

    ${b}•hover: var(--arc-color-alpha-white-20);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-25);
    ${b}•disabled: transparent;

    ${B}•hover: var(--arc-color-alpha-white-100);
    ${B}•focus: var(--arc-color-alpha-white-80);
    ${B}•active: var(--arc-color-alpha-white-50);
    ${B}•processing: transparent;
    ${B}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant=alpha-tertiary] {
    ${w}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${B}: transparent;

    ${w}•active: var(--arc-color-alpha-black-60);
    ${w}•processing: var(--arc-color-alpha-white-95);
    ${w}•disabled: var(--arc-color-alpha-white-50);

    ${b}•hover: var(--arc-color-alpha-white-20);
    ${b}•focus: var(--arc-color-alpha-white-5);
    ${b}•active: var(--arc-color-alpha-white-40);
    ${b}•processing: var(--arc-color-alpha-white-20);
    ${b}•disabled: transparent;
  }

  &:is(
    [data-variant=alpha-plain],
    [data-variant=alpha-link-style]
  ) {
    ${w}: var(--arc-color-alpha-white-95);
    ${b}: transparent;
    ${B}: transparent;

    ${w}•hover: var(--arc-color-alpha-white-60);
    ${w}•active: var(--arc-color-alpha-white-40);
    ${w}•processing: var(--arc-color-alpha-white-95);
    ${w}•disabled: var(--arc-color-alpha-white-30);
  }

  &[data-variant^=alpha-] {
    ${U}•base•color: var(--arc-color-alpha-white-30);
  }
`,vd=i`
  &[data-variant=link-style] {
    ${w}: var(--arc-color-fg-primary);
    ${b}: transparent;
    ${B}: transparent;

    ${w}•hover: var(--arc-color-alpha-heavy);
    ${w}•active: var(--arc-color-alpha-heavy);
    ${w}•processing: var(--arc-color-alpha-heavy);
    ${w}•disabled: var(--arc-color-fg-disabled);
  }
`,ud=i`
  &[data-variant=critical-primary] {
    ${w}: var(--arc-color-fg-on-stark);
    ${b}: var(--arc-color-bg-critical-stark);
    ${B}: transparent;

    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-on-heavy);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-color-bg-critical-heavy);
    ${b}•active: var(--arc-color-bg-critical-heavy);
    ${b}•processing: var(--arc-color-bg-critical-heavy);
    ${b}•disabled: var(--arc-color-bg-disabled);

    ${U}•base•color: var(--arc-color-alpha-white-30);
  }

  &[data-variant=critical-secondary] {
    ${w}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${B}: var(--arc-color-border-critical-stark);

    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-critical-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-button-critical-bg-hover);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-critical-muted);
    ${b}•disabled: transparent;

    ${B}•active: var(--arc-color-border-critical-subtle);
    ${B}•processing: var(--arc-color-border-critical-stark);
    ${B}•disabled: var(--arc-color-border-disabled);

    /* "floating" button mitigation */
    &[arc-shadow] {
      ${b}: var(--arc-button-critical-secondary-floating-bg);
      ${b}•hover: var(--arc-button-critical-secondary-floating-bg-hover);
      ${b}•active: var(--arc-button-critical-secondary-floating-bg-active);
      ${b}•processing: var(--arc-button-critical-secondary-floating-bg-processing);
      ${b}•disabled: var(--arc-button-critical-secondary-floating-bg-disabled);
      ${b}•focus: var(--arc-button-critical-secondary-floating-bg-focus);
    }
  }

  &[data-variant=critical-tertiary] {
    ${w}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${B}: transparent;

    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-critical-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);

    ${b}•hover: var(--arc-button-critical-bg-hover);
    ${b}•focus: var(--arc-color-alpha-white-3);
    ${b}•active: var(--arc-color-bg-critical-subtle);
    ${b}•processing: var(--arc-color-bg-critical-muted);
    ${b}•disabled: transparent;
  }

  &:is(
    [data-variant=critical-plain],
    [data-variant=critical-link-style]
  ) {
    ${w}: var(--arc-color-fg-critical-stark);
    ${b}: transparent;
    ${B}: transparent;

    ${w}•hover: var(--arc-color-fg-critical-mid);
    ${w}•active: var(--arc-color-fg-critical-subtle);
    ${w}•processing: var(--arc-color-fg-critical-stark);
    ${w}•disabled: var(--arc-color-fg-disabled);
  }

`,gd=i`
  ${$}•color: var(${w});
  ${$}•background: var(${b});
  ${$}•font•weight: var(--arc-font-weight-600);
  ${$}•padding: 0 var(${$}•padding•inline);
  ${$}•content•opacity: 1;
  ${$}•cursor: var(--arc-button-cursor, pointer);
  ${$}•transition: 0.2s ease-out;

  ${Tr}•color: var(${B});
  ${Tr}: var(--arc-border-width-sm) solid var(${Tr}•color, transparent);

  ${ke}: var(--arc-border-width-md) solid var(${ke}•color, transparent);
  ${ke}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${U}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${U}•circle•color: var(--arc-button-color, var(${U}•base•color, var(--arc-color-alpha-mid)));
  ${U}•circle•opacity: var(--arc-alpha-100);

  /* CONTEXT OVERRIDES */
  &[arc-button=custom] {
    ${$}•font•weight: normal;
  }

  &[data-variant^=ai-] {
    ${Tr}: var(--arc-border-width-md) solid var(${Tr}•color, transparent);
  }

  &:is(:not([data-shape]), [data-shape=circle]) {
    ${Tr}•radius: var(--arc-border-radius-pill);
  }

  &:is(
    [arc-button=custom],
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Tr}•radius: var(--arc-border-radius-md);
  }

  &:is(
    [arc-button=custom],
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${$}•padding: unset;
    ${$}•height: unset;
  }

  /* border-radius for plain and link-style informs focus state outline radius */
  &:is(
    [data-hierarchy=plain],
    [data-hierarchy=link-style]
  ) {
    ${Tr}•radius: var(--arc-border-radius-sm);
  }

  &[data-hierarchy=link-style] {
    ${$}•font•weight: inherit;
    ${$}•text•decoration: none;

    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication ---------------------------------• */

  /** ArcIcon */
  --arc-icon-fa-line-height: 1lh;
  --arc-icon-size: var(${Ar}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${Ar}•size•large);
  }

  /** ArcSpinner */
  --arc-spinner-size: var(${U}•size);
  --arc-spinner-progress-color: var(${U}•progress•color);
  --arc-spinner-circle-color: var(${U}•circle•color);
  --arc-spinner-circle-opacity: var(${U}•circle•opacity);
  --arc-spinner-position: var(${U}•position, absolute);
  --arc-spinner-inset: var(${U}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${U}•translate, -50% -50%);

`,pd=i`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has(input)
  ) {
    ${$}•position: relative;
  }

  &[is-disabled] {
    ${$}•color: var(${w}•disabled, var(${w}));
    ${$}•background: var(${b}•disabled, var(${b}));
    ${Tr}•color: var(${B}•disabled, var(${B}));
    ${$}•opacity: var(--arc-button-disabled-opacity, unset);
    ${$}•cursor: var(--arc-button-disabled-cursor, not-allowed);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${$}•color: var(${w}•hover, var(${w}));
      ${$}•background: var(${b}•hover, var(${b}));
      ${Tr}•color: var(${B}•hover, var(${B}));
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${$}•color: var(${w}•active, var(${w}));
      ${$}•background: var(${b}•active, var(${b}));
      ${Tr}•color: var(${B}•active, var(${B}));
    }
  }

  &[is-processing] {
    ${$}•content•visibility: hidden;
    ${$}•content•opacity: 0;

    /* spinner svg position controls */
    ${U}•position: absolute;
    ${U}•inset: 50% auto auto 50%;
    ${U}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${$}•content•visibility: visible;

    /* spinner svg position controls */
    ${U}•position: relative;
    ${U}•inset: 0;
    ${U}•translate: 0;
    ${U}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${$}•opacity: var(--arc-button-processing-opacity, unset);
    ${$}•cursor: var(--arc-button-processing-cursor, default);

    ${$}•color: var(${w}•processing, var(${w}));
    ${$}•background: var(${b}•processing, var(${b}));
    ${Tr}•color: var(${B}•processing, var(${B}));

    &:is(
      [data-variant*=secondary],
      [data-variant*=tertiary],
      [data-hierarchy=plain],
      [data-hierarchy=link-style],
      [arc-scheme=inverse]:not([data-variant*=primary])
    ):not(
      [data-variant^=alpha-]
    ) {
      ${U}•progress•color: var(--arc-color-border-brand-mid);
    }
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${$}•color: var(${w}•focus, var(${w}));
    ${$}•background: var(${b}•focus, var(${b}));
    ${Tr}•color: var(${B}•focus, var(${B}));
    ${ke}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,fd=i`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${td}

  :where([arc-button]) {
    /* SIZES -------------------------------------------------------• */
    ${id}

    /* LAYOUTS -----------------------------------------------------• */
    ${ld}

    /* VARIANTS ----------------------------------------------------• */
    ${sd}
    ${vd}
    ${dd}
    ${hd}
    ${ud}

    /* CORE VARIABLES ----------------------------------------------• */
    ${gd}
    ${pd}

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${$}•cursor));
    position: var(--arc-button-position, var(${$}•position, unset));
    transition: var(--arc-button-transition, var(${$}•transition));

    /* FOOTPRINT */

    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${$}•font•weight));
    font-size: var(--arc-button-font-size, var(${$}•font•size, inherit));
    padding: var(--arc-button-padding, var(${$}•padding));

    width: var(--arc-button-width, var(${$}•width, auto));
    min-width: var(--arc-button-min-width, var(${$}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${$}•max•width, 100%));

    height: var(--arc-button-height, var(${$}•height, auto));
    min-height: var(--arc-button-min-height, var(${$}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${$}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${$}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${$}•color));
    background: var(--arc-button-background, var(${$}•background));
    border: var(--arc-button-border, var(${Tr}));
    border-radius: var(--arc-button-border-radius, var(${Tr}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${ke}));
    outline-offset: var(--arc-button-outline-offset, var(${ke}•offset));

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* "floating" button mitigation */
    &[arc-shadow] {
      backdrop-filter: blur(0.5em);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;
      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-gap, var(${$}•gap));

      opacity: var(--arc-button-content-opacity, var(${$}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${$}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${$}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, var(${$}•transition));

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      opacity: var(--arc-button-label-opacity, var(${$}•opacity));
      transition: var(--arc-button-label-transition, var(${$}•transition));
    }

    [arc-button-icon] {
      width: 1.25em; /** keeping for fontawesome v6 backward compatibility */
      opacity: var(--arc-button-icon-opacity, var(${$}•opacity));
      transition: var(--arc-button-icon-transition, var(${$}•transition));
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${$}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,di=(0,c.jsx)(hc,{}),Ir=(0,y.forwardRef)(({children:a,disabled:r,...e},o)=>{const t=(0,y.useRef)(null),{iconEnd:l,iconStart:n,icon:h,text:d,isActive:v,isDisabled:u,isProcessing:p,isProcessingWithText:g,hasLargeIcon:f,tag:k,href:z,type:I,title:M,layout:_,shape:E,size:C="lg",variant:S="common",hierarchy:F="primary",isInverse:P=!1,scheme:G="auto",shadow:Z,_isCustom:or,...sr}=e,Q=k??(z?"a":"button"),dr=Q==="button"?I||"button":void 0,xr=_==="icon",vr=g||p||u||r,ea=sr?.["aria-disabled"]||vr||void 0,nr=!xr&&(a||d),Fr=g&&di||n||h,Hr=!xr&&(g&&!(n||h)?void 0:l),oa=(p||g&&xr)&&di,La=S&&si.includes(S),Ra=(()=>{if(La)return S;const Oa=F||"primary";if(S==="ai"){const Nv=["primary","secondary"].includes(Oa)?Oa:"primary";return`${S}-${Nv}`}return Oa==="link-style"?S==="critical"||S==="alpha"?`${S}-${Oa}`:"link-style":S==="common"?Oa:S==="alpha"||S==="critical"?`${S}-${Oa}`:S})(),ta=G==="auto"?void 0:G,V=Ra?.endsWith("-inverse")?"inverse":void 0,kr=P?"inverse":ta??V,ir=Z===!0?"lg":Z,{tooltip:Mr,...ka}=sr,wa=No(Mr)?Mr:void 0,Aa=e.tooltip??wa,Wa=!!Aa,Et=No(Aa)?{text:Aa}:Aa,ko=sr["aria-describedby"],de=(0,y.useRef)(void 0),tn=Kr(void 0,"arc-tooltip"),wo=e.id?`${e.id}-tooltip`:tn;Wa&&!de.current&&(de.current=wo);const cn=Wa?We([ko,de.current]):ko,{anchorName:nn,style:Tt,popoverTarget:Ga,popoverTargetAction:It,...ln}=ka,Ma=Ga?Ze(String(nn||e?.id)):void 0,Ba=Wa?Ze(String(wo)):void 0,Pa=Jn(Tt)?Tt:void 0,je=Pa&&"anchorName"in Pa&&Pa.anchorName,sn=[...(No(je)?Xn(je,", "):[]).map(Ze),...Ma?[Ma]:[],...Ba?[Ba]:[]],jt=We(sn,1/0,", "),Dv={...Pa??{},...jt?{anchorName:jt}:{}};let bl={popoverTarget:Ga||void 0,popoverTargetAction:It||void 0};return y.version.startsWith("18")&&(bl={popovertarget:Ga||void 0,popovertargetaction:It||void 0}),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(Q,{...ln,...bl,ref:Oa=>{t.current=Oa,za(o,Oa)},"arc-button":or?"custom":"","arc-scheme":kr,"arc-shadow":ir||void 0,disabled:!z&&vr||void 0,href:z||void 0,title:Wa?void 0:M||void 0,type:dr,"data-layout":_,"data-shape":or?void 0:E,"data-size":or?void 0:C,"data-variant":or?void 0:Ra,"data-hierarchy":F||void 0,"has-large-icon":f?"":void 0,"is-active":v?"":void 0,"is-processing":p||g&&xr?"":void 0,"is-processing-with-text":g&&!xr?"":void 0,"is-disabled":vr||ea?"":void 0,"aria-disabled":ea,"aria-describedby":cn||void 0,style:Dv,children:[(0,c.jsxs)("span",{"arc-button-content":"",children:[Fr&&typeof Fr=="string"?(0,c.jsx)(D,{"arc-button-icon":"",icon:Fr}):Fr&&(0,c.jsx)("span",{"arc-button-icon":"",children:Fr}),!!nr&&(0,c.jsx)("span",{"arc-button-label":"",children:nr}),Hr&&typeof Hr=="string"?(0,c.jsx)(D,{"arc-button-icon":"",icon:Hr}):Hr&&(0,c.jsx)("span",{"arc-button-icon":"",children:Hr})]}),oa]}),Wa&&(0,c.jsx)(bc,{...Et,id:de.current,alternateAnchor:Et?.alternateAnchor??(()=>t.current),anchorName:Ba})]})});Ir.displayName="ArcButton",H("ArcButton",fd);const Xe=(0,y.forwardRef)((a,r)=>(0,c.jsx)(Ir,{...a,ref:r,"arc-popover-button":""})),hi=({isInverse:a=!1,isOpen:r,...e})=>(0,c.jsx)(Ir,{...e,icon:"fa-regular fa-xmark",text:"Dismiss",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:a,"arc-popover-dismiss":""}),md=({children:a,showDismiss:r,dismissProps:e,tag:o="header",...t})=>(0,c.jsxs)(o,{...t,"arc-popover-header":"",children:[a,r&&(0,c.jsx)(hi,{...e})]}),bd=({tag:a="article",...r})=>(0,c.jsx)(a,{...r,"arc-popover-body":""}),$d=({showDivider:a,tag:r="footer",...e})=>(0,c.jsx)(r,{...e,"arc-popover-footer":"","has-divider":a?"":void 0});Xe.displayName="ArcPopoverButton";const A=i`--arc-popover`,zr=i`--arc•popover`,R=i`--arc•trail•mix`,$c=i`${zr}•radius`,yd=i`${zr}•content`,Qo=i`${zr}•outline`,jr=i`${zr}•offset`,rt=i`${zr}•header`,xd=i`${zr}•body`,vi=i`${zr}•divider`,at=i`${zr}•footer`,va=i`${zr}•tail`,K=i`${va}•top`,Y=i`${va}•left`,Qe=i`${va}•size`,Wr=i`${va}•x`,Gr=i`${va}•y`,et=i`${zr}•padding`,Lr=i`${zr}•margin`,we=i`${rt}•padding`,qr=i`${xd}•padding`,fa=i`${at}•padding`,ui=i`${zr}•fg`,ot=i`${zr}•bg`,tt=i`${yd}•bg`,ct=i`${va}•fill•a`,nt=i`${va}•fill•b`,it=i`${va}•edge•a`,lt=i`${va}•edge•b`,kd=i`

  ${zr}•fallback: none;
  ${Qo}: var(${A}-outline-size, var(--arc-border-width-md));
  ${$c}: var(${A}-border-radius, var(--arc-border-radius-lg));
  ${jr}: var(${A}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${et}: var(${m}•14);

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${R}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${Wr}: var(${A}-tail-x, 1.75em);
  ${Gr}: var(${A}-tail-y, 1.125em);
  ${Qe}: 0px;

  &:where([has-tail]) {
    ${Qe}: var(${A}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${jr}: calc(var(${A}-offset, var(--js•offset, 0px)) + var(${Qe}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${et}: 0;
    &:has([arc-popover-header]) { ${qr}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${qr}•block•end: 0; }
  }

`,wd=i`

  /* default variant: common */
  &[variant] {
    ${ui}: var(--arc-color-fg-primary);
    ${ot}: var(${A}-background, var(--arc-color-bg-mono)) border-box;
    ${tt}: var(${A}-background, var(--arc-color-bg-mono)) padding-box;
    ${ct}: var(${A}-background, var(--arc-color-bg-mono));
    ${nt}: var(${A}-background, var(--arc-color-bg-mono));
    ${it}: var(${A}-background, var(--arc-color-bg-mono));
    ${lt}: var(${A}-background, var(--arc-color-bg-mono));
    ${zr}•shadow: var(--arc-shadow-lg);
    ${vi}•color: var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${ot}: var(--arc-color-border-brand-mid) border-box;
    ${tt}: var(--arc-color-bg-brand-muted) padding-box;
    ${ct}: var(--arc-color-bg-brand-muted);
    ${nt}: var(--arc-color-bg-brand-muted);
    ${it}: var(--arc-color-border-brand-mid);
    ${lt}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${ot}: var(--arc-gradient-ai-200) border-box;
    ${tt}: var(--arc-gradient-ai-50) padding-box;
    ${ct}: var(${A}-ai-purple-50);
    ${nt}: var(${A}-ai-blue-50);
    ${it}: var(${A}-ai-purple-200);
    ${lt}: var(${A}-ai-blue-200);
  }

`,Ad=i`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${rt}•gap: var(${m}•12);
    ${we}•block: var(${m}•12);
    ${we}•inline: var(${m}•12);

    ${qr}•block: var(${m}•12);
    ${qr}•inline: var(${m}•12);

    ${at}•gap: var(${m}•12);
    ${fa}•inline: var(${m}•12);
    ${fa}•block•start: var(${m}•12);
    ${fa}•block•end: var(${m}•12);
  }

  &[density=comfortable] {
    ${rt}•gap: var(${m}•18);
    ${we}•block: var(${m}•16);
    ${we}•inline: var(${m}•20);

    ${qr}•block: var(${m}•20);
    ${qr}•inline: var(${m}•20);

    ${at}•gap: var(${m}•18);
    ${fa}•inline: var(${m}•20);
    ${fa}•block•start: var(${m}•16);
    ${fa}•block•end: var(${m}•20);

    &:not(:has([arc-popover-body])) {
      ${et}: var(${m}•20);
    }

    [arc-popover-content] {
      font-size: var(${A}-font-size, var(${s}•14));
    }
  }

`,ro={TOP:i`
    &[anchor-at*='top-'] {
      ${Lr}: 0 0 var(${jr}) 0;
      ${K}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${R}: 95%;
      ${Y}: calc(0% + var(${Wr}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${R}: 75%;
      ${Y}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${R}: 53.5%;
      ${Y}: calc(100% - var(${Wr}));
    }
  `,RIGHT:i`
    &[anchor-at*='right-'] {
      ${Lr}: 0 0 0 var(${jr});
      ${Y}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${R}: 53.5%;
      ${K}: calc(0% + var(${Gr}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${R}: 75%;
      ${K}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${R}: 95%;
      ${K}: calc(100% - var(${Gr}));
    }
  `,BOTTOM:i`
    &[anchor-at*='bottom-'] {
      ${Lr}: var(${jr}) 0 0 0;
      ${K}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${R}: 5%;
      ${Y}: calc(100% - var(${Wr}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${R}: 25%;
      ${Y}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${R}: 47.5%;
      ${Y}: calc(0% + var(${Wr}));
    }
  `,LEFT:i`
    &[anchor-at*='left-'] {
      ${Lr}: 0 var(${jr}) 0 0;
      ${Y}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${R}: 47.5%;
      ${K}: calc(100% - var(${Gr}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${R}: 25%;
      ${K}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${R}: 5%;
      ${K}: calc(0% + var(${Gr}));
    }
  `,CENTER_AND_CORNERS:i`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${va}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Lr}: 0; }
    &[anchor-at*='corner'] { ${Lr}: var(${jr}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},Ae={FLIP_BLOCK:i`
    &[anchor-at*='top-'] { ${Lr}: 0 0 var(${jr}) 0; }
    &[anchor-at='top-start']::before { ${R}: 47.5%; ${K}: 0%; }
    &[anchor-at='top-center']::before { ${R}: 25%; ${K}: 0%; }
    &[anchor-at='top-end']::before { ${R}: 5%; ${K}: 0%; }

    &[anchor-at='right-start']::before { ${R}: 95%; ${K}: calc(100% - var(${Gr})); }
    &[anchor-at='right-end']::before { ${R}: 53.5%; ${K}: calc(0% + var(${Gr})); }

    &[anchor-at*='bottom-'] { ${Lr}: var(${jr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${R}: 53.5%; ${K}: 100%; }
    &[anchor-at='bottom-center']::before { ${R}: 75%; ${K}: 100%; }
    &[anchor-at='bottom-start']::before { ${R}: 95%; ${K}: 100%; }

    &[anchor-at='left-end']::before { ${R}: 5%; ${K}: calc(0% + var(${Gr})); }
    &[anchor-at='left-start']::before { ${R}: 47.5%; ${K}: calc(100% - var(${Gr})); }
  `,FLIP_INLINE:i`
    &[anchor-at='top-start']::before { ${R}: 53.5%; ${Y}: calc(100% - var(${Wr})); }
    &[anchor-at='top-end']::before { ${R}: 95%; ${Y}: calc(0% + var(${Wr})); }

    &[anchor-at*='right-'] { ${Lr}: 0 var(${jr}) 0 0; }
    &[anchor-at='right-start']::before { ${R}: 5%; ${Y}: 100%; }
    &[anchor-at='right-center']::before { ${R}: 25%; ${Y}: 100%; }
    &[anchor-at='right-end']::before { ${R}: 47.5%; ${Y}: 100%; }

    &[anchor-at='bottom-end']::before { ${R}: 47.5%; ${Y}: calc(0% + var(${Wr})); }
    &[anchor-at='bottom-start']::before { ${R}: 5%; ${Y}: calc(100% - var(${Wr})); }

    &[anchor-at*='left-'] { ${Lr}: 0 0 0 var(${jr}); }
    &[anchor-at='left-end']::before { ${R}: 95%; ${Y}: 0%; }
    &[anchor-at='left-center']::before { ${R}: 75%; ${Y}: 0%; }
    &[anchor-at='left-start']::before { ${R}: 53.5%; ${Y}: 0%; }
  `,FLIP_BLOCK_INLINE:i`
    &[anchor-at*='top-'] { ${Lr}: 0 0 var(${jr}) 0; }
    &[anchor-at='top-start']::before { ${R}: 5%; ${K}: 0%; ${Y}: calc(100% - var(${Wr})); }
    &[anchor-at='top-end']::before { ${R}: 47.5%; ${K}: 0%; ${Y}: calc(0% + var(${Wr})); }

    &[anchor-at*='right-'] { ${Lr}: 0 var(${jr}) 0 0; }
    &[anchor-at='right-start']::before { ${R}: 47.5%; ${K}: calc(100% - var(${Gr})); ${Y}: 100%; }
    &[anchor-at='right-end']::before { ${R}: 5%; ${K}: calc(0% + var(${Gr})); ${Y}: 100%; }

    &[anchor-at*='bottom-'] { ${Lr}: var(${jr}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${R}: 95%; ${K}: 100%; ${Y}: calc(0% + var(${Wr})); }
    &[anchor-at='bottom-start']::before { ${R}: 53.5%; ${K}: 100%; ${Y}: calc(100% - var(${Wr})); }

    &[anchor-at*='left-'] { ${Lr}: 0 0 0 var(${jr}); }
    &[anchor-at='left-end']::before { ${R}: 53.5%; ${K}: calc(0% + var(${Gr})); ${Y}: 0%; }
    &[anchor-at='left-start']::before { ${R}: 95%; ${K}: calc(100% - var(${Gr})); ${Y}: 0%; }
  `},zd=i`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Lr});

    container-type: anchored;
    position-anchor: var(${A}-anchor-name, var(--js•anchor));

    ${ro.TOP}
    ${ro.RIGHT}
    ${ro.BOTTOM}
    ${ro.LEFT}
    ${ro.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ae.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ae.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Ae.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${Ae.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${Ae.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${Ae.FLIP_BLOCK_INLINE}
        }
      }
    }
`,ce={BACKDROP:i`
    &::backdrop {
      background: var(${A}-backdrop, transparent);
    }
  `,DISMISS:i`
    [arc-popover-dismiss] {
      align-self: var(${A}-dismiss-align-self, auto);
      display: var(${A}-dismiss-display, inline-flex);
      align-items: var(${A}-dismiss-align-items, center);
      justify-content: var(${A}-dismiss-justify-content, center);
      margin: var(${A}-dismiss-margin, var(${m}•6m) var(${m}•0));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    &:where(:not([arc-popover-header])) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      ${A}-dismiss-margin: 0;
      inset: var(${A}-dismiss-inset, 0.5em 0.5em auto auto);
    }
  `,HEADER:i`
    [arc-popover-header] {
      flex: var(${A}-header-flex, none);
      display: var(${A}-header-display, flex);
      justify-content: var(${A}-header-justify-content, space-between);
      align-items: var(${A}-header-align-items, baseline);
      gap: var(${A}-header-gap, var(${rt}•gap));

      padding: var(${A}-header-padding,
        var(${we}•block)
        var(${we}•inline)
      );

      color: var(${A}-header-color, inherit);
      background: var(${A}-header-background, none);

      &:has([arc-popover-dismiss]) {
        padding-inline-end: var(${m}•12);
      }
    }
  `,CONTENT:i`
    [arc-popover-content] {
      flex: var(${A}-flex, 1);
      position: relative;
      display: var(${A}-content-display, flex);
      flex-direction: var(${A}-content-flex-direction, column);
      gap: var(${A}-content-gap, 0);

      overflow: var(${A}-overflow, auto);
      overscroll-behavior: var(${A}-overscroll-behavior, contain);

      color: var(${A}-color, var(${ui}));
      padding: var(${A}-padding, var(${et}));
      margin: var(${A}-margin, unset);
      background: var(${A}-content-background, var(${tt}));
      border-radius: calc(var(${$c}) - var(${Qo}));
      border: var(${A}-border, none);

      height: var(${A}-height, auto);
      min-height: var(${A}-min-height, auto);
      max-height: var(${A}-max-height, 65vh);
      resize: var(${A}-resize, none);
      font-size: var(${A}-font-size, var(${s}•12));
    }
  `,BODY:i`
    [arc-popover-body] {
      flex: var(${A}-body-flex, 1);
      display: var(${A}-body-display, block);
      flex-direction: var(${A}-body-flex-direction, unset);

      padding: var(${A}-body-padding,
        var(${qr}•block•start, var(${qr}•block))
        var(${qr}•inline)
        var(${qr}•block•end, var(${qr}•block))
        var(${qr}•inline)
      );
    }
  `,FOOTER:i`
    [arc-popover-footer] {
      flex: var(${A}-footer-flex, none);
      display: var(${A}-footer-display, flex);
      flex-direction: var(${A}-footer-flex-direction, row-reverse);
      justify-content: var(${A}-footer-justify-content, space-between);
      align-items: var(${A}-footer-align-items, center);
      gap: var(${A}-footer-gap, var(${at}•gap));

      padding: var(${A}-footer-padding,
        var(${fa}•block•start)
        var(${fa}•inline)
        var(${fa}•block•end)
        var(${fa}•inline)
      );

      background: var(${A}-footer-background, none);
      color: var(${A}-footer-color, inherit);

      &:where([has-divider]) {
        border-top: var(${A}-footer-border-top, var(${m}•1) solid var(${vi}•color));
      }
    }
  `,TAIL:i`
    &[has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${va}•display, block);

      inset: auto;
      top: var(${K}, auto);
      left: var(${Y}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Qe});
      height: var(${Qe});
      border-radius: var(${s}•2);

      background: color-mix(in srgb,
        var(${ct}) var(${R}),
        var(${nt}) clamp(0%, 100% - var(${R}), 100%)
      );

      border: var(${Qo}) solid color-mix(in srgb,
        var(${it}) var(${R}),
        var(${lt}) clamp(0%, 100% - var(${R}), 100%)
      );
    }
  `},Cd=i`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    font-size: var(${s}•16); /* This font-size is intended NOT to be altered; it is locked
                                in as a reset for various popover calculations. The effective
                                popover font size is set on '[arc-popover-content]'. */

    background: var(${A}-background, var(${ot}));
    border: var(${Qo}) solid transparent;
    border-radius: var(${$c});
    box-shadow: var(${A}-shadow, var(${zr}•shadow));
    width: var(${A}-width, auto);
    height: var(${A}-height, auto);
    min-width: var(${A}-min-width, auto);
    min-height: var(${A}-min-height, auto);
    max-width: var(${A}-max-width, 100vw);
    max-height: var(${A}-max-height, 65vh);

    ${ce.BACKDROP}
    ${ce.DISMISS}
    ${ce.HEADER}
    ${ce.CONTENT}
    ${ce.BODY}
    ${ce.FOOTER}
    ${ce.TAIL}
  }
`,ao={SETUP:kd,ANCHORS:zd,VARIANTS:wd,DENSITIES:Ad,ELEMENT:Cd},Sd=i`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${nd}

  [arc-popover] {
    ${ao.SETUP}
    ${ao.VARIANTS}
    ${ao.DENSITIES}
  }

  ${ao.ANCHORS}
  ${ao.ELEMENT}

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-property: display allow-discrete, opacity;

    @supports (overlay: auto) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,gi=(0,y.forwardRef)(({children:a,popover:r=Or.popover,anchorAt:e=Or.anchorAt,anchorName:o,anchorProps:t,alternateAnchorId:l,alternateAnchor:n,boundary:h=Or.boundary,tryFallbacks:d=Or.tryFallbacks,density:v=Or.density,variant:u=Or.variant,scheme:p=Or.scheme,isInverse:g,hasTail:f,tailSize:k=Or.tailSize,offset:z=Or.offset,hidePopoverButton:I,headerSlot:M,showDismiss:_,dismissProps:E,footerSlot:C,showFooterDivider:S,tag:F="div",contentTag:P="div",onToggle:G,...Z},or)=>{const sr=(0,y.useRef)(null),Q=(0,y.useRef)(null),dr=(0,y.useRef)(null),xr=(0,y.useRef)(G);(0,y.useImperativeHandle)(or,()=>Q.current);const[vr,ea]=(0,y.useState)(!1),nr=(0,y.useMemo)(()=>p==="auto"?void 0:g?"inverse":p,[g,p]),Fr=(0,y.useCallback)(()=>{if(typeof document>"u")return sr.current??null;const ir=la(sr.current)??document;return l?ir.getElementById(l):typeof n=="string"?ir.getElementById(n):n instanceof HTMLElement?n:typeof n=="function"?n():n&&typeof n=="object"&&"current"in n?n.current:sr.current??null},[n,l]),Hr=d||h==="flip",oa=!!f&&!Fn.includes(e),La=Hn({canHaveTail:oa,tailSize:k}),Ra=(0,y.useMemo)(()=>{const ir=o||l||(typeof n=="string"?n:void 0)||t?.id||Z.id||void 0;return sc(String(ir))},[o,t?.id,Z.id,n,l]),ta=(0,y.useMemo)(()=>({popoverTarget:Z.id,"aria-haspopup":!0,"aria-controls":Z.id,"aria-expanded":vr}),[Z.id,vr]),ca=(0,y.useMemo)(()=>({isOpen:vr,"aria-label":"Dismiss",...ta,...E}),[E,vr,ta]),V=(0,y.useMemo)(()=>({ref:sr,...ta,...t,tooltip:vr?void 0:t?.tooltip,anchorName:Ra||void 0}),[t,ta,Ra,vr]),kr=(0,y.useMemo)(()=>({"--js\u2022anchor":V?.anchorName||"","--js\u2022offset":Number(z)===0?"":`${z}px`,"--js\u2022tail":La.cssTailVar}),[V?.anchorName,z,La.cssTailVar]);return Po(()=>{const ir=Fr();if(dr.current=ir,!!ir)return Un(ir,V.anchorName)},[Fr,V.anchorName,vr]),(0,y.useEffect)(()=>{xr.current=G},[G]),(0,y.useEffect)(()=>{const ir=Q.current;if(!ir)return;const Mr=ka=>{const{newState:wa}=ka,xo=wa==="open";ea(xo),xo&&(dr.current=Fr()),xr.current?.(ka)};return ir.addEventListener("toggle",Mr),()=>ir.removeEventListener("toggle",Mr)},[Fr]),ys({anchorEl:dr.current,popoverEl:Q.current,anchorAt:e,tryFallbacks:Hr,offsetPx:Number(z)||0,tailSizePx:La.floatingTailPx,hasTail:oa,isOpen:vr}),zs({anchorEl:dr.current,popoverEl:Q.current,anchorAt:e,tryFallbacks:Hr,hasTail:oa,isOpen:vr}),(0,c.jsxs)(c.Fragment,{children:[!((l||n)&&I)&&(0,c.jsx)(Xe,{...V}),(0,c.jsxs)(F,{...Z,ref:Q,"arc-popover":"","arc-scheme":nr,"anchor-at":e,"try-fallbacks":Hr?"":void 0,popover:r,variant:u,density:v,"has-tail":oa?"":void 0,role:Z.role??"dialog",style:{...Z.style,...kr},children:[(0,c.jsxs)(P,{"arc-popover-content":"",children:[!!M&&(0,c.jsx)(md,{showDismiss:_,dismissProps:ca,children:M}),M||C?(0,c.jsx)(bd,{children:a}):a,!!C&&(0,c.jsx)($d,{showDivider:S,children:C})]}),_&&!M&&(0,c.jsx)(hi,{...ca})]})]})});gi.displayName="ArcPopover";const yc=gi;yc.handlePopover=Vn,yc.Button=Xe;const eo=yc;H("ArcPopover",Sd);const _d=i`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${s}•4) var(${s}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${s}•6);
      padding: var(${s}•4) var(${s}•8);
    }

    ${Gt}
    ${Tn}
  }

}
`,Ed=a=>(0,c.jsx)("ul",{...a,"data-element":"list"}),Td=a=>(0,c.jsx)("li",{...a,"data-element":"list-item"}),Id=({count:a,anchorId:r,overflowId:e,shouldShowOverflow:o,...t})=>(0,c.jsx)(ac,{title:`+${a}`,children:(0,c.jsx)(eo.Button,{...t,id:r,popoverTarget:e,text:`+${a}`,variant:"common",hierarchy:"primary",disabled:!o,"data-element":"counter","data-color":"black","data-num-length":a?.toString().length})}),jd=({children:a,id:r,size:e="sm",overflowCount:o=0,shouldShowOverflow:t=!1,anchorAt:l="bottom-end",tryFallbacks:n=!0,...h})=>{const d=Math.min(o,999),v=Kr(r,"arc-avatar-overflow"),u=(0,y.useMemo)(()=>`${v}-anchor`,[v]),p=(0,y.useMemo)(()=>y.Children.toArray(a),[a]);return(0,c.jsxs)(c.Fragment,{children:[d>0&&(0,c.jsx)(Id,{count:d,anchorId:u,overflowId:v,shouldShowOverflow:t}),t&&d>0&&(0,c.jsx)(eo,{...h,scheme:"inverse","arc-avatar-overflow":"",id:v,anchorAt:l,tryFallbacks:n,alternateAnchorId:u,hidePopoverButton:!0,variant:"common","data-size":e,children:(0,c.jsx)(Ed,{children:p.map((g,f)=>(0,c.jsx)(Td,{children:g},f))})})]})};H("ArcAvatarOverflow",_d);const pi=({fg:a,bg:r})=>i`
  &:has(>[data-color=mono-inverse]) {
    ${a}•high: var(--arc-color-fg-on-mono-inverse);
    ${r}•high: var(--arc-color-bg-mono-inverse);
    ${a}•low: var(--arc-color-fg-on-subtle);
    ${r}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-brand-stark);
    ${a}•low: var(--arc-color-fg-brand-stark);
    ${r}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${a}•high: var(--arc-color-fg-on-mono);
    ${r}•high: var(--arc-color-bg-mono);
    ${a}•low: var(--arc-color-fg-on-mono);
    ${r}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-blue-stark);
    ${a}•low: var(--arc-color-fg-blue-stark);
    ${r}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${a}•high: var(--arc-color-fg-on-heavy);
    ${r}•high: var(--arc-color-bg-neutral-heavy);
    ${a}•low: var(--arc-color-fg-neutral-stark);
    ${r}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-purple-stark);
    ${a}•low: var(--arc-color-fg-purple-stark);
    ${r}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-green-stark);
    ${a}•low: var(--arc-color-fg-green-stark);
    ${r}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-yellow-stark);
    ${a}•low: var(--arc-color-fg-yellow-stark);
    ${r}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-red-stark);
    ${a}•low: var(--arc-color-fg-red-stark);
    ${r}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-maroon-stark);
    ${a}•low: var(--arc-color-fg-maroon-stark);
    ${r}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-mint-stark);
    ${a}•low: var(--arc-color-fg-mint-stark);
    ${r}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${a}•high: var(--arc-color-fg-on-stark);
    ${r}•high: var(--arc-color-bg-orange-stark);
    ${a}•low: var(--arc-color-fg-orange-stark);
    ${r}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${a}•high: var(--arc-color-fg-on-heavy);
    ${r}•high: var(--arc-gradient-ai-300);
    ${a}•low: var(--arc-color-fg-on-subtle);
    ${r}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${a}•high: var(--arc-color-mono-black);
    ${r}•high: var(--arc-color-alpha-white-80);
    ${a}•low: var(--arc-color-alpha-heavy);
    ${r}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${a}•high: var(--arc-color-mono-white);
    ${r}•high: var(--arc-color-alpha-black-70);
    ${a}•low: var(--arc-color-mono-white);
    ${r}•low: var(--arc-color-alpha-black-40);
  }
`,fi=({fg:a,bg:r})=>i`
  &:has(>[data-contrast=high]) {
    ${a}: var(${a}•high);
    ${r}: var(${r}•high);
  }

  &:has(>[data-contrast=low]) {
    ${a}: var(${a}•low);
    ${r}: var(${r}•low);
  }
`,T=i`--arc•badge`,xc=i`${T}•fg`,kc=i`${T}•bg`,Ld=pi({fg:xc,bg:kc}),Rd=fi({fg:xc,bg:kc}),Md=i`
  &:has(>[data-size=lg]) {
    ${T}•font•size: var(${s}•14);
    ${T}•font•size•caps: var(${s}•12);
    ${T}•size: var(${s}•24);
    ${T}•min•size: var(${s}•30);
    ${T}•padding•inline: var(${s}•8);
    ${T}•border•radius: var(${s}•4);
    ${T}•gap: var(${s}•4);
  }

  &:has(>[data-size=md]) {
    ${T}•font•size: var(${s}•12);
    ${T}•font•size•caps: var(${s}•10);
    ${T}•size: var(${s}•20);
    ${T}•min•size: var(${s}•24);
    ${T}•padding•inline: var(${s}•6);
    ${T}•border•radius: var(${s}•4);
    ${T}•gap: var(${s}•4);
  }

  &:has(>[data-size=sm]) {
    ${T}•font•size: var(${s}•10);
    ${T}•font•size•caps: var(${s}•8);
    ${T}•size: var(${s}•16);
    ${T}•min•size: var(${s}•18);
    ${T}•padding•inline: var(${s}•4);
    ${T}•border•radius: var(${s}•4);
    ${T}•gap: var(${s}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${T}•font•size: 1em;
    ${T}•font•size•text: 0.75em;
    ${T}•font•size•caps: 0.625em;
    ${T}•size: 1.25em;
    ${T}•min•size: 1.5em;
    ${T}•padding•inline: 0.375em;
    ${T}•border•radius: 0.25em;
    ${T}•gap: 0.25em;
  }
`,Bd=i`
  &:has(>[data-layout=fill]) {
    ${T}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${T}•display: flex;
    ${T}•min•width: var(${T}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${T}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${T}•display: inline-flex;
    ${T}•min•width: min-content;
  }
`,Pd=i`
@layer arc-components {

  [arc-badge-wrapper] {
    ${Ld}
    ${Rd}
    ${Md}
    ${Bd}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${T}•gap);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${T}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${T}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${T}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${T}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${T}•flex);
    display: var(${T}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${T}•size);
    padding-inline: var(${T}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 2;

    color: var(--arc-badge-color, var(${xc}));
    background: var(--arc-badge-background, var(${kc}));
    border-radius: var(${T}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${T}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${T}•font•size•caps);
    }
  }

}
`,mi=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],Od=["brand",...mi.filter(a=>a!=="brand")],Dd=["neutral",...mi.filter(a=>a!=="neutral")],Nd=Er(Za,Od),Fd=Er(Za,Dd),Hd=Er(_r,["inherit","lg","md","sm"]),Vd=Er(na,["hug","fill"]),Ud=["high","low"],Wd=Er(lr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),Gd={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},Zd=({children:a,icon:r,text:e,isFlipped:o,isFlexible:t,isUppercase:l,color:n,variant:h,size:d="inherit",layout:v="hug",contrast:u="high",...p})=>{const g=n??Gd[h??"brand-blue"],f=a||(0,c.jsx)(Yr,{icon:r,text:e,isFlipped:o,layout:"gutter"}),k=v==="fill"&&t;return(0,c.jsx)("span",{...p,"arc-badge-wrapper":"",children:(0,c.jsx)("span",{"arc-badge":"","data-contrast":u,"data-color":g,"data-layout":v,"data-size":d,"data-is-flexible":k?"":void 0,"data-is-uppercase":l?"":void 0,children:f})})};H("ArcBadge",Pd);const ar=i`--arc•badge•count`,wc=i`${ar}•fg`,Ac=i`${ar}•bg`,Kd=pi({fg:wc,bg:Ac}),Yd=fi({fg:wc,bg:Ac}),qd=i`
  &:has(>[data-size=lg]) {
    ${ar}•font•size: var(${s}•14);
    ${ar}•size: var(${s}•24);
    ${ar}•padding•inline: var(${s}•4);
  }

  &:has(>[data-size=md]) {
    ${ar}•font•size: var(${s}•12);
    ${ar}•size: var(${s}•20);
    ${ar}•padding•inline: var(${s}•4);
  }

  &:has(>[data-size=sm]) {
    ${ar}•font•size: var(${s}•10);
    ${ar}•size: var(${s}•16);
    ${ar}•padding•inline: var(${s}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${ar}•font•size: 1em;
    ${ar}•font•size•text: 0.75em;
    ${ar}•size: 1.25em;
    ${ar}•padding•inline: 0.25em;
  }
`,Jd=i`
  &:has(>[data-shape=square]) {
    ${ar}•border•radius: var(${s}•4);
  }

  &:has(>[data-shape=circle]) {
    ${ar}•border•radius: var(--arc-border-radius-pill);
  }
`,Xd=i`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${Kd}
  ${Yd}
  ${qd}
  ${Jd}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${ar}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${ar}•size);
  min-width: var(${ar}•size);
  padding-inline: var(${ar}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${wc}));
  background: var(--arc-badge-count-background, var(${Ac}));
  border-radius: var(${ar}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${ar}•font•size•text, 1em);
  }
}

`,Qd=Er(_r,["inherit","lg","md","sm"]),rh=Er(lr,["neutral","brand","critical","warning","success","inverse"]),ah=["low","high"],eh=Er(Le,["square","circle"]),oh={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},th=({children:a,text:r,color:e,variant:o,contrast:t,size:l="inherit",shape:n="square",...h})=>{const d=a||(0,c.jsx)("span",{"data-element":"text",children:r}),v=e??oh[o??"neutral"],u=o==="critical"?"high":t??"low";return(0,c.jsx)("span",{...h,"arc-badge-count-wrapper":"",children:(0,c.jsx)("span",{"arc-badge-count":"","data-color":v,"data-contrast":u,"data-shape":n,"data-size":l,children:d})})};H("ArcBadgeCount",Xd);const Ea=i`--arc•label`,oo=i`${Ea}•cursor`,to=i`${Ea}•opacity`,ch=i`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${to}: var(--arc-label-opacity, unset);
    ${to}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${Ea}•display: var(--arc-label-display, inline-flex);
    ${Ea}•gap: var(--arc-label-gap, var(${s}•8));
    ${Ea}•align•items: var(--arc-label-align-items, baseline);

    ${oo}: var(--arc-label-cursor, pointer);
    ${oo}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${oo}: var(${oo}•disabled);
      ${to}: var(${to}•disabled);
    }

    &[data-layout=fill] {
      ${Ea}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${Ea}•display);
    align-items: var(${Ea}•align•items);
    gap: var(${Ea}•gap);
    cursor: var(${oo});
  }

}
`,nh=L(na,["hug","fill"]),ne=({layout:a,...r})=>(0,c.jsx)("label",{...r,"arc-label":"","data-layout":a});H("ArcLabel",ch);const ih=i`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${to}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,ie=a=>(0,c.jsx)("span",{...a,"arc-label-content":""});H("LabelContent",ih);const lh={checkbox:"checkbox",radio:"radio",switch:"radio"},co=({id:a,indeterminate:r,type:e,onChange:o,...t})=>{const l=e==="checkbox"&&!!r,n=(0,y.useRef)(null),h=Kr(a,`arc-${e}`),d=v=>u=>{if(!(u?.target instanceof HTMLInputElement))return;const p={checked:u?.target.checked,indeterminate:u?.target?.indeterminate,name:u?.target?.name,value:t?.value};v?.(p,u)};return(0,y.useEffect)(()=>{n.current?.type==="checkbox"&&(n.current.indeterminate=!!r)},[r]),(0,c.jsx)("input",{...t,id:h,ref:n,type:lh[e],"arc-input-type":e,"aria-disabled":t?.disabled||void 0,"data-is-disabled":t?.disabled||void 0,"data-is-checked":t?.checked||void 0,"data-is-indeterminate":l||void 0,onChange:d(o)})},sh=i`
@layer arc-components {

  [arc-input-mask] {
    ${x}•border•width: var(--arc-border-width-sm);
    ${x}•border: var(${x}•border•width) solid var(${x}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${x}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${x}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${x}•outline: var(${x}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${x}•width);
    height: var(${x}•height);
    opacity: var(${x}•opacity, var(--arc-alpha-100));

    color: var(${x}•color, transparent);
    background: var(${x}•background);
    border: var(${x}•border);
    border-radius: var(${x}•border•radius);
    translate: var(${x}•translate, unset);

    outline: var(${x}•outline, none);
    outline-offset: var(${x}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${x}•border•width) * -1);
      cursor: var(${x}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${x}•z•index, unset);
    }
  }

}
`,st=({type:a,...r})=>(0,c.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,c.jsx)("span",{...r,"arc-input-mask":a})});H("ArcBooleanInputMask",sh);const fr=i`--arc•checkbox`,dh=i`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${fr}•font•size: 1em;
      ${fr}•icon•size: 0.625em;
      ${fr}•size: 1.125em;
      ${fr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${fr}•font•size: var(${s}•14);
      ${fr}•icon•size: var(${s}•10);
      ${fr}•size: var(${s}•18);
      ${fr}•gap: var(${s}•8);
    }

    &[data-size=sm] {
      ${fr}•font•size: var(${s}•12);
      ${fr}•icon•size: var(${s}•10);
      ${fr}•size: var(${s}•16);
      ${fr}•gap: var(${s}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${x}•border•radius: var(${s}•4);
    ${x}•size: var(${fr}•size);
    ${x}•icon•size: var(${fr}•icon•size);
    ${x}•width: var(${fr}•size);
    ${x}•height: var(${fr}•size);
    ${x}•translate: 0 var(${s}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${fr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${fr}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${x}•color: transparent;
      ${x}•border•color: var(--arc-color-border-stark);
      ${x}•background: transparent;

      &:hover {
        ${x}•border•color: var(--arc-color-border-theme-heavy);
        ${x}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${x}•border•color: var(--arc-color-border-disabled);
        ${x}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${x}•color: var(--arc-color-fg-on-theme-heavy);
        ${x}•border•color: transparent;
        ${x}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${x}•color: var(--arc-color-fg-on-theme-stark);
          ${x}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${x}•color: var(--arc-color-fg-on-theme-mid);
          ${x}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${x}•color: var(--arc-color-fg-theme-heavy);
        ${x}•border•color: var(--arc-color-border-theme-heavy);
        ${x}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${x}•color: var(--arc-color-fg-theme-stark);
          ${x}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${x}•color: var(--arc-color-fg-theme-subtle);
          ${x}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,hh=L(na,["hug","fill"]),vh=L(_r,["inherit","md","sm"]),uh=L(lr,["primary","secondary"]),bi=({children:a,label:r,layout:e,size:o="md",variant:t="primary",useMask:l=!0,...n})=>{const{className:h,title:d,...v}=n,u={className:h,title:d},p=a??r,g=(0,c.jsx)(co,{...v,type:"checkbox"}),f=l&&(0,c.jsxs)(st,{type:"checkbox",children:[g,(0,c.jsx)(D,{icon:v?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),k=!!p&&(0,c.jsxs)(ne,{layout:e,children:[f||g,(0,c.jsx)(ie,{children:p})]});return(0,c.jsx)("span",{...u,"arc-checkbox":"","data-size":o,"data-variant":t,children:k||f||g})};H("ArcCheckbox",dh);const Jr=i`--arc•cb`,er=i`${Jr}•o`,Xr=i`${er}•border`,zc=i`${er}•icon`,Cc=i`${er}•text`,gh=i`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Jr}•font•size: var(${s}•14);
    ${Jr}•border•radius: var(${s}•6);
    ${Jr}•background: var(--arc-color-alpha-black-0);
    ${Jr}•padding: 0px;
    ${Jr}•gap: var(${s}•2);

    ${er}•color: var(--arc-color-fg-secondary);
    ${er}•background: var(--arc-color-alpha-white-0);

    ${Xr}•color: var(--arc-color-alpha-black-0);
    ${Xr}•width: var(${s}•1);
    ${Xr}•radius: var(${s}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${er}•size: var(${s}•40);
      ${er}•line•height: var(${s}•38); /* • -2px to account for border-width (top/bottom) */
      ${zc}•padding: var(${s}•8);
      ${Cc}•padding: var(${s}•12);
    }

    &[data-size=md] {
      ${er}•size: var(${s}•32);
      ${er}•line•height: var(${s}•30); /* • -2px to account for border-width (top/bottom) */
      ${zc}•padding: var(${s}•6);
      ${Cc}•padding: var(${s}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Jr}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Jr}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${er}•color: var(--arc-color-fg-on-hover-default);
        ${er}•background: var(--arc-color-bg-hover-default);
        ${Xr}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${er}•color: var(--arc-color-fg-primary);
      ${er}•background: var(--arc-color-bg-secondary);
      ${Xr}•color: var(--arc-color-alpha-black-0);
      ${er}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${er}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${er}•outline: var(${Xr}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Jr}•font•size));
    display: var(${Jr}•display);
    gap: var(${Jr}•gap);
    background: var(${Jr}•background);
    border-radius: var(${Xr}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Xr}•radius);
      outline: var(${er}•outline, none);
      outline-offset: var(${Xr}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${er}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${er}•size);
      min-width: var(${er}•size);

      border-radius: var(${Xr}•radius);
      border: var(${Xr}•width) solid var(${Xr}•color);
      background: var(${er}•background);
      color: var(${er}•color);
      font-weight: var(${er}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Cc}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${zc}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,ph=L(na,["hug","fill"]),fh=L(_r,["lg","md"]),mh=({children:a,label:r,icon:e,...o})=>{const t=a||(0,c.jsx)(Yr,{icon:e,text:r});return(0,c.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,c.jsx)(bi,{...o,label:t,layout:"fill",useMask:!1})})},bh=({children:a,size:r="lg",layout:e="hug",...o})=>(0,c.jsx)("ul",{...o,"arc-checkbox-bar":"","data-size":r,"data-layout":e,role:"group",children:a});H("ArcCheckboxBar",gh);const $h=i`--arc•menu`,Ha=i`${$h}•item`,yh=i`
@layer arc-components {

  [arc-menu] {
    ${Ha}•gap: var(${s}•8);
    ${Ha}•fg: inherit;
    ${Ha}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${s}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${s}•2));
    padding: var(--arc-menu-padding, var(${s}•2));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${Ha}•gap));

    background: var(--arc-menu-item-background, var(${Ha}•bg));
    color: var(--arc-menu-item-color, var(${Ha}•fg));
    padding: var(--arc-menu-item-padding, var(${s}•0));
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])):hover {
      ${Ha}•bg: var(--arc-color-bg-hover-default);
    }

    /* Communicates to ArcButton */
    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-outline-offset: var(${s}•2m);
      --arc-button-gap: var(--arc-menu-item-gap, var(${Ha}•gap));
      --arc-button-transition: none;
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);

      :is([arc-button-label], [arc-button-content]) {
        display: contents;
      }
    }
  }

`,xh=a=>[{test:()=>!!a.variant,value:a.variant},{test:()=>!!a.icon&&typeof a.subtext<"u",value:"icon-text-detail"},{test:()=>!!a.icon,value:"icon-text"},{test:()=>!!a.avatar&&typeof a.subtext<"u",value:"user-detail"},{test:()=>!!a.avatar,value:"user"},{test:()=>typeof a.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],kh={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},le={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},wh=({icon:a,...r})=>{const e=a&&typeof a=="string"?`${a.replace(" fa-fw","")} arc-fw`:a;return{divider:(0,c.jsx)("hr",{}),"section-label":(0,c.jsx)(Yr,{...r,...le,icon:e,size:"sm",isStrong:!0}),"icon-text":(0,c.jsx)(Yr,{...r,...le,icon:e}),"icon-text-detail":(0,c.jsx)(Yr,{...r,...le,icon:e,isStrong:!0}),text:(0,c.jsx)(Yr,{...r,...le}),"text-detail":(0,c.jsx)(Yr,{...r,...le,subtext:r.subtext??"sub",isStrong:!0}),user:(0,c.jsx)(ec,{...r,...le,size:"sm"}),"user-detail":(0,c.jsx)(ec,{...r,...le,size:"md",isStrong:!0})}},Ah=a=>a?.role??kh[no(a)]??"menuitem",no=a=>xh(a)?.find(({test:r})=>r())?.value??"text",$i=a=>r=>wh(r)[a],zh=(a,r,e,o)=>{let t=1,l=a;const n=d=>d>=e?0:d+1,h=d=>d<=0?e:d-1;for(;t<=e;){const d=n(l),v=h(l),u={previous:r==="previous"?v:l,actual:l,next:r==="next"?d:l}[r];if(o(u))return u;l=u,t+=1}return-1},Ch=({items:a,filterText:r,renderItem:e,isVisible:o,...t})=>{const l=(0,y.useRef)(null),n=(0,y.useRef)([]),[h,d]=(0,y.useState)(-1),[v,u]=(0,y.useState)(!1),[p,g]=(0,y.useState)(Math.max(a.length-1,0));(0,y.useEffect)(()=>{o&&l.current&&(n.current=Array.from(l.current.querySelectorAll("[arc-button=custom]")))},[o,a]);const f=(0,y.useCallback)(C=>n.current[C]||null,[]),k=(0,y.useCallback)((C,S)=>{const F=zh(C,S,p,f);d(F),f(F)?.focus()},[p,f]),z=(0,y.useCallback)((C,S)=>()=>{!v&&S&&k(C,"actual")},[v,k]),I={ArrowUp:C=>k(C,"previous"),ArrowDown:C=>k(C,"next"),Home:()=>k(0,"actual"),End:()=>k(p,"actual")},M=C=>S=>{Object.keys(I).includes(S.key)&&(u(!0),S.stopPropagation(),S.preventDefault(),I[S.key](C))},_=(0,y.useMemo)(()=>{const C=r?a.filter(S=>Object.values(S).some(F=>F===r)):a;return g(Math.max(C.length-1,0)),C},[a,r]),E=(0,y.useMemo)(()=>_.map(({itemId:C,role:S,...F},P)=>{const G=no(F)||"",Z=S||Ah(F)||"menuitem",or=P===h;return(0,c.jsx)("li",{"arc-menu-item":G,role:Z,onMouseEnter:z(P,!!F.onClick),children:e?.(F,P,{filterText:r,isCurrent:or})},C)}),[h,r,_,e,z]);return(0,y.useEffect)(()=>{o&&k(-1,"next")},[o,k]),(0,c.jsx)("ul",{...t,ref:l,"arc-menu":"",role:"menu",onKeyDown:M(h),onMouseLeave:()=>d(-1),onMouseMove:()=>u(!1),tabIndex:o?0:-1,children:E})};H("ArcMenu",yh);const yi=a=>{const{startSlot:r,endSlot:e,onClick:o,href:t,target:l,containerProps:n,isDisabled:h,"aria-disabled":d,tooltip:v,...u}=a,p=no(u),g=$i(p),f=d??h,k=p==="divider",z=t||o,I=!k,M=I&&r?"":void 0,_=I&&e?"":void 0,E=C=>{f||(C.currentTarget.closest("[arc-popover]")?.hidePopover(),o?.(C.nativeEvent))};return z?(0,c.jsxs)(Ir,{...n,tooltip:v,href:t,target:l,"aria-disabled":f?"true":void 0,_isCustom:!0,"arc-dropdown-item":p??"","has-start-slot":M,"has-end-slot":_,onClick:E,children:[I&&r,(0,c.jsx)(g,{...u,"is-item-content":"interactive"}),I&&e]}):(0,c.jsxs)("div",{...n,"arc-dropdown-item":p??"","has-start-slot":M,"has-end-slot":_,children:[I&&r,(0,c.jsx)(g,{...u,"is-item-content":"inert"}),I&&e]})},Sh=i`--arc•dropdown`,_h=i`${Sh}•menu`,Cr=i`${_h}•item`,Eh=i`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Cr}•padding: var(${m}•8) var(${m}•12);
    ${Cr}•min•height: var(${s}•36);
    ${Cr}•gap: var(${m}•8);

    &[arc-dropdown-item=text-detail] {
      ${Cr}•min•height: var(${s}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Cr}•min•height: var(${s}•32);
    }

    &[arc-dropdown-item=user] {
      ${Cr}•min•height: var(${s}•40);

      &:not([has-start-slot]) {
        ${Cr}•padding: var(${m}•8) var(${m}•12) var(${m}•8) var(${m}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Cr}•min•height: var(${s}•48);

      &:not([has-start-slot]) {
        ${Cr}•padding: var(${m}•8) var(${m}•12) var(${m}•8) var(${m}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Cr}•min•height: var(${s}•8);
      ${Cr}•padding: 0;

      hr {
        flex: 1;
        border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
        height: 0;
        margin: 0;
      }
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0);

    --arc-menu-item-gap: var(${Cr}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Cr}•gap);
    text-align: start;
    min-height: var(${Cr}•min•height);

    &:not([arc-button]) {
      padding: var(${Cr}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Cr}•padding);
      --arc-button-min-height: var(${s}•40);
    }

    [is-item-content] {
      flex: 1;
    }
  }

}
`,xi=(0,y.forwardRef)((a,r)=>(0,c.jsx)(Xe,{...a,ref:r,"arc-dropdown-menu-button":""})),Sc=a=>{const{items:r,renderItem:e,...o}=a,[t,l]=(0,y.useState)(!1),n=(0,y.useCallback)((...d)=>e?.(...d)||(0,c.jsx)(yi,{...d[0]}),[e]),h=d=>{l(d.newState==="open"),a?.onToggle?.(d)};return(0,c.jsx)(eo,{...o,"arc-dropdown":"",variant:"common",onToggle:h,children:(0,c.jsx)(Ch,{"arc-dropdown-menu":"",items:r??[],renderItem:n,isVisible:t})})};xi.displayName="ArcDropdownButton",Sc.Button=xi,Sc.Item=yi,H("ArcDropdownMenu",Eh);const Th=a=>(0,c.jsx)(Ir,{...a,layout:"icon",size:"md",variant:"common",hierarchy:"tertiary"}),dt=i`--arc•link`,ma=i`${dt}•fg`,io=i`${ma}•hover`,lo=i`${ma}•disabled`,_c=i`${dt}•outline`,ki=i`${_c}•size`,Ec=i`${_c}•offset`,Ih=i`${dt}•cursor`,so=i`${dt}•focus•color`,jh=i`
@layer arc-components {
${cd}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${ma}: currentcolor;
    ${io}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${lo}: color-mix(in srgb, currentcolor, transparent 70%);

    ${so}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${ma}: var(--arc-color-fg-primary);
    ${io}: var(--arc-color-fg-secondary);
    ${lo}: var(--arc-color-fg-disabled);
    ${so}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${ma}: var(--arc-color-fg-secondary);
    ${io}: var(--arc-color-fg-primary);
    ${lo}: var(--arc-color-fg-disabled);
    ${so}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${ma}: var(--arc-color-fg-on-mono-inverse);
    ${io}: var(--arc-link-fg-hover-inverse);
    ${lo}: var(--arc-link-fg-disabled-inverse);
    ${so}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${ki}: 0.125em; /* 2px */
    ${Ec}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${ma}: var(--arc-link-color-hover, var(${io}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${_c}: var(${ki}) solid var(--arc-link-color-focus, var(${so}));
    ${Ec}: var(${Ec});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${ma}: var(--arc-link-color-disabled, var(${lo}));
    ${Ih}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${ma}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${ma}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Lh=L(lr,["inherit","primary","secondary","inverse"]),Rh=({children:a,layout:r="gutter",size:e="inherit",variant:o="inherit",tag:t="a",href:l,icon:n,text:h,overflow:d,iconSize:v,gapSize:u,isFlipped:p,isDisabled:g,...f})=>(0,c.jsx)(t,{...f,href:g?void 0:l,"arc-link":"","data-variant":o,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:a||(0,c.jsx)(Yr,{icon:n,text:h,overflow:d,iconSize:v,gapSize:u,size:e,layout:r,isFlipped:p})});H("ArcLink",jh);const Mh=[...Da],Bh=L(lr,["common"]),Ph=L(lr,["common","critical"]),Oh=L(lr,["common","brand","info","success","warning","error","processing"]),Dh=["auto","dark","light","none"],Nh=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],Fh=L(_r,["xl","lg","md","sm","custom","fullscreen"]),Hh=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Vh=i`--arc•button•bar`,ho=i`${Vh}•axis`,Uh=i`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${ho}: row;

    &[is-flipped] {
      ${ho}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${ho}: column;

    &[is-flipped] {
      ${ho}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${ho}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(--arc-space-1));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,Tc=({children:a,...r})=>{const{Element:e="menu",orientation:o="horizontal",isFlipped:t=!1,...l}=r;return(0,c.jsx)(e,{...l,"arc-button-bar":o,"is-flipped":t?"":void 0,role:l.role??"group",children:a})};H("ArcButtonBar",Uh);const Ic=a=>a?.matches(":modal"),jc=(a,r)=>r.target===a,Wh=(a,r)=>r.clientX<a.left||r.clientX>a.right||r.clientY<a.top||r.clientY>a.bottom,vo=({modalRef:a,shouldConfirm:r,setIsConfirming:e,onCloseOverride:o=void 0})=>(t,l)=>n=>{if(n?.preventDefault?.(),n?.stopPropagation?.(),!a?.current){l?.(n);return}if(o){o(t,n,a.current),l?.(n);return}if(r&&t!=="confirm:discard"){e?.(!0);return}a.current?.close(t),e?.(!1),l?.(n)},Lc=({modalRef:a,shouldConfirm:r,setIsConfirming:e,onClose:o,onToggle:t})=>{(0,y.useEffect)(()=>{const l=a.current;if(!l)return;const n=d=>{Ic(l)&&jc(l,d)&&(r?(d.preventDefault(),d.stopPropagation(),e?.(!0)):o?.("outside",d))},h=d=>{jc(l,d)&&(e?.(!1),o?.(l.returnValue,d),t?.(!1,d))};return l.addEventListener("close",h),l.addEventListener("cancel",n),()=>{l.removeEventListener("close",h),l.removeEventListener("cancel",n)}},[a,r,e,o,t])},Rc=({modalRef:a,isOpen:r,isTopLayer:e})=>{(0,y.useEffect)(()=>{const o=a.current;o&&(r&&!o.open&&(e?o.showModal():o.show()),!r&&o.open&&o.close())},[r,e])},Mc=({modalRef:a,isOpen:r,autoFocusId:e})=>{(0,y.useEffect)(()=>{const o=a.current;if(!o||!e||!r)return;const t=o.querySelector(`#${e}`);if(!t||!(t instanceof HTMLElement))return;const l=setTimeout(()=>{t.focus()},0);return()=>clearTimeout(l)},[a,e,r])},wi=(a,r)=>(typeof a.composedPath=="function"?a.composedPath():[]).includes(r)||a.target instanceof Node&&r.contains(a.target),Ai=({modalRef:a,isOpen:r=!1,closeOnBackdrop:e=!1,attemptCloseModal:o})=>{(0,y.useEffect)(()=>{const t=a.current;if(!t||!r||!e||!Ic(t))return;let l=!1;const n=d=>{l=wi(d,t)},h=d=>{if(l||wi(d,t))return;const v=t.getBoundingClientRect();Wh(v,d)&&o("outside")(d)};return document.documentElement?.addEventListener("pointerdown",n,{capture:!0}),document.documentElement?.addEventListener("click",h,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",n,{capture:!0}),document.documentElement?.removeEventListener("click",h,{capture:!0})}},[a,o,r,e])},zi=({modalRef:a,isOpen:r=!1,closeOnEsc:e=!1,closedBy:o="closerequest",attemptCloseModal:t})=>{(0,y.useEffect)(()=>{const l=a.current;if(!l||!r||!e||!Ic(l))return;const n=h=>{if(h.key==="Escape"&&jc(l,h)){if(o==="none"){h.stopPropagation(),h.preventDefault();return}t("escape")(h)}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[a,t,r,e,o])},Bc=a=>(0,c.jsx)(Ir,{"aria-label":"Dismiss",text:"Dismiss",...a,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large fa-fw",layout:"icon",shape:"square",size:"md"}),Pc=a=>(0,c.jsx)("div",{...a,"arc-modal-content":""}),Ci=({showDivider:a,...r})=>(0,c.jsx)("header",{...r,"arc-modal-header":"","has-divider":a?"":void 0}),Gh=({glyph:a,variant:r="common"})=>(0,c.jsx)(c.Fragment,{children:a&&(0,c.jsx)(D,{icon:a,"arc-modal-glyph":"","arc-icon-status":r})}),Oc=a=>{const{titleContent:r,TitleElement:e="h2",...o}=a;return(0,c.jsx)(c.Fragment,{children:r&&(0,c.jsx)(e,{...o,"arc-modal-title":"",children:typeof r=="string"?r:(0,c.jsx)(Yr,{...r})})})},Zh=({message:a,...r})=>(0,c.jsx)(c.Fragment,{children:a&&(0,c.jsx)("p",{...r,"arc-modal-message":"",children:a})}),Dc=({tag:a="section",padding:r,...e})=>(0,c.jsx)(a,{...e,"arc-modal-body":"","data-padding":r==="auto"?void 0:r}),Nc=({showDivider:a,...r})=>(0,c.jsx)("footer",{...r,"arc-modal-footer":"","has-divider":a?"":void 0}),Kh=a=>r=>{if(r.key==="Escape"){if(a==="none"){r.stopPropagation(),r.preventDefault();return}return"escape"}},j=i`--arc•modal`,ze=i`${j}•layout`,Yh=i`${j}•header`,ht=i`${j}•body`,uo=i`${j}•footer`,Si=i`${j}•fg`,vt=i`${j}•bg`,ba=i`${j}•backdrop`,Sr=i`${j}•transition`,Ce=i`${Yh}•padding`,X=i`${ht}•padding`,Va=i`${uo}•padding`,qh=i`
  ${j}•font•size: var(${s}•14);
  ${j}•gap: var(${m}•16);

  ${ze}•rows: auto 1fr auto;
  ${ze}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${ze}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${ze}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${ze}•rows: auto;
  }

  ${Si}: var(--arc-color-fg-primary);
  ${vt}: var(--arc-color-bg-primary);
  ${j}•border: none;
  ${j}•border•radius: var(--arc-border-radius-lg);
  ${j}•divider: var(${s}•1) solid var(--arc-color-border-mid);

  ${j}•max•width: calc(100vw - var(${m}•32));
  ${j}•min•width: unset;
  ${j}•width: auto;

  ${j}•max•height: calc(100vh - var(${m}•32));
  ${j}•min•height: unset;
  ${j}•height: max-content;

  ${Sr}•y: 1vh;
  ${Sr}•y•start: 2.5vh;
  ${Sr}•scale: 1;
  ${Sr}•scale•start: 0.975;

  ${ht}•text•align: unset;
  ${uo}•justify•content: flex-end;

  ${ba}•bg: var(--arc-color-overlay-stark);
  ${ba}•pointer•events: none;
  ${ba}•cursor: default;

  &:where([is-backdrop=light]) {
    ${ba}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${ba}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${ba}•bg: transparent;
  }
`,Jh=i`
  &[data-size=sm] {
    ${j}•width: 28em;
  }

  &[data-size=md] {
    ${j}•width: 40em;
  }

  &[data-size=lg] {
    ${j}•width: 50em;
  }

  &[data-size=xl] {
    ${j}•width: 64em;
  }

  &[data-size=custom] {
    ${j}•width: auto;
    ${j}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${j}•width: 100vw;
    ${j}•height: 100vh;
    ${j}•min•width: 100vw;
    ${j}•min•height: 100vh;
    ${j}•max•width: 100vw;
    ${j}•max•height: 100vh;
    ${j}•border•radius: var(--arc-border-radius-none);

    ${Sr}•y: 0;
    ${Sr}•y•start: 0;
    ${Sr}•scale: 1.125;
    ${Sr}•scale•start: 1.125;
  }
`,Xh=i`
  &[is-confirm] {
    ${uo}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${ht}•text•align: center;
    ${uo}•justify•content: center;

    ${X}•block•start: var(${m}•40);
    ${X}•block•end: var(${m}•20);

    ${Va}•block•start: var(${m}•12);
    ${Va}•block•end: var(${m}•40);

    ${j}•glyph•size: var(${s}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${j}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${j}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${m}•12);
    }
  }

  &[is-top-layer] {
    inset: var(--arc-modal-inset, 50% auto auto 50%);
    translate: var(--arc-modal-translate, -50% -50%);

    /*
      * ArcSelect Issue:
      * Avoid "translate"/"transform" on the <dialog> itself — Chrome misplaces
      * native base-select pickers (::picker(select)) when an ancestor is transformed.
      *
      * Center using inset+auto margins instead. Consumers can customize placement via
      * --arc-modal-inset / --arc-modal-margin.
      */
     @supports (appearance: base-select) {
      &:has([arc-select]) {
        --arc-modal-inset: 0;
        --arc-modal-translate: none;
        margin: var(--arc-modal-margin, auto);
      }
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,Qh=i`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${X}•block•start: var(${m}•10);
    }

    &:has([arc-modal-footer]) {
      ${X}•block•end: var(${m}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${Ce}•block•end: var(${m}•20);
      ${X}•block•start: var(${m}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${X}•block•end: var(${m}•20);
      ${Va}•block•start: var(${m}•12);
      ${Va}•block•end: var(${m}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${X}•inline•start: 0;
      ${X}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${X}•block•start: 0;
      ${X}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${X}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${X}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${X}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${X}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${X}•block•start: var(${m}•20);
      ${X}•inline•end: var(${m}•24);
      ${X}•block•end: var(${m}•20);
      ${X}•inline•start: var(${m}•24);
    }

    &:has([arc-modal-go-back]) {
      ${Ce}•inline•start: var(${m}•20);
    }

    ${Ce}:
      var(${m}•20)
      var(${m}•24)
      var(${Ce}•block•end, var(${m}•10))
      var(${Ce}•inline•start, var(${m}•24));

    ${X}:
      var(${X}•block•start, var(${m}•20))
      var(${X}•inline•end, var(${m}•24))
      var(${X}•block•end, var(${m}•20))
      var(${X}•inline•start, var(${m}•24));

    ${Va}:
      var(${Va}•block•start, var(${m}•10))
      var(${m}•24)
      var(${Va}•block•end, var(${m}•20))
      var(${m}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${X}: 0;
    }
  }
`,r0=i`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, transform;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, transform;
    }
  }
`,a0=i`
  [arc-modal] {
    display: none;
    opacity: 0;
    transform:
      translateY(var(${Sr}•y))
      scale(var(${Sr}•scale));

    &:has([arc-select]) {
      transform: none;
    }

    /* ArcSelect Issue */
    @supports (appearance: base-select) {
      &:has([arc-select]) {
        transform: none;
      }
    }

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: grid;
      opacity: 1;
      transform:
        translateY(0)
        scale(1);

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          transform: none;
        }
      }
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      transform:
        translateY(var(${Sr}•y•start))
        scale(var(${Sr}•scale•start));

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          transform: none;
        }
      }
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Fc=i`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${qh}
    ${Jh}
    ${Xh}
    ${Qh}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${Sr}•y: 0;
      ${Sr}•scale: 1;
      ${Sr}•y•start: 0;
      ${Sr}•scale•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, transform;
    contain: layout style paint;

    padding: 0;
    color: var(--arc-modal-color, var(${Si}));
    background: var(--arc-modal-background, var(${vt}));
    border: var(--arc-modal-border, var(${j}•border));
    border-radius: var(--arc-modal-border-radius, var(${j}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${j}•width));
    height: var(--arc-modal-height, var(${j}•height));
    min-width: var(--arc-modal-min-width, var(${j}•min•width));
    min-height: var(--arc-modal-min-height, var(${j}•min•height));
    max-width: var(--arc-modal-max-width, var(${j}•max•width));
    max-height: var(--arc-modal-max-height, var(${j}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${ba}•bg));
      pointer-events: var(${ba}•pointer•events, none);
      cursor: var(${ba}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${j}•font•size));
      display: grid;
      grid-template-rows: var(--arc-modal-layout-rows, var(${ze}•rows));
      grid-template-columns: var(--arc-modal-layout-columns, auto);
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${j}•gap));

      padding: var(${Ce});
      background: var(--arc-modal-header-background, var(${vt}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${j}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${m}•4m) var(${m}•8m) var(${m}•4m) var(${m}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${m}•4m) 0 var(${m}•4m) var(${m}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${m}•8);
      --arc-icon-text-line-height: normal;

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${m}•4);
      }
    }

    [arc-modal-body] {
      padding: var(${X});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${ht}•text•align));
    }

    [arc-modal-footer] {
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${uo}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${j}•gap));

      background: var(--arc-modal-footer-background, var(${vt}));
      padding: var(--arc-modal-footer-padding, var(${Va}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${j}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${m}•16) var(${m}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${ba}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, auto);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${m}•32)));
      --arc-button-bar-flex: none;

      inset: var(--arc-modal-confirm-inset, 50% auto auto 50%);
      translate: var(--arc-modal-confirm-translate, -50% -50%);
      z-index: var(--arc-modal-confirm-z-index, 3);

      /* ArcSelect Issue */
      @supports (appearance: base-select) {
        &:has([arc-select]) {
          --arc-modal-confirm-inset: 0;
          --arc-modal-confirm-translate: none;
          margin: var(--arc-modal-confirm-margin, auto);
        }
      }
    }
  }

  ${r0}
  ${a0}
`,Ua={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},_i=({children:a,headerProps:r,bodyProps:e,footerProps:o,...t})=>{const l=(0,y.useRef)(null),{isOpen:n,autoFocusId:h,isTopLayer:d=Ua.isTopLayer,isInverse:v=Ua.isInverse,scheme:u=Ua.scheme,backdropColor:p=Ua.backdropColor,variant:g=Ua.variant,message:f=Ua.message,onCloseOverride:k=Ua.onCloseOverride,onConfirmDiscard:z,onConfirmCancel:I,...M}=t,{slotStart:_,TitleElement:E,titleContent:C,slotEnd:S,...F}=r||{},{primaryButton:P,secondaryButton:G,...Z}=o||{},or=!!(C||_||S),sr=u==="auto"?void 0:u,Q=!!k,dr=nr=>Q?k?.("confirm:discard",nr,l.current??void 0):z?.("confirm:discard",nr),xr=nr=>Q?k?.("confirm:cancel",nr,l.current??void 0):I?.("confirm:cancel",nr);Lc({modalRef:l,onClose:k}),Rc({modalRef:l,isOpen:n,isTopLayer:d}),Mc({modalRef:l,isOpen:n,autoFocusId:h});const vr=nr=>{xr(nr),G?.onClick?.(nr)},ea=nr=>{dr(nr),P?.onClick?.(nr)};return(0,c.jsx)("dialog",{...M,ref:l,"arc-modal":"","arc-scheme":v?"inverse":sr,"is-confirm":g||"","is-inverse":v?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:"none",onKeyDown:Kh("none"),children:(0,c.jsxs)(Pc,{children:[or&&(0,c.jsxs)(Ci,{...F,children:[_&&(0,c.jsx)("div",{"header-slot":"start",children:_}),(0,c.jsx)("div",{"header-slot":"content",children:(0,c.jsx)(Oc,{TitleElement:E,titleContent:C})}),S&&(0,c.jsx)("div",{"header-slot":"end",children:S})]}),(0,c.jsx)(Dc,{...e,children:a||f&&(0,c.jsx)("p",{style:{margin:0},children:f})}),(0,c.jsx)(Nc,{...Z,children:(0,c.jsxs)(Tc,{children:[(0,c.jsx)(Ir,{...G,text:G?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:v,onClick:vr}),(0,c.jsx)(Ir,{...P,text:P?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:v,onClick:ea})]})})]})})};H("ArcModalConfirm",Fc);const Rr={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},e0=({children:a,confirmProps:r,headerProps:e,bodyProps:o,dismissProps:t,footerProps:l,...n})=>{const h=(0,y.useRef)(null),[d,v]=(0,y.useState)(!1),{isOpen:u,autoFocusId:p,isTopLayer:g=Rr.isTopLayer,isInverse:f=Rr.isInverse,scheme:k=Rr.scheme,backdropColor:z=Rr.backdropColor,hasConfirmFlow:I=Rr.hasConfirmFlow,hasUnsavedChanges:M=Rr.hasUnsavedChanges,onCloseOverride:_=Rr.onCloseOverride,bypassConfirmWhen:E=Rr.bypassConfirmWhen??{},size:C=Rr.size,closeOnBackdrop:S=Rr.closeOnBackdrop,closeOnEsc:F=Rr.closeOnEsc,showDismiss:P=Rr.showDismiss,onActionError:G,onClose:Z,onToggle:or,width:sr,height:Q,style:dr,...xr}=n,{showGoBack:vr,goBackProps:ea,slotStart:nr,TitleElement:Fr,titleContent:Hr,slotEnd:oa,showDivider:La=Rr.headerProps?.showDivider,...Ra}=e??{},{slotStart:ta,primaryButton:ca,secondaryButton:V,tertiaryButton:kr,showDivider:ir=Rr.footerProps?.showDivider,...Mr}=l??{},ka=!!(vr||Hr||nr||oa),wa=!!(ca||V||kr),xo=!!(wa||ta),Aa=!!(I&&M),Wa=F?"closerequest":"none",Et=k==="auto"?void 0:k,{didPressEscapeKey:ko,didClickBackdrop:de,didClickGoBackButton:tn,didClickDismissButton:wo,didClickPrimaryButton:cn,didClickSecondaryButton:nn,didClickTertiaryButton:Tt}=E,Ga=vo({modalRef:h,shouldConfirm:Aa,setIsConfirming:v,onCloseOverride:_});Lc({modalRef:h,shouldConfirm:Aa,setIsConfirming:v,onClose:Z,onToggle:or}),Rc({modalRef:h,isOpen:u,isTopLayer:g}),Mc({modalRef:h,isOpen:u,autoFocusId:p}),Ai({modalRef:h,isOpen:u,closeOnBackdrop:S,attemptCloseModal:de?vo({modalRef:h,shouldConfirm:Aa&&!de,setIsConfirming:v}):Ga}),zi({modalRef:h,isOpen:u,closeOnEsc:F,closedBy:Wa,attemptCloseModal:ko?vo({modalRef:h,shouldConfirm:Aa&&!ko,setIsConfirming:v}):Ga});const It=()=>v(!1),ln=(Ba,Pa)=>Ga(Ba)(Pa),Ma=(Ba,Pa,je)=>async he=>{he?.preventDefault?.(),he?.stopPropagation?.();const sn=()=>Pa?vo({modalRef:h,shouldConfirm:Aa&&!Pa,setIsConfirming:v})(Ba,je?.onCloseCallback)(he):Ga(Ba,je?.onCloseCallback)(he);try{await je?.onClick?.(he),sn()}catch(jt){G?.(jt,{reason:Ba,event:he})}};return(0,c.jsxs)("dialog",{...xr,ref:h,"arc-modal":"","arc-scheme":f?"inverse":Et,"is-inverse":f?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":z==="auto"?void 0:z,"data-size":C,closedby:Wa,style:{"--arc-modal-width":sr??"","--arc-modal-height":Q??"",...dr},children:[!ka&&P&&(0,c.jsx)("div",{"arc-modal-dismiss":"",children:(0,c.jsx)(Bc,{...t,isInverse:f,onClick:Ma("button:dismiss",wo,t)})}),(0,c.jsxs)(Pc,{inert:d?"":void 0,children:[ka&&(0,c.jsxs)(Ci,{...Ra,showDivider:La,children:[vr&&(0,c.jsx)("div",{"header-slot":"go-back",children:(0,c.jsx)(Ir,{"arc-modal-go-back":"",icon:"fa-regular fa-arrow-left fa-fw",text:"Go Back","aria-label":"Go Back",...ea,layout:"icon",size:"md",variant:"common",hierarchy:"secondary",isInverse:f,onClick:Ma("button:back",tn,ea)})}),nr&&(0,c.jsx)("div",{"header-slot":"start",children:nr}),(0,c.jsx)("div",{"header-slot":"content",children:(0,c.jsx)(Oc,{TitleElement:Fr,titleContent:Hr})}),oa&&(0,c.jsx)("div",{"header-slot":"end",children:oa}),P&&(0,c.jsx)("div",{"header-slot":"dismiss",children:(0,c.jsx)(Bc,{...t,isInverse:f,onClick:Ma("button:dismiss",wo,t)})})]}),(0,c.jsx)(Dc,{...o,children:a}),xo&&(0,c.jsxs)(Nc,{...Mr,showDivider:ir,children:[ta&&(0,c.jsx)("div",{"footer-slot":"content",children:ta}),wa&&(0,c.jsxs)(Tc,{children:[kr&&(0,c.jsx)(Ir,{...kr,text:kr?.text||"Button",isInverse:f,variant:"common",hierarchy:"tertiary",onClick:Ma("button:tertiary",Tt,kr)}),V&&(0,c.jsx)(Ir,{...V,text:V?.text||"Cancel",isInverse:f,variant:"common",hierarchy:"secondary",onClick:Ma("button:secondary",nn,V)}),ca&&(0,c.jsx)(Ir,{...ca,text:ca?.text||"Action",isInverse:f,variant:"common",hierarchy:"primary",onClick:Ma("button:primary",cn,ca)})]})]})]}),I&&(0,c.jsx)(_i,{isOpen:d,isInverse:f,isTopLayer:g,backdropColor:z,...r,onConfirmDiscard:ln,onConfirmCancel:It})]})};H("ArcModal",Fc);const Ta={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},o0={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-duotone fa-light-emergency-on",info:"fa-solid fa-circle-info",processing:(0,c.jsx)(hc,{"arc-modal-spinner":""})},t0=({children:a,dismissProps:r,bodyProps:e,footerProps:o,...t})=>{const l=(0,y.useRef)(null),{isOpen:n,autoFocusId:h,isTopLayer:d=Ta.isTopLayer,isInverse:v=Ta.isInverse,scheme:u=Ta.scheme,backdropColor:p=Ta.backdropColor,closeOnBackdrop:g=Ta.closeOnBackdrop,closeOnEsc:f=Ta.closeOnEsc,variant:k=Ta.variant,icon:z,TitleElement:I,titleContent:M,message:_,showDismiss:E,onCloseOverride:C=Ta.onCloseOverride,onClose:S,onToggle:F,...P}=t,{primaryButton:G,...Z}=o??{},or=z||o0[k],sr=f?"closerequest":"none",Q=u==="auto"?void 0:u,dr=vo({modalRef:l,onCloseOverride:C});return Lc({modalRef:l,onClose:S,onToggle:F}),Rc({modalRef:l,isOpen:n,isTopLayer:d}),Mc({modalRef:l,isOpen:n,autoFocusId:h}),Ai({modalRef:l,isOpen:n,closeOnBackdrop:g,attemptCloseModal:dr}),zi({modalRef:l,isOpen:n,closeOnEsc:f,closedBy:sr,attemptCloseModal:dr}),(0,c.jsxs)("dialog",{...P,ref:l,"arc-modal":"","arc-scheme":v?"inverse":Q,"is-alert":k||"","is-inverse":v?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":p==="auto"?void 0:p,"data-size":"sm",closedby:sr,children:[E&&(0,c.jsx)("div",{"arc-modal-dismiss":"",children:(0,c.jsx)(Bc,{...r,isInverse:v,onClick:dr("button:dismiss",r?.onClick)})}),(0,c.jsxs)(Pc,{children:[(0,c.jsx)(Dc,{...e,children:a||(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(Gh,{glyph:or,variant:k}),(0,c.jsx)(Oc,{TitleElement:I,titleContent:M}),(0,c.jsx)(Zh,{message:_})]})}),(0,c.jsx)(Nc,{...Z,children:(0,c.jsx)(Tc,{orientation:"vertical",children:(0,c.jsx)(Ir,{...G,text:G?.text||"Close",variant:"common",hierarchy:"primary",isInverse:v,onClick:dr("button:primary",G?.onClick)})})})]})]})};H("ArcModalAlert",Fc);const mr=i`--arc•radio`,c0=i`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${mr}•font•size: 1em;
      ${mr}•icon•size: 0.625em;
      ${mr}•size: 1.125em;
      ${mr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${mr}•font•size: var(${s}•14);
      ${mr}•icon•size: var(${s}•10);
      ${mr}•size: var(${s}•18);
      ${mr}•gap: var(${s}•8);
    }

    &[data-size=sm] {
      ${mr}•font•size: var(${s}•12);
      ${mr}•icon•size: var(${s}•10);
      ${mr}•size: var(${s}•16);
      ${mr}•gap: var(${s}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-circle);
    ${x}•size: var(${mr}•size);
    ${x}•icon•size: var(${mr}•icon•size);
    ${x}•width: var(${mr}•size);
    ${x}•height: var(${mr}•size);
    ${x}•translate: 0 var(${s}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${mr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${mr}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${x}•color: transparent;
      ${x}•background: transparent;
      ${x}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${x}•background: var(--arc-color-bg-theme-subtle);
        ${x}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${x}•background: var(--arc-color-bg-disabled);
        ${x}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${x}•color: var(--arc-color-fg-on-theme-heavy);
      ${x}•background: var(--arc-color-bg-theme-heavy);
      ${x}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${x}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${x}•color: var(--arc-color-fg-on-theme-mid);
        ${x}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,n0=L(na,["hug","fill"]),i0=L(_r,["inherit","md","sm"]),Ei=({children:a,label:r,layout:e,size:o="md",useMask:t=!0,...l})=>{const{className:n,title:h,...d}=l,v={className:n,title:h},u=a??r,p=(0,c.jsx)(co,{...d,type:"radio"}),g=t&&(0,c.jsxs)(st,{type:"radio",children:[p,(0,c.jsx)(D,{icon:"fa-solid fa-circle-small arc-fw"})]}),f=!!u&&(0,c.jsxs)(ne,{layout:e,children:[g||p,(0,c.jsx)(ie,{children:u})]});return(0,c.jsx)("span",{...v,"arc-radio":"","data-size":o,children:f||g||p})};H("ArcRadio",c0);const Dr=i`--arc•rb`,O=i`${Dr}•o`,l0=i`
@layer arc-components {

  [arc-radio-bar] {
    ${Dr}•font•size: var(${s}•14);
    ${Dr}•border•radius: var(${s}•8);
    ${Dr}•background: var(--arc-color-bg-secondary);
    ${Dr}•padding: var(${s}•4);
    ${Dr}•gap: var(${s}•2);

    ${O}•color: var(--arc-color-fg-secondary);
    ${O}•background: var(--arc-color-alpha-black-0);
    ${O}•border•color: var(--arc-color-alpha-black-0);
    ${O}•border•width: var(${s}•1);
    ${O}•border•radius: var(${s}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${O}•size: var(${s}•32);
      ${O}•line•height: var(${s}•30); /* • -2px to account for border-width (top/bottom) */
      ${O}•icon•padding: var(${s}•8);
      ${O}•text•padding: var(${s}•12);
    }

    &[data-size=md] {
      ${O}•size: var(${s}•24);
      ${O}•line•height: var(${s}•22); /* • -2px to account for border-width (top/bottom) */
      ${O}•icon•padding: var(${s}•6);
      ${O}•text•padding: var(${s}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${Dr}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Dr}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${O}•color: var(--arc-color-fg-on-hover-default);
        ${O}•background: var(--arc-color-bg-hover-default);
        ${O}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${O}•color: var(--arc-color-mono-black);
      ${O}•background: var(--arc-color-mono-white);
      ${O}•border•color: var(--arc-color-border-stark);
      ${O}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${O}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${O}•outline: var(${O}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${Dr}•font•size));
    display: var(${Dr}•display);
    gap: var(${Dr}•gap);
    border-radius: var(${Dr}•border•radius);
    background: var(${Dr}•background);
    padding: var(${Dr}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${O}•border•radius);
      outline: var(${O}•outline, none);
      outline-offset: var(${O}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${O}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${O}•size);
      min-width: var(${O}•size);

      border-radius: var(${O}•border•radius);
      border: var(${O}•border•width) solid var(${O}•border•color);
      background: var(${O}•background);
      color: var(${O}•color);
      font-weight: var(${O}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${O}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${O}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,s0=L(na,["hug","fill"]),d0=L(_r,["lg","md"]),h0=({children:a,label:r,icon:e,...o})=>{const t=a||(0,c.jsx)(Yr,{icon:e,text:r});return(0,c.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":o?.checked||void 0,children:(0,c.jsx)(Ei,{...o,label:t,layout:"fill",useMask:!1})})},v0=({children:a,size:r="lg",layout:e="hug",...o})=>(0,c.jsx)("ul",{...o,"arc-radio-bar":"","data-size":r,"data-layout":e,role:"radiogroup",children:a});H("ArcRadioBar",l0);const Ti=L(na,["fill","hug"]),Ii=L(_r,["inherit","xl","lg","md"]),u0=L(lr,["outline","solid","plain"]),g0=Ti,p0=Ii,f0=L(lr,["outline","solid","plain"]),Se=a=>(0,c.jsx)(c.Fragment,{children:!!a.children&&(0,c.jsx)("span",{...a})}),m0=a=>(0,c.jsx)(c.Fragment,{children:!!a.children&&(0,c.jsx)("span",{...a})}),Hc=({children:a,...r})=>(0,c.jsx)(c.Fragment,{children:!!a&&(0,c.jsx)(ne,{...r,children:(0,c.jsx)(ie,{children:a})})}),b0=({children:a,layout:r,size:e,variant:o,tag:t="span",...l})=>(0,c.jsx)(t,{...l,"data-layout":r,"data-size":e,"data-variant":o,children:a}),$0=()=>(0,c.jsx)("span",{"input-element":"spacer"}),y0=a=>(0,c.jsx)(Se,{...a,"input-element":"header"}),x0=a=>(0,c.jsx)(Hc,{...a,"input-element":"header-label"}),k0=a=>(0,c.jsx)(Se,{...a,"input-element":"header-slot"}),w0=a=>(0,c.jsx)(Se,{...a,"input-element":"body"}),A0=a=>(0,c.jsx)(Hc,{...a,"input-element":"input-prefix"}),z0=a=>(0,c.jsx)(Hc,{...a,"input-element":"input-suffix"}),C0=a=>(0,c.jsx)(m0,{...a,"input-element":"input-action"}),S0=a=>(0,c.jsx)(Se,{...a,"input-element":"footer"}),_0=a=>(0,c.jsx)(Se,{...a,"input-element":"footer-caption"}),E0=a=>(0,c.jsx)(Se,{...a,"input-element":"footer-slot"}),T0=a=>r=>{if(!(r?.target instanceof HTMLInputElement))return;const e={name:r?.target?.name,value:r?.target?.value};a?.(e,r)},q=i`--arc•input`,Ia=i`${q}•fg`,ut=i`${Ia}•disabled`,gt=i`${Ia}•readonly`,pt=i`${Ia}•invalid`,Qr=i`${q}•bg`,ft=i`${Qr}•hover`,mt=i`${Qr}•disabled`,bt=i`${Qr}•readonly`,$t=i`${Qr}•invalid`,I0=i`${q}•align`,ji=i`${I0}•items`,j0=i`${q}•flex`,L0=i`${j0}•direction`,Li=i`${q}•header`,yt=i`${Li}•label•color`,Ri=i`${Li}•slot•color`,Mi=i`${q}•footer`,Vc=i`${Mi}•caption•color`,Bi=i`${Mi}•slot•color`,Uc=i`${q}•border`,Wc=i`${Uc}•radius`,R0=i`${Uc}•width`,ra=i`${Uc}•color`,Gc=i`${q}•outline`,Pi=i`${Gc}•size`,Oi=i`${Gc}•offset`,Di=i`${Gc}•color`,go=i`${q}•height`,M0=i`${q}•padding`,xt=i`${M0}•inline`,Zc=i`${xt}•end`,Ni=i`${q}•slot`,Kc=i`${Ni}•gap`,Yc=i`${Ni}•font•size`,kt=i`${ra}•hover`,wt=i`${ra}•disabled`,qc=i`${ra}•readonly`,po=i`${ra}•invalid`,B0=i`${q}•action•max•height`,Fi=i`${q}•gap`,Jc=i`${q}•font•size`,P0=i`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${go}: var(${s}•48);
    ${Zc}: var(${m}•8);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${go}: var(${s}•40);
  }

  &[data-size=md] {
    ${go}: var(${s}•32);
    ${Wc}: var(${s}•4);
    ${B0}: 80%;
  }

  &:has(select) {
    ${xt}: 0;
    ${ji}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${Jc}: var(${s}•14);
    ${Yc}: var(${s}•12);

    ${go}: var(${s}•40); /* default size */
    ${Fi}: var(${m}•6);
    ${Kc}: var(${m}•4);
    ${xt}: var(${m}•12);
    ${Zc}: var(${m}•3);
    ${Wc}: var(${s}•8);
    ${R0}: var(${s}•1);
    ${Pi}: var(${s}•2);
    ${Oi}: var(${s}•1m);

    /* Inter-Component Communication -------------------------------• */

    --arc-label-cursor: var(${q}•cursor, inherit); /* ArcLabel • cursor syncing */

    &[data-size=inherit] {
      ${Jc}: 0.875em; /* 14px at 100% */
      ${Yc}: 0.75em; /* 12px at 100% */
    }

    &[data-size=md] {
      /* Inter-Component Communication -------------------------------• */
      --arc-button-border-radius: var(--arc-border-radius-sm);
      --arc-button-outline-offset: 0;
      --arc-button-font-size: 0.8em; /* ArcButton • the input size 'md' needs
                                        a slightly smaller "input-action" button
                                        footprint; there's no direct access to
                                        ArcButton['size'] prop in this context */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Ia}: var(--arc-color-fg-primary);
    ${yt}: inherit;
    ${Ri}: var(--arc-color-fg-secondary);
    ${Vc}: var(--arc-color-fg-secondary);
    ${Bi}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${Qr}: var(--arc-color-bg-primary);
      ${ft}: var(--arc-color-bg-primary);
      ${ra}: var(--arc-color-border-stark);
      ${kt}: var(--arc-color-border-heavy);

      ${ut}: var(--arc-color-fg-disabled);
      ${mt}: var(--arc-color-bg-secondary);
      ${wt}: var(--arc-color-border-mid);

      ${gt}: var(--arc-color-fg-primary);
      ${bt}: var(--arc-color-bg-disabled);
      ${qc}: var(--arc-color-border-mid);

      ${pt}: var(--arc-color-fg-critical-mid);
      ${$t}: var(--arc-color-bg-primary);
      ${po}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${Qr}: var(--arc-color-bg-secondary);
      ${ft}: var(--arc-color-bg-hover-default);
      ${ra}: transparent;
      ${kt}: var(--arc-color-border-stark);

      ${pt}: var(--arc-color-fg-critical-mid);
      ${$t}: var(--arc-color-bg-critical-muted);
      ${po}: transparent;

      ${ut}: var(--arc-color-fg-disabled);
      ${mt}: var(--arc-color-bg-disabled);
      ${wt}: transparent;

      ${gt}: var(--arc-color-fg-primary);
      ${bt}: var(--arc-color-bg-disabled);
      ${po}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${Qr}: transparent;
      ${ft}: var(--arc-color-bg-hover-default);
      ${ra}: transparent;
      ${kt}: transparent;

      ${pt}: var(--arc-color-fg-critical-mid);
      ${$t}: transparent;
      ${po}: var(--arc-color-fg-critical-mid);

      ${ut}: var(--arc-color-fg-disabled);
      ${mt}: transparent;
      ${wt}: transparent;

      ${gt}: var(--arc-color-fg-primary);
      ${bt}: var(--arc-color-bg-disabled);
      ${qc}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:not(:has(
    input:read-only,
    input:disabled,
    select[data-readonly],
    select:disabled
  )) {

    &:has(select) {
      ${q}•cursor: pointer;
    }

    &:is(
      :hover,
      [data-simulate=hover]
    ) {
      ${ra}: var(--arc-input-border-color-hover, var(${kt}));
      ${Qr}: var(--arc-input-background-hover, var(${ft}));
    }

    &:has([input-element=body]) {
      &:is(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible, :active)
      ) {
        ${Di}: var(--arc-color-border-focus);
      }
    }
  }

  &:has(input:read-only, select[data-readonly]) {
    ${q}•cursor: default;
    ${Ia}: var(${gt});
    ${Qr}: var(${bt});
    ${ra}: var(${qc});
  }

  &:has(input:disabled, select:disabled) {
    ${q}•cursor: not-allowed;
    ${Ia}: var(${ut});
    ${Qr}: var(${mt});
    ${ra}: var(${wt});
    ${yt}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${Qr}: var(${$t});
    ${yt}: var(${Ia});
    ${ra}: var(${po});
    ${Vc}: var(${pt});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${q}•display: flex;
  }

  &[data-layout=hug] {
    ${q}•display: inline-flex;
  }

  & {
    ${q}•border: var(--arc-border-width-sm) solid var(${ra});
    ${q}•outline: var(${Pi}) solid var(${Di}, transparent);
  }
}

[arc-input]:not([hidden]) {
  display: var(${q}•display, flex);
  flex-direction: var(${L0}, column);
  gap: var(${Kc});
  color: var(--arc-input-color, var(${Ia}));

  :is([input-element=header], [input-element=footer]) {
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${Yc}));
    gap: var(${Kc});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${yt}));
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Ri}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${Vc}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${Bi}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    display: flex;
    align-items: var(${ji}, center);
    gap: var(--arc-input-gap, var(${Fi}));
    height: var(${go});
    font-size: var(${Jc});

    color: var(--arc-input-color, var(${Ia}));
    background-color: var(--arc-input-background, var(${Qr}));
    border: var(--arc-input-border, var(${q}•border));
    border-radius: var(--arc-input-border-radius, var(${Wc}));
    outline: var(${q}•outline, none);
    outline-offset: var(${Oi});

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${q}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${xt}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Zc});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      border: var(--arc-border-width-sm) solid transparent;
      background: transparent;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);
    }
  }

  [input-element=input-prefix] {
    flex: none;
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      max-height: var(${q}•action•max•height, unset);
    }
  }
}

}
`,O0={onChangeHandler:T0,Wrapper:b0,Spacer:$0,Header:y0,HeaderLabel:x0,HeaderSlot:k0,InputBody:w0,InputPrefix:A0,InputSuffix:z0,InputAction:C0,Footer:S0,FooterCaption:_0,FooterSlot:E0};H("ArcInput",P0);const rr=O0,Hi=i`--arc•select`,Nr=i`${Hi}•picker`,Vi=i`${Nr}•fg`,Ui=i`${Nr}•bg`,Xc=i`${Hi}•option`,At=i`${Xc}•fg`,zt=i`${Xc}•bg`,_e=i`${Xc}•icon`,D0=i`
  ${Vi}: currentcolor;
  ${Ui}: var(--arc-color-bg-mono);

  ${Nr}•width: auto;
  ${Nr}•min•width: 3em;
  ${Nr}•border•radius: var(--arc-border-radius-lg);
  ${Nr}•shadow: var(--arc-shadow-lg);

  ${At}: currentcolor;
  ${zt}: transparent;

  ${_e}•display: none;
  ${_e}•color: var(${At});
`,N0=i`
  &[data-layout=fill] {
    ${Nr}•width: 100%; /* fallback */
    ${Nr}•width: anchor-size(inline);
  }
`,F0=i`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,H0=i`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,V0=i`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${D0}
    ${N0}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${Nr}•display, none);
      flex-direction: column;
      gap: var(${m}•4);
      border: none;
      color: var(${Vi});
      width: var(--arc-select-picker-width, var(${Nr}•width));
      min-width: var(--arc-select-picker-min-width, var(${Nr}•min•width));
      margin: var(--arc-select-picker-margin, var(${m}•4) 0);
      padding: var(--arc-select-picker-padding, var(${m}•4));
      background: var(--arc-select-picker-background, var(${Ui}));
      border-radius: var(--arc-select-picker-border-radius, var(${Nr}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${Nr}•shadow));
    }

    ::picker(select):popover-open {
      ${Nr}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      padding-inline: var(${s}•12);
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${m}•8);
      width: 100%;
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${s}•24);
      --arc-avatar-initial-font-size: var(${s}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [data-element=selected-icon] {
        display: none;
      }
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${m}•8);
      width: 100%;
      min-width: 0;

      color: var(${At});
      background: var(--arc-select-option-background, var(${zt}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${m}•8));

      &::checkmark {
        display: none;
      }

      &:hover {
        ${zt}: var(--arc-color-bg-hover-default);
      }

      &:checked {
        ${zt}: var(--arc-color-bg-selected-default);
        ${_e}•display: flex;
        ${_e}•color: var(--arc-select-option-selected-icon-color, var(${At}));
      }

      [data-element=selected-icon] {
        display: var(${_e}•display, none);
        color: var(${_e}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }
    }
  }

  ${F0}
  ${H0}

}
`,U0=(0,y.forwardRef)(({layout:a="hug",size:r="inherit",variant:e="outline",items:o,renderItem:t,headerLabel:l,headerSlot:n,footerCaption:h,footerSlot:d,readOnly:v,id:u,onChange:p,onBlur:g,onFocus:f,onKeyDown:k,onKeyUp:z,onInput:I,onInvalid:M,onClick:_,name:E,value:C,defaultValue:S,required:F,disabled:P,autoComplete:G,autoFocus:Z,form:or,...sr},Q)=>{const dr=Kr(u,"arc-select"),xr=e==="plain"&&a==="fill"?"hug":a,vr=P||void 0,ea=v||void 0,nr=F||void 0,Fr=!!(globalThis?.CSS&&typeof CSS.supports=="function"&&CSS.supports("appearance","base-select")),Hr=e!=="plain"&&!!(l||n),oa=e!=="plain"&&!!(h||d),La=o?.filter(V=>V?.variant!=="divider"&&V?.variant!=="section-label")??[],Ra=V=>{const kr=Mr=>typeof Mr=="string"&&Mr.trim().length>0;return[V?.text,V?.avatar?.name,V?.["aria-label"]].find(kr)??"Anonymous"},ta=(V,kr)=>{if(t)return t(V,kr);const ir=no(V),Mr=$i(ir),{itemId:ka,...wa}=V;return Mr(wa)},ca=ea&&(C!=null||S!=null)?String(C??S):void 0;return(0,c.jsxs)(rr.Wrapper,{...sr,"arc-select":"","arc-input":"select",layout:xr,size:r,variant:e,children:[Hr&&(0,c.jsxs)(rr.Header,{children:[(0,c.jsx)(rr.HeaderLabel,{htmlFor:dr,children:l}),!!n&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(rr.Spacer,{}),(0,c.jsx)(rr.HeaderSlot,{children:n})]})]}),(0,c.jsx)(rr.InputBody,{children:(0,c.jsxs)("select",{name:E,value:C,defaultValue:S,required:F,disabled:P,autoComplete:G,autoFocus:Z,form:or,ref:Q,id:dr,onChange:p,onBlur:g,onFocus:f,onKeyDown:k,onKeyUp:z,onInput:I,onInvalid:M,onClick:_,"aria-disabled":vr,"aria-required":nr,"data-readonly":ea,children:[(0,c.jsxs)("button",{children:[(0,c.jsx)("selectedcontent",{}),(0,c.jsx)("span",{"data-element":"picker-icon","aria-hidden":!0,children:(0,c.jsx)(D,{icon:"fa-regular fa-angle-down arc-fw"})})]}),La.map((V,kr)=>{const ir=V["aria-disabled"]===!0||V.disabled===!0,Mr=String(V?.value??V?.itemId??kr),ka=no(V),wa=Ra(V);return(0,c.jsx)("option",{value:Mr,disabled:ir||ca!==void 0&&Mr!==ca||void 0,"arc-select-option":"","arc-select-option-role":ka,children:Fr?(0,c.jsxs)(c.Fragment,{children:[ta(V,kr),(0,c.jsx)("span",{"data-element":"selected-icon","aria-hidden":!0,children:(0,c.jsx)(D,{icon:"fa-regular fa-check arc-fw"})})]}):wa},V.itemId??kr)})]})}),oa&&(0,c.jsxs)(rr.Footer,{children:[(0,c.jsx)(rr.FooterCaption,{children:h}),!!d&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(rr.Spacer,{}),(0,c.jsx)(rr.FooterSlot,{children:d})]})]})]})});H("ArcSelect",V0);const W0=L(_r,["inherit","md","sm"]),br={On:"on",Off:"off"},Ee={Before:"before",After:"after"},G0=({disabled:a,id:r,name:e,size:o="md",value:t,labelOff:l,labelOn:n,onChange:h,...d})=>{const v=Kr(e,"arc-switch-name"),u=Kr(r?`${r}-off`:void 0,"arc-switch-off"),p=Kr(r?`${r}-on`:void 0,"arc-switch-on"),g=_=>{if(_.code==="Space"){_.preventDefault(),_.stopPropagation();const E=t===br.On?br.Off:br.On;h?.({value:E},_)}},f=_=>{const E={on:Ue(n),off:Ue(l)};return E?.on&&E?.off?E[_]:!E?.on&&E?.off?`${E?.off}: ${_}`:E?.on&&!E?.off?`${E?.on}: ${_}`:E[_]},k=(0,c.jsxs)(st,{type:"switch",onKeyDown:g,children:[(0,c.jsx)(co,{type:"switch",name:v,id:u,value:br.Off,checked:t===br.Off,disabled:a,"aria-label":f(br.Off)?.trim(),onChange:h}),(0,c.jsx)(co,{type:"switch",name:v,id:p,value:br.On,checked:t===br.On,disabled:a,"aria-label":f(br.On)?.trim(),onChange:h}),(0,c.jsx)("span",{"data-element":"mask"})]}),z=!n&&t===br.Off?p:u,I=!l&&t===br.On?u:p,M=!!(n||l)&&(0,c.jsxs)(c.Fragment,{children:[!!l&&(0,c.jsx)(ne,{htmlFor:z,"arc-switch-label":n?br.Off:"",children:(0,c.jsx)(ie,{children:l})}),k,!!n&&(0,c.jsx)(ne,{htmlFor:I,"arc-switch-label":l?br.On:"",children:(0,c.jsx)(ie,{children:n})})]});return(0,c.jsx)("span",{...d,"arc-switch":"","data-state":t,"data-size":o,role:"radiogroup",children:M||k})},ur=i`--arc•switch`,J=i`${ur}•knob`,Z0=i`
@layer arc-components {

  [arc-switch] {
    ${ur}•background: var(--arc-color-alpha-white-100);
    ${J}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${ur}•background: var(--arc-color-alpha-white-70);
      ${J}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${x}•background: var(--arc-color-bg-neutral-subtle);
      ${x}•border•color: var(--arc-color-border-stark);
      ${J}•border•color: var(--arc-color-border-on-stark);
      ${J}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•border•color: var(--arc-color-border-heavy);
        ${J}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${x}•background: var(--arc-color-bg-disabled);
        ${x}•border•color: var(--arc-color-border-disabled);
        ${J}•border•color: var(--arc-color-border-on-stark);
        ${J}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${x}•background: var(--arc-color-bg-theme-heavy);
      ${x}•border•color: var(--arc-color-border-theme-heavy);
      ${J}•border•color: var(--arc-color-border-theme-heavy);
      ${J}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${x}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${x}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${ur}•font•size: 1em;
      ${ur}•width: 2.5em;
      ${ur}•height: 1.5em;
      ${ur}•gap: 0.5em;
      ${J}•size: 1.5em;
      ${J}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${ur}•font•size: var(${s}•14);
      ${ur}•width: var(${s}•40);
      ${ur}•height: var(${s}•24);
      ${ur}•gap: var(${s}•8);
      ${J}•x•shift: var(${s}•4);
      ${J}•size: var(${s}•24);
    }

    &[data-size=sm] {
      ${ur}•font•size: var(${s}•12);
      ${ur}•width: var(${s}•30);
      ${ur}•height: var(${s}•14);
      ${ur}•gap: var(${s}•8);
      ${J}•x•shift: var(${s}•1);
      ${J}•size: var(${s}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${x}•border•radius: var(--arc-border-radius-pill);
    ${x}•width: var(${ur}•width);
    ${x}•height: var(${ur}•height);
    ${x}•x•shift: var(${J}•x•shift);
    ${x}•size: var(${J}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${J}•translate: calc(-100% + var(${J}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${J}•translate: calc(0% - var(${J}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${ur}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${ur}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${x}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${J}•translate);

      display: inline-flex;
      width: var(${J}•size);
      height: var(${J}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${J}•color);
      box-shadow: var(${J}•shadow);
      border: var(${x}•border•width) solid var(${J}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,K0=({disabled:a,id:r,name:e,size:o="md",value:t,label:l,labelPosition:n=Ee.After,onChange:h,labelOff:d,labelOn:v,...u})=>{const p=Kr(e,"arc-switch-name"),g=Kr(r,"arc-switch"),f=(I,M)=>{const _=I.checked?br.On:br.Off;h?.({...I,value:_},M)};!l&&(v||d)&&(l=v||d,n=v?Ee.After:Ee.Before);const k=(0,c.jsxs)(st,{type:"checkbox",children:[(0,c.jsx)(co,{type:"checkbox",name:p,id:g,checked:t===br.On,disabled:a,role:"switch","aria-checked":t===br.On,"aria-label":l?void 0:"Toggle switch",tabIndex:0,onChange:f}),(0,c.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),z=(0,c.jsx)(ne,{htmlFor:g,"arc-switch-label":n,children:(0,c.jsx)(ie,{children:l})});return d&&v?(0,c.jsx)(G0,{...u,disabled:a,id:r,name:e,labelOff:d,labelOn:v,size:o,value:t,onChange:h}):(0,c.jsxs)("span",{...u,"arc-switch":"","data-state":t,"data-size":o,"data-label-position":n,role:"presentation","aria-live":"off",children:[l&&n===Ee.Before&&z,k,l&&n===Ee.After&&z]})};H("ArcSwitch",Z0);const Y0=["title","heading","subheading","body"],Wi=["h1","h2","h3","h4","h5","h6"],Gi=["code","div","li","p","pre","span"],Zi=[...Wi,...Gi],q0=[...Da],J0=["title-inherit","title-lg","title-md","title-sm"],X0=["heading-inherit","heading-lg","heading-md","heading-sm"],Q0=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],rv=L(lr,["inherit","primary","primary-inverse"]),av=["body-inherit","body-lg","body-md","body-sm","body-xs"],ev=Er(lr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),ov=L(So,["inherit","start","center","justify","end"]),tv=L(_o,["inherit","loose","standard","tight"]),cv={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},nv=a=>{const{align:r,lineHeight:e,size:o,variant:t,scheme:l="auto",isMonospace:n,tag:h,...d}=a,v=cv?.[h]??"body",u=o?.includes("inherit")?o?.split("-")?.[0]:o,p=t?.endsWith("-inverse");let g;return l!=="auto"?g=l:p&&(g=void 0),{...d,"arc-text":u||v,"arc-scheme":g,"data-is-monospace":n?"":void 0,"data-align":r?.includes("inherit")?void 0:r,"data-variant":t?.includes("inherit")?void 0:t,"data-line-height":e?.includes("inherit")?void 0:e}},ja=i`--arc•text`,Qc=i`${ja}•font`,Te=i`${ja}•align`,$a=i`${ja}fg`,Ki=i`${ja}•flex`,Yi=i`${ja}•hyphens`,fo=i`${ja}•letterspacing`,ya=i`${ja}•lineheight`,qi=i`${ja}•opacity`,Ji=i`${ja}•whitespace`,se=i`${Qc}•family`,hr=i`${Qc}•size`,Ie=i`${Qc}•weight`,iv=i`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Te}: unset;
  ${$a}: unset;
  ${Ki}: unset;
  ${Yi}: auto;
  ${fo}: unset;
  ${ya}: unset;
  ${qi}: unset;
  ${Ji}: unset;

  ${se}: unset;
  ${hr}: unset;
  ${Ie}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${ya}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${ya}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${ya}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Te}: start;
  }

  &[data-align=center] {
    ${Te}: center;
  }

  &[data-align=justify] {
    ${Te}: justify;
  }

  &[data-align=end] {
    ${Te}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${$a}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${$a}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${$a}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${$a}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${$a}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${$a}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${$a}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${$a}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${se}: var(--arc-font-family-title);
  ${Ie}: var(--arc-font-weight-title);
  ${fo}: var(--arc-letter-spacing-title);
  ${ya}: var(--arc-line-height-title);

  ${hr}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${hr}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${hr}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${hr}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${se}: var(--arc-font-family-heading);
  ${Ie}: var(--arc-font-weight-heading);
  ${fo}: var(--arc-letter-spacing-heading);
  ${ya}: var(--arc-line-height-heading);

  ${hr}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${hr}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${hr}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${hr}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${se}: var(--arc-font-family-subheading);
  ${Ie}: var(--arc-font-weight-subheading);
  ${fo}: unset;
  ${ya}: var(--arc-line-height-subheading);

  ${hr}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${hr}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${hr}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${hr}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${se}: var(--arc-font-family-body);
  ${Ie}: var(--arc-font-weight-body);
  ${ya}: var(--arc-line-height-body);
  ${hr}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${hr}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${hr}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${hr}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${hr}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${hr}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${se}: var(--arc-font-family-mono);
  ${ya}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Ki}));
  hyphens: var(--arc-text-hyphens, var(${Yi})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${qi}));
  text-align: var(--arc-text-align, var(${Te}));
  white-space: var(--arc-text-white-space, var(${Ji}));

  color: var(--arc-text-color, var(${$a}));

  font-size: var(--arc-text-font-size, var(${hr}));
  font-family: var(--arc-text-font-family, var(${se}));
  font-weight: var(--arc-text-font-weight, var(${Ie}));
  line-height: var(--arc-text-line-height, var(${ya}));
  letter-spacing: var(--arc-text-letter-spacing, var(${fo}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,lv=a=>(0,y.forwardRef)((r,e)=>(0,y.createElement)(a,{...nv({...r,tag:a}),ref:e})),sv=[...Zi].reduce((a,r)=>({...a,[r]:lv(r)}),{});H("Arc",iv);const dv=Ti,hv=Ii,vv=L(u0,["outline","solid"]),uv=["text","number","password","email","url"],gv=(0,y.forwardRef)(({layout:a="hug",size:r="inherit",variant:e="outline",inputProps:o,headerLabel:t,headerSlot:l,inputPrefix:n,inputAction:h,inputSuffix:d,footerCaption:v,footerSlot:u,...p},g)=>{const{id:f,onChange:k,...z}=o,I=z?.type||"text",M=z?.disabled||void 0,_=z?.readOnly||void 0,E=z?.required||void 0,C=!!(t||l),S=!!(v||u);return(0,c.jsxs)(rr.Wrapper,{...p,"arc-text-input":"","arc-input":I,layout:a,size:r,variant:e,children:[C&&(0,c.jsxs)(rr.Header,{children:[(0,c.jsx)(rr.HeaderLabel,{htmlFor:f,children:t}),!!l&&(0,c.jsx)(rr.Spacer,{}),(0,c.jsx)(rr.HeaderSlot,{children:l})]}),(0,c.jsxs)(rr.InputBody,{children:[(0,c.jsx)(rr.InputPrefix,{htmlFor:f,children:n}),(0,c.jsx)("input",{...z,ref:g,id:f,"arc-input-type":I,onChange:rr.onChangeHandler(k),"aria-disabled":M,"aria-readonly":_,"aria-required":E}),(0,c.jsx)(rr.InputSuffix,{htmlFor:f,children:d}),(0,c.jsx)(rr.InputAction,{children:h})]}),S&&(0,c.jsxs)(rr.Footer,{children:[(0,c.jsx)(rr.FooterCaption,{children:v}),!!u&&(0,c.jsx)(rr.Spacer,{}),(0,c.jsx)(rr.FooterSlot,{children:u})]})]})}),pv=L(lr,["common","ai","critical"]),Xi=[...Da],Qi=["default","success","warning","error"],rl=L(_r,["inherit","md"]),al=L(lr,["common"]),el=[...Ka],fv=[...ve],ol=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],mv=pv.filter(a=>a!=="critical"),tl={size:rl[1],variant:al[0],scheme:Xi[2],popover:el[2],placement:ol[4],severity:Qi[0],showDismiss:!0},cl=(a,r="toggle")=>{const e=document.getElementById(a);({toggle:()=>e?.togglePopover(),show:()=>e?.showPopover(),hide:()=>e?.hidePopover()})[r]()},nl=i`--arc•progress`,bv=i`${nl}•bar`,$v=i`${nl}•value`,il=i`${bv}•bg`,mo=i`${$v}•bg`,yv=i`
@layer arc-components {
[arc-progress-bar] {
  ${il}: var(--arc-color-alpha-subtle);
  ${mo}: var(--arc-color-bg-brand-stark);

  &[data-variant=ai] {
    /* @note - arc-gradient-ai-200 is not a horizontal gradient, and the light/dark values are not correct for this case */
    ${mo}: linear-gradient(to right, #9c15ff, #1eb4fb);
  }

  &[data-variant=critical] {
    ${mo}: var(--arc-color-bg-critical-mid);
  }
}

[arc-progress-bar] {
  appearance: none;
  width: 100%;
  height: var(${s}•8);

  /* firefox needs these at this level, other browsers can use these too */
  background: var(--arc-progress-bar-background, var(${il}));
  border-radius: var(--arc-border-radius-pill);
  border: none;

  /* turn off the default bar background for other browsers */
  &::-webkit-progress-bar { background: none; }

  /* firefox's progress-value bar */
  &::-moz-progress-bar {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${mo}));
  }

  /* all the others' progress-value bar */
  &::-webkit-progress-value {
    border-radius: var(--arc-border-radius-pill);
    background: var(--arc-progress-bar-value-background, var(${mo}));
  }
}

}
`,xv=({progress:a=0,variant:r="common",...e})=>(0,c.jsxs)("progress",{...e,"arc-progress-bar":"","data-variant":r,value:a,max:e.max||100,"aria-valuenow":a,"aria-valuemax":e.max||100,children:[a,"% "]});H("ArcProgressBar",yv);const xa=i`--arc•toast`,Ct=i`${xa}•content`,ll=i`${xa}•color`,sl=i`${xa}•background`,bo=i`${xa}•icon•color`,$o=i`${xa}•transition`,kv=i`
@layer arc-components {

  [arc-toast] {
    ${Ct}•gap: var(${m}•2);
    ${$o}•duration: 300ms;
    ${bo}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${xa}•font•size: var(${s}•16);
      ${Ct}•font•size: var(${s}•14);
    }

    &[data-size=inherit] {
      ${xa}•font•size: 1em;
      ${Ct}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${bo}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${bo}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${bo}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${sl}: var(--arc-color-bg-mono);
      ${ll}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${m}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${xa}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${ll}));
    background-color: var(--arc-toast-background, var(${sl}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${m}•12) var(${m}•12) var(${m}•12) var(${m}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${xa}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${xa}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${m}•8) var(${m}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${m}•8);
      padding: var(${m}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${bo}));

      height: 1lh;
      padding: 0 var(${m}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${Ct}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${m}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${$o}•duration) allow-discrete,
      overlay var(${$o}•duration) allow-discrete,
      content-visibility var(${$o}•duration) allow-discrete,
      opacity var(${$o}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,dl=({id:a,children:r,icon:e,heading:o,subtext:t,dismissProps:l,showDismiss:n=!0,onClose:h,actionSlot:d,size:v="md",variant:u="common",scheme:p=tl.scheme,placement:g="bottom-left",getToastId:f,progressBarProps:k,severity:z,...I})=>{const M=()=>{h?.()},_=p==="auto"?void 0:p,E=!!d||n,C=Kr(a,"arc-toast"),{variant:S,hierarchy:F,...P}=l||{};(0,y.useEffect)(()=>{f?.(C)},[f,C]);const G=Mn(e);return(0,c.jsx)("div",{...I,"arc-toast":"","arc-scheme":_,"data-size":v,"data-variant":u,"data-placement":g,"data-severity":z||void 0,id:C,children:(0,c.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,c.jsxs)("div",{"arc-toast-body":"",children:[e&&(0,c.jsx)(D,{icon:G,"arc-toast-icon":""}),(0,c.jsx)("div",{"arc-toast-content":"",children:r||(0,c.jsxs)(c.Fragment,{children:[o&&(0,c.jsx)("header",{"arc-toast-heading":"",children:(0,c.jsx)("strong",{children:o})}),t&&(0,c.jsx)("p",{"arc-toast-subtext":"",children:t})]})})]}),E&&(0,c.jsxs)("div",{"arc-toast-actions":"",children:[d,n&&(0,c.jsx)(Ir,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...P,popoverTarget:C,onClick:M})]}),k&&(0,c.jsx)(xv,{...k,variant:z==="error"?"critical":k.variant,"arc-toast-progress-bar":""})]})})};dl.handleToast=cl,H("ArcToast",kv);var Xv=Br(71695),$r,cr,Zr,ua,wv,hl;function Av(a=!1){if(typeof a!="boolean")throw new Error("defaultValue must be `true` or `false`");const[r,e]=$r(a),o=cr(()=>{e(!0)},[]),t=cr(()=>{e(!1)},[]),l=cr(()=>{e(n=>!n)},[]);return{value:r,setValue:e,setTrue:o,setFalse:t,toggle:l}}var ga=typeof window<"u"?y.useLayoutEffect:y.useEffect;function aa(a,r,e,o){const t=(0,y.useRef)(r);ga(()=>{t.current=r},[r]),(0,y.useEffect)(()=>{const l=e?.current??window;if(!(l&&l.addEventListener))return;const n=h=>{t.current(h)};return l.addEventListener(a,n,o),()=>{l.removeEventListener(a,n,o)}},[a,e,o])}function Qv(a){aa("click",r=>{a(r)})}function ru(){const[a,r]=$r(null),e=cr(async o=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(o),r(o),!0}catch(t){return console.warn("Copy failed",t),r(null),!1}},[]);return[a,e]}function zv(a){const[r,e]=$r(a??0),o=cr(()=>{e(n=>n+1)},[]),t=cr(()=>{e(n=>n-1)},[]),l=cr(()=>{e(a??0)},[a]);return{count:r,increment:o,decrement:t,reset:l,setCount:e}}function Cv(a,r){const e=Zr(a);ga(()=>{e.current=a},[a]),ua(()=>{if(r===null)return;const o=setInterval(()=>{e.current()},r);return()=>{clearInterval(o)}},[r])}function au({countStart:a,countStop:r=0,intervalMs:e=1e3,isIncrement:o=!1}){const{count:t,increment:l,decrement:n,reset:h}=zv(a),{value:d,setTrue:v,setFalse:u}=Av(!1),p=cr(()=>{u(),h()},[u,h]),g=cr(()=>{if(t===r){u();return}o?l():n()},[t,r,n,l,o,u]);return Cv(g,d?e:null),[t,{startCountdown:v,stopCountdown:u,resetCountdown:p}]}function St(a){const r=(0,y.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return ga(()=>{r.current=a},[a]),(0,y.useCallback)((...e)=>{var o;return(o=r.current)==null?void 0:o.call(r,...e)},[r])}var rn=typeof window>"u";function an(a,r,e={}){const{initializeWithValue:o=!0}=e,t=(0,y.useCallback)(g=>e.serializer?e.serializer(g):JSON.stringify(g),[e]),l=(0,y.useCallback)(g=>{if(e.deserializer)return e.deserializer(g);if(g==="undefined")return;const f=r instanceof Function?r():r;let k;try{k=JSON.parse(g)}catch(z){return console.error("Error parsing JSON:",z),f}return k},[e,r]),n=(0,y.useCallback)(()=>{const g=r instanceof Function?r():r;if(rn)return g;try{const f=window.localStorage.getItem(a);return f?l(f):g}catch(f){return console.warn(`Error reading localStorage key \u201C${a}\u201D:`,f),g}},[r,a,l]),[h,d]=(0,y.useState)(()=>o?n():r instanceof Function?r():r),v=St(g=>{rn&&console.warn(`Tried setting localStorage key \u201C${a}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(n()):g;window.localStorage.setItem(a,t(f)),d(f),window.dispatchEvent(new StorageEvent("local-storage",{key:a}))}catch(f){console.warn(`Error setting localStorage key \u201C${a}\u201D:`,f)}}),u=St(()=>{rn&&console.warn(`Tried removing localStorage key \u201C${a}\u201D even though environment is not a client`);const g=r instanceof Function?r():r;window.localStorage.removeItem(a),d(g),window.dispatchEvent(new StorageEvent("local-storage",{key:a}))});(0,y.useEffect)(()=>{d(n())},[a]);const p=(0,y.useCallback)(g=>{g.key&&g.key!==a||d(n())},[a,n]);return aa("storage",p),aa("local-storage",p),[h,v,u]}var Sv=typeof window>"u";function vl(a,{defaultValue:r=!1,initializeWithValue:e=!0}={}){const o=h=>Sv?r:window.matchMedia(h).matches,[t,l]=$r(()=>e?o(a):r);function n(){l(o(a))}return ga(()=>{const h=window.matchMedia(a);return n(),h.addListener?h.addListener(n):h.addEventListener("change",n),()=>{h.removeListener?h.removeListener(n):h.removeEventListener("change",n)}},[a]),t}var _v="(prefers-color-scheme: dark)",Ev="usehooks-ts-dark-mode";function eu(a={}){const{defaultValue:r,localStorageKey:e=Ev,initializeWithValue:o=!0}=a,t=vl(_v,{initializeWithValue:o,defaultValue:r}),[l,n]=an(e,r??t??!1,{initializeWithValue:o});return ga(()=>{t!==l&&n(t)},[t]),{isDarkMode:l,toggle:()=>{n(h=>!h)},enable:()=>{n(!0)},disable:()=>{n(!1)},set:h=>{n(h)}}}function ul(a){const r=Zr(a);r.current=a,ua(()=>()=>{r.current()},[])}function en(a,r=500,e){const o=Zr();ul(()=>{o.current&&o.current.cancel()});const t=wv(()=>{const l=hl(a,r,e),n=(...h)=>l(...h);return n.cancel=()=>{l.cancel()},n.isPending=()=>!!o.current,n.flush=()=>l.flush(),n},[a,r,e]);return ua(()=>{o.current=hl(a,r,e)},[a,r,e]),t}function ou(a,r,e){const o=e?.equalityFn??((v,u)=>v===u),t=a instanceof Function?a():a,[l,n]=$r(t),h=Zr(t),d=en(n,r,e);return o(h.current,t)||(d(t),h.current=t),[l,d]}function tu(a,r={}){const{preserveTitleOnUnmount:e=!0}=r,o=Zr(null);ga(()=>{o.current=window.document.title},[]),ga(()=>{window.document.title=a},[a]),ul(()=>{!e&&o.current&&(window.document.title=o.current)})}function cu(a){const[r,e]=$r(!1),o=()=>{e(!0)},t=()=>{e(!1)};return aa("mouseenter",o,a),aa("mouseleave",t,a),r}function nu({threshold:a=0,root:r=null,rootMargin:e="0%",freezeOnceVisible:o=!1,initialIsIntersecting:t=!1,onChange:l}={}){var n;const[h,d]=$r(null),[v,u]=$r(()=>({isIntersecting:t,entry:void 0})),p=Zr();p.current=l;const g=((n=v.entry)==null?void 0:n.isIntersecting)&&o;ua(()=>{if(!h||!("IntersectionObserver"in window)||g)return;let z;const I=new IntersectionObserver(M=>{const _=Array.isArray(I.thresholds)?I.thresholds:[I.thresholds];M.forEach(E=>{const C=E.isIntersecting&&_.some(S=>E.intersectionRatio>=S);u({isIntersecting:C,entry:E}),p.current&&p.current(C,E),C&&o&&z&&(z(),z=void 0)})},{threshold:a,root:r,rootMargin:e});return I.observe(h),()=>{I.disconnect()}},[h,JSON.stringify(a),r,e,g,o]);const f=Zr(null);ua(()=>{var z;!h&&((z=v.entry)!=null&&z.target)&&!o&&!g&&f.current!==v.entry.target&&(f.current=v.entry.target,u({isIntersecting:t,entry:void 0}))},[h,v.entry,o,g,t]);const k=[d,!!v.isIntersecting,v.entry];return k.ref=k[0],k.isIntersecting=k[1],k.entry=k[2],k}function iu(){const[a,r]=$r(!1);return ua(()=>{r(!0)},[]),a}function Tv(){const a=Zr(!1);return ua(()=>(a.current=!0,()=>{a.current=!1}),[]),cr(()=>a.current,[])}function lu(a=new Map){const[r,e]=$r(new Map(a)),o={set:cr((t,l)=>{e(n=>{const h=new Map(n);return h.set(t,l),h})},[]),setAll:cr(t=>{e(()=>new Map(t))},[]),remove:cr(t=>{e(l=>{const n=new Map(l);return n.delete(t),n})},[]),reset:cr(()=>{e(()=>new Map)},[])};return[r,o]}function su(a,r,e="mousedown",o={}){aa(e,t=>{const l=t.target;if(!l||!l.isConnected)return;(Array.isArray(a)?a.filter(h=>!!h.current).every(h=>h.current&&!h.current.contains(l)):a.current&&!a.current.contains(l))&&r(t)},void 0,o)}var gl=typeof window>"u";function du(a,r={}){let{initializeWithValue:e=!0}=r;gl&&(e=!1);const o=cr(d=>{if(r.deserializer)return r.deserializer(d);if(d==="undefined")return;let v;try{v=JSON.parse(d)}catch(u){return console.error("Error parsing JSON:",u),null}return v},[r]),t=cr(()=>{if(gl)return null;try{const d=window.localStorage.getItem(a);return d?o(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${a}\u201D:`,d),null}},[a,o]),[l,n]=$r(()=>{if(e)return t()});ua(()=>{n(t())},[a]);const h=cr(d=>{d.key&&d.key!==a||n(t())},[a,t]);return aa("storage",h),aa("local-storage",h),l}var pl={width:void 0,height:void 0};function hu(a){const{ref:r,box:e="content-box"}=a,[{width:o,height:t},l]=$r(pl),n=Tv(),h=Zr({...pl}),d=Zr(void 0);return d.current=a.onResize,ua(()=>{if(!r.current||typeof window>"u"||!("ResizeObserver"in window))return;const v=new ResizeObserver(([u])=>{const p=e==="border-box"?"borderBoxSize":e==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=fl(u,p,"inlineSize"),f=fl(u,p,"blockSize");if(h.current.width!==g||h.current.height!==f){const z={width:g,height:f};h.current.width=g,h.current.height=f,d.current?d.current(z):n()&&l(z)}});return v.observe(r.current,{box:e}),()=>{v.disconnect()}},[e,r,n]),{width:o,height:t}}function fl(a,r,e){return a[r]?Array.isArray(a[r])?a[r][0][e]:a[r][e]:r==="contentBoxSize"?a.contentRect[e==="inlineSize"?"width":"height"]:void 0}var ml=typeof window>"u";function vu(a={}){let{initializeWithValue:r=!0}=a;ml&&(r=!1);const e=()=>{if(!ml)return window.screen},[o,t]=$r(()=>{if(r)return e()}),l=en(t,a.debounceDelay);function n(){const h=e(),d=a.debounceDelay?l:t;if(h){const{width:v,height:u,availHeight:p,availWidth:g,colorDepth:f,orientation:k,pixelDepth:z}=h;d({width:v,height:u,availHeight:p,availWidth:g,colorDepth:f,orientation:k,pixelDepth:z})}}return aa("resize",n),ga(()=>{n()},[]),o}var _t=new Map;function Iv(a){const r=document.querySelector(`script[src="${a}"]`),e=r?.getAttribute("data-status");return{node:r,status:e}}function uu(a,r){const[e,o]=$r(()=>!a||r?.shouldPreventLoad?"idle":typeof window>"u"?"loading":_t.get(a)??"loading");return ua(()=>{if(!a||r?.shouldPreventLoad)return;const t=_t.get(a);if(t==="ready"||t==="error"){o(t);return}const l=Iv(a);let n=l.node;if(n)o(l.status??t??"loading");else{n=document.createElement("script"),n.src=a,n.async=!0,r?.id&&(n.id=r.id),n.setAttribute("data-status","loading"),document.body.appendChild(n);const d=v=>{const u=v.type==="load"?"ready":"error";n?.setAttribute("data-status",u)};n.addEventListener("load",d),n.addEventListener("error",d)}const h=d=>{const v=d.type==="load"?"ready":"error";o(v),_t.set(a,v)};return n.addEventListener("load",h),n.addEventListener("error",h),()=>{n&&(n.removeEventListener("load",h),n.removeEventListener("error",h)),n&&r?.removeOnUnmount&&(n.remove(),_t.delete(a))}},[a,r?.shouldPreventLoad,r?.removeOnUnmount,r?.id]),e}var jv=typeof window>"u";function gu(a={}){const{autoLock:r=!0,lockTarget:e,widthReflow:o=!0}=a,[t,l]=$r(!1),n=Zr(null),h=Zr(null),d=()=>{if(n.current){const{overflow:u,paddingRight:p}=n.current.style;if(h.current={overflow:u,paddingRight:p},o){const g=n.current===document.body?window.innerWidth:n.current.offsetWidth,f=parseInt(window.getComputedStyle(n.current).paddingRight,10)||0,k=g-n.current.scrollWidth;n.current.style.paddingRight=`${k+f}px`}n.current.style.overflow="hidden",l(!0)}},v=()=>{n.current&&h.current&&(n.current.style.overflow=h.current.overflow,o&&(n.current.style.paddingRight=h.current.paddingRight)),l(!1)};return ga(()=>{if(!jv)return e&&(n.current=typeof e=="string"?document.querySelector(e):e),n.current||(n.current=document.body),r&&d(),()=>{v()}},[r,e,o]),{isLocked:t,lock:d,unlock:v}}var on=typeof window>"u";function Lv(a,r,e={}){const{initializeWithValue:o=!0}=e,t=(0,y.useCallback)(g=>e.serializer?e.serializer(g):JSON.stringify(g),[e]),l=(0,y.useCallback)(g=>{if(e.deserializer)return e.deserializer(g);if(g==="undefined")return;const f=r instanceof Function?r():r;let k;try{k=JSON.parse(g)}catch(z){return console.error("Error parsing JSON:",z),f}return k},[e,r]),n=(0,y.useCallback)(()=>{const g=r instanceof Function?r():r;if(on)return g;try{const f=window.sessionStorage.getItem(a);return f?l(f):g}catch(f){return console.warn(`Error reading sessionStorage key \u201C${a}\u201D:`,f),g}},[r,a,l]),[h,d]=(0,y.useState)(()=>o?n():r instanceof Function?r():r),v=St(g=>{on&&console.warn(`Tried setting sessionStorage key \u201C${a}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(n()):g;window.sessionStorage.setItem(a,t(f)),d(f),window.dispatchEvent(new StorageEvent("session-storage",{key:a}))}catch(f){console.warn(`Error setting sessionStorage key \u201C${a}\u201D:`,f)}}),u=St(()=>{on&&console.warn(`Tried removing sessionStorage key \u201C${a}\u201D even though environment is not a client`);const g=r instanceof Function?r():r;window.sessionStorage.removeItem(a),d(g),window.dispatchEvent(new StorageEvent("session-storage",{key:a}))});(0,y.useEffect)(()=>{d(n())},[a]);const p=(0,y.useCallback)(g=>{g.key&&g.key!==a||d(n())},[a,n]);return aa("storage",p),aa("session-storage",p),[h,v,u]}function pu(a){const[r,e]=$r(1),o=r+1<=a,t=r-1>0,l=cr(v=>{const u=v instanceof Function?v(r):v;if(u>=1&&u<=a){e(u);return}throw new Error("Step not valid")},[a,r]),n=cr(()=>{o&&e(v=>v+1)},[o]),h=cr(()=>{t&&e(v=>v-1)},[t]),d=cr(()=>{e(1)},[]);return[r,{goToNextStep:n,goToPrevStep:h,canGoToNextStep:o,canGoToPrevStep:t,setStep:l,reset:d}]}var Rv="(prefers-color-scheme: dark)",Mv="usehooks-ts-ternary-dark-mode";function fu({defaultValue:a="system",localStorageKey:r=Mv,initializeWithValue:e=!0}={}){const o=vl(Rv,{initializeWithValue:e}),[t,l]=an(r,a,{initializeWithValue:e});return{isDarkMode:t==="dark"||t==="system"&&o,ternaryDarkMode:t,setTernaryDarkMode:l,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];l(v=>{const u=(d.indexOf(v)+1)%d.length;return d[u]})}}}function mu(a,r){const e=Zr(a);ga(()=>{e.current=a},[a]),ua(()=>{if(!r&&r!==0)return;const o=setTimeout(()=>{e.current()},r);return()=>{clearTimeout(o)}},[r])}function bu(a){const[r,e]=$r(!!a),o=cr(()=>{e(t=>!t)},[]);return[r,o,e]}var Bv=typeof window>"u";function $u(a={}){let{initializeWithValue:r=!0}=a;Bv&&(r=!1);const[e,o]=$r(()=>r?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),t=en(o,a.debounceDelay);function l(){(a.debounceDelay?t:o)({width:window.innerWidth,height:window.innerHeight})}return aa("resize",l),ga(()=>{l()},[]),e}var yo;(function(a){a.None="none",a.Persistent="localStorage",a.Temporary="sessionStorage"})(yo||(yo={}));const Pv=(a,r,e)=>{const[o,t]=(0,y.useState)(r),[l,n]=Lv(a,r),[h,d]=an(a,r);return e===yo.Temporary?[l,n]:e===yo.Persistent?[h,d]:[o,t]},Ov=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
