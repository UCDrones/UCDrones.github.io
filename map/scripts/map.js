

require([
  "esri/Map",
  "esri/Basemap",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/geometry/Extent",
  "esri/widgets/Expand",
  "esri/widgets/LayerList",
  "esri/widgets/BasemapToggle",
  "esri/layers/GroupLayer",
  "esri/widgets/Legend",
  "esri/layers/GraphicsLayer", 
  "esri/Graphic",
  "esri/Color",
], function (Map, Basemap, MapView, FeatureLayer, Extent, Expand, LayerList, BasemapToggle, GroupLayer, Legend, Color, GraphicsLayer, Graphic) {
  let siteLayerView;
    
  var classAirspace = new FeatureLayer({
    url:
      "https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/ArcGIS/rest/services/Class_Airspace/FeatureServer/0",
    outFields: ["*"],

    visible: true,
    renderer: renderer_classAirspace,
    opacity: 0.8,
	minScale: max_Zoom_Out,
	maxScale: 0,
	title: "FAA Airspace Class",
    definitionExpression:
      "STATE = 'CA' AND (LOCAL_TYPE='CLASS_E2' AND LOWER_VAL=0 OR LOCAL_TYPE='CLASS_B' AND LOWER_VAL=0 OR LOCAL_TYPE='CLASS_C' AND LOWER_VAL=0 OR LOCAL_TYPE='CLASS_D' AND LOWER_VAL=0) AND (NAME<>'SANTA BARBARA AIRPORT CLASS E2') AND NAME<>'VAN NUYS CLASS E2' AND NAME<>'RIVERSIDE MARCH FIELD CLASS D' AND NAME<>'EDWARDS AFB CLASS E2' AND NAME<>'LANCASTER CLASS E2' AND NAME<>'BAKERSFIELD CLASS E2' AND NAME<>'LEMOORE NAS CLASS E2' AND NAME<>'MONTEREY PENINSULA AIRPORT CLASS E2' AND NAME<>'MOUNTAIN VIEW CLASS E2' AND NAME<>'SACRAMENTO EXECUTIVE AIRPORT CLASS E2'",
  });



  var uasFacilities = new FeatureLayer({
    url:
      "https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/FAA_UAS_FacilityMap_Data_V5/FeatureServer/0/",
    outFields: ["*"],

    minScale: max_Zoom_Fac,
    maxScale: 0,
    renderer: renderer_uasFacilities,
    labelingInfo: [UASFacilitiesLabels],
	visible: false,
    title: "UAS Facility  Maps",
    definitionExpression: "REGION = 'Western' AND APT1_ICAO<>'KNYL' AND APT1_ICAO<>'KIFP' AND APT1_ICAO<>'KLAS' AND APT1_ICAO<>'KHND' AND APT1_ICAO<>'KVGT' AND APT1_ICAO<>'KINS' AND APT1_ICAO<>'KTPH' AND APT1_ICAO<>'KNFL' AND APT1_ICAO<>'KRNO' AND APT1_ICAO<>'KLMT' AND APT1_ICAO<>'KMFR' AND APT1_ICAO<>'KOTH' AND APT1_ICAO<>'KEUG' AND APT1_ICAO<>'KBDN' AND APT1_ICAO<>'KBNO' AND APT1_ICAO<>'KBAM' AND APT1_ICAO<>'KGXF' AND APT1_ICAO<>'KRYN' AND APT1_ICAO<>'KTUS' AND APT1_ICAO<>'KDMA' AND APT1_ICAO<>'KFHU' AND APT1_ICAO<>'KOTH' AND APT1_ICAO<>'KDUG' AND APT1_ICAO<>'KPHX' AND APT1_ICAO<>'KLUF' AND APT1_ICAO<>'KGYR' AND APT1_ICAO<>'KCHD' AND APT1_ICAO<>'KIWA' AND APT1_ICAO<>'KFFZ' AND APT1_ICAO<>'KSDL' AND APT1_ICAO<>'KDVT' AND APT1_ICAO<>'KPRC' AND APT1_ICAO<>'KGCN' AND APT1_ICAO<>'KGEU' AND APT1_ICAO<>'KFLG' AND APT1_ICAO<>'KINW' AND APT1_ICAO<>'KSGU' AND APT1_ICAO<>'KCDC' AND APT1_ICAO<>'KBCE' AND APT1_ICAO<>'KSDL' AND APT1_ICAO<>'KDVT' AND APT1_ICAO<>'KPRC' AND APT1_ICAO<>'KGCN'",
	
	
  });
  

  var UASTestSite = new FeatureLayer({
    url:
      "https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/UAS_Test_Sites/FeatureServer",
	  
    outFields: ["*"],
	title: "Flight Practice Sites",
	definitionExpression: "OwnerType <> 'Caltrans' ",
	renderer: renderer_site,
	
	minScale: max_Zoom_Out,
    maxScale: 0,
	
	popupTemplate: {		
		title: "{Name}",
		content: [
			{
				type: "text",
				text: "<b>Owner:</b> {Owner}<br><b>Access:</b> {Access}<br><b>Size:</b> {Size}<br><b>Notes: </b> {Notes} <br><br><b>Site good for:</b>",
			},
			{
				type: "fields",
				fieldInfos: [
					{fieldName: "expression/simpletest"},
					{fieldName: "expression/performancetest"},
					{fieldName: "expression/begtraining"},
					{fieldName: "expression/pilottest"},
					{fieldName: "expression/advtest"},
					{fieldName: "expression/mission"}
				]
			}
		],
		expressionInfos:arcadeExpressionInfos
	},
	
  });

  var FAA_NS_NFZ = new FeatureLayer({
    url:
      "https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/DoD_Mar_13/FeatureServer/0",
    outFields: ["*"],

    visible: true,
    renderer: renderer_NFZ,
    minScale: max_Zoom_Out,
    maxScale: 0,
    listMode: "hide",
    definitionExpression: "STATE = 'CA'",
	
	popupTemplate: {
		title: "{Base} - {Facility}",
		content: "<b>FAA No Fly Zone</b><br><b>Reason:</b> {REASON}",
	},
  });
  
  var NFS_bounds = new FeatureLayer({
	 url:"https://apps.fs.usda.gov/arcx/rest/services/EDW/EDW_ForestSystemBoundaries_01/MapServer" ,
	 outFields:["*"],
	 title: "National Forests",
	 labelingInfo: [NFS_Labels],
	 minScale: max_Zoom_Out,
     maxScale: 0,
	 renderer: NFS_Renderer,
	 definitionExpression: "REGION = '05'",
	 popupTemplate: {
		 title: "{FORESTNAME}",
		 content: "Flight Operations within National Forests are not prohibited, but please contact the U.S. Forest Service if you want to operate in these areas. <b>Flight operations within Congressionally Designated Wilderness Areas are prohibited</b>",
	 }
  });
  
  var BLM_NMS = new FeatureLayer({
    url: "https://gis.blm.gov/arcgis/rest/services/lands/BLM_Natl_NLCS_NM_NCA_poly/MapServer/1",
    outFields:["*"],
    title: "National Monuments",
    minScale: max_Zoom_Out,
    maxScale: 0,
    renderer: NMS_Renderer,
    definitionExpression: "STATE_ADMN = 'CA'",
    popupTemplate: {
        title: "{Monuments_NCAs_SimilarDesignation2015.NCA_NAME}",
	content: "Flight Operations within National Monucments and Conservation Areas are typically prohibited, contact the Bureau of Land Management if you want to operate in these areas. <b>Flight operations within Congressionally Designated Wilderness Areas are prohibited</b>",
    }
      
  });
  
    var FED_NWA = new FeatureLayer({
    url: "https://services1.arcgis.com/ERdCHt0sNM6dENSD/arcgis/rest/services/Wilderness_Areas_in_the_United_States/FeatureServer/0",
    outFields:["*"],
    title: "National Wilderness Area",
    minScale: max_Zoom_Out,
    maxScale: 0,
    renderer: renderer_NWA,
    visible: false,
    definitionExpression: "STATE = 'CA' OR STATE='CA/NV' OR STATE='CA/OR' OR STATE='AZ/CA'",
    popupTemplate: {
        title: "{NAME}",
	content: "<b>Flight Operations within National Wilderness Areas are prohibited</b>",
    }
      
  });
  
  
  var DL_NOTAM = new FeatureLayer({
	 url: "https://www.ocgis.com/uav/rest/services/Survey/OC_Flight_Restrictions/MapServer/0",
	 minScale: max_Zoom_Out,
	 maxScale: 0,
	 listMode: "hide",
	 renderer: renderer_NFZ,
	 popupTemplate: {
		 title: "DISNEYLAND",
		 content: "<b>FAA No Fly Zone</b><br><b>Reason: </b>Disneyland TFR<br><b>Request Authorization</b>: <a href='HTTP://WWW.TSA.GOV/STAKEHOLDERS/AIRSPACE-WAIVERS-0' target='_blank'>HTTP://WWW.TSA.GOV/STAKEHOLDERS/AIRSPACE-WAIVERS-0</a>"
	 },
  });
  
  var FAA_rec_fields = new FeatureLayer({
	url: "https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/Recreational_Flyer_Fixed_Sites/FeatureServer/0",
	outFields: ["*"],
	definitionExpression: "STATE = 'CA'",
	visible: true,
	minScale: max_Zoom_Out,
	maxScale: 0,	
	renderer: FAA_RF_Renderer,
	title: "FAA Recognized Recreational Flyer Fixed Sites",
	
	popupTemplate: {
		title: "Recreational Flyer Site",
		content: "<b>Club Name:</b> {SITE_NAME} <br>Contact the Club for Access Information",
	}
  });
  
  var CA_State_Park = new FeatureLayer({
	 url: "https://services2.arcgis.com/AhxrK3F6WM8ECvDi/arcgis/rest/services/ParkBoundaries/FeatureServer/0", 
	 outFields: ["*"],
	 definitionExpression: "SUBTYPE = 'Park Unit or Property'",
	 title: "CA State Parks",
	 minScale: max_Zoom_Out,
	 maxScale: 0,
	 renderer: renderer_CSP,
	 
	 popupTemplate: {
		title: "{UNITNAME}",
		content: "Contact the Park for authorization<br><b>More Information: </b><a href='https://www.parks.ca.gov/?page_id=29229' target='_blank'>Drones in State Parks</a>",
	 }
  });
  
  var US_NPS = new FeatureLayer({
	 url: "https://services1.arcgis.com/fBc8EJBxQRMcHlei/arcgis/rest/services/NPS_Land_Resources_Division_Boundary_and_Tract_Data_Service/FeatureServer/2",
	 outFields: ["*"],
	 title: "US National Parks",
	 minScale: max_Zoom_Out,
	 maxScale: 0,
	 definitionExpression: "STATE = 'CA'",
	 renderer: NPS_Renderer,
	 
	 popupTemplate: {
		title: "{UNIT_NAME}",
		content: "National Parks are generally a no-drone-zone.  Contact the Park for authorization",
	 }
  });
  
  var UC_campus = new FeatureLayer({
	 url:"https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/UC_Properties/FeatureServer/0",
	 outFields:["*"],	 
	 title: "Main Campus",
	 renderer: UC_renderer,
	 //minScale: max_Zoom_Out2,
	 maxScale: 0,
	 definitionExpression: "Type = 'Main Campus'",
	 popupTemplate: {
		 title: "{Name}",
		 content: "<b>Main Campus</b> <br> Use UC Drones for authorization",
	 }
  });
  
  var UC_other = new FeatureLayer({
	 url:"https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/UC_Properties/FeatureServer/0",
	 outFields:["*"],	 
	 title: "Other UC Properties",
	 //minScale: max_Zoom_Out,
	 maxScale: 0,
	 renderer: UC_renderer2,
	 definitionExpression: "Type <> 'Main Campus'",
	 popupTemplate: {
		 title: "{Name}",
		 content: "<b>{Type}</b> - Under {Campus} <br> Use UC Drones for authorization",
	 }
  });

  var CA_city_regs1 = new FeatureLayer({
	  url:"https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/CA_UAS_Regulations/FeatureServer/0",
	  outFields:["*"],
	  title: "CA City Regulations",
	  minScale: max_Zoom_Out,
	  maxScale: 0,
	  renderer: renderer_city,
	  definitionExpression: "DroneReg = 1",
	  popupTemplate: {
		  title: "{NAME}",
		  content: "<b>Caution City Regulations Exist</b><br><b>Please review: </b><br> - {Drone_Sec} - <a href='{Drone_Code}' target='_blank'>Source</a><br><b>Summary: </b>{Notes}<br><b>Last Reviewed: </b>{LastUpdate}"
	  }
  });
  
  var CA_city_regs2 = new FeatureLayer({
	  url:"https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/CA_UAS_Regulations/FeatureServer/0",
	  outFields:["*"],
	  title: "CA City Regulations",
	  minScale: max_Zoom_Out,
	  maxScale: 0,
	  renderer: renderer_city,
	  definitionExpression: "DroneReg = 2",
	  popupTemplate: {
		  title: "{NAME}",
		  content: "<b>Caution City Regulations Exist</b><br><b>Please review: </b><br> - {Drone_Sec} - <a href='{Drone_Code}' target='_blank'>Source</a><br> - {Drone_Sec2} - <a href='{Drone_Code2}' target='_blank'>Source</a><br><b>Summary: </b>{Notes}<br><b>Last Reviewed: </b>{LastUpdate}"
	  }
  });

  var CA_county_regs1 = new FeatureLayer({
	  url:"https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/CA_UAS_Regulations/FeatureServer/1",
	  outFields:["*"],
	  title: "CA County Regulations",
	  minScale: max_Zoom_Out,
	  maxScale: 0,
	  renderer: renderer_county,
	  definitionExpression: "DroneReg = 1",
	  popupTemplate: {
		  title: "{NAME} County",
		  content: "<b>Caution County Regulations Exist</b><br><b>Please review: </b><br> - {Drone_Sec} - <a href='{Drone_Code}' target='_blank'>Source</a><br><b>Summary: </b>{Notes}<br><b>Last Reviewed: </b>{LastUpdate}"
	  }
  });
  
  var CA_county_regs2 = new FeatureLayer({
	  url:"https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/CA_UAS_Regulations/FeatureServer/1",
	  outFields:["*"],
	  title: "CA County Regulations",
	  minScale: max_Zoom_Out,
	  maxScale: 0,
	  renderer: renderer_county,
	  definitionExpression: "DroneReg = 2",
	  popupTemplate: {
		  title: "{NAME} County",
		  content: "<b>Caution County Regulations Exist</b><br><b>Please review: </b><br> - {Drone_Sec} - <a href='{Drone_Code}' target='_blank'>Source</a><br> - {Drone_Sec2} - <a href='{Drone_Code2}' target='_blank'>Source</a><br><b>Summary: </b>{Notes}<br><b>Last Reviewed: </b>{LastUpdate}"
	  }
  });
  
  var CA_county_regs3 = new FeatureLayer({
	  url:"https://services2.arcgis.com/wx8u046p68e0iGuj/arcgis/rest/services/CA_UAS_Regulations/FeatureServer/1",
	  outFields:["*"],
	  title: "CA County Regulations",
	  minScale: max_Zoom_Out,
	  maxScale: 0,
	  renderer: renderer_county,
	  definitionExpression: "DroneReg = 3",
	  popupTemplate: {
		  title: "{NAME} County",
		  content: "<b>Caution County Regulations Exist</b><br><b>Please review: </b><br> - {Drone_Sec} - <a href='{Drone_Code}' target='_blank'>Source</a><br> - {Drone_Sec2} - <a href='{Drone_Code2}' target='_blank'>Source</a><br> - {Drone_Sec} - <a href='{Drone_Code}' target='_blank'>Source</a><br><b>Summary: </b>{Notes}<br><b>Last Reviewed: </b>{LastUpdate}"
	  }
  });
  
  var FAA_MOA = new FeatureLayer({
   url:
      "https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/Special_Use_Airspace/FeatureServer/0",
    outFields: ["*"],

    visible: true,
    renderer: renderer_suAirspace,
    opacity: 0.8,
	minScale: max_Zoom_Out,
	maxScale: 0,
	title: "FAA - Military Operations Area",
    definitionExpression:
      "STATE = 'CA' AND (LOWER_VAL=0 OR LOWER_VAL=200) AND (TYPE_CODE='MOA')",
    popupTemplate:{
        title:"{NAME}",
        content: "<b>Caution</b>: Military Operations Area<br>Pilots must exercise extreme caution while flying within a MOA when military activity is being conducted.  Flight operations not prohibited, but not recommended when active. <br><br><b>Active:</b> {TIMESOFUSE}. <br>From {LOWER_VAL} ft and above. <br><b>Managed by:</b> {CONT_AGENT}."
    }
  });
  
    var FAA_R = new FeatureLayer({
   url:
      "https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/Special_Use_Airspace/FeatureServer/0",
    outFields: ["*"],

    visible: true,
    renderer: renderer_suAirspace,
    opacity: 0.8,
	minScale: max_Zoom_Out,
	maxScale: 0,
	title: "FAA - Restricted Airspace",
    definitionExpression:
      "STATE = 'CA' AND (LOWER_VAL=0 OR LOWER_VAL=200) AND (TYPE_CODE='R')",
    popupTemplate:{
        title:"{NAME}",
        content: "<b>Caution</b>: Restricted Areas<br>All flight operations in restricted areas must be pre-authorized by the controlling entity at all times.  Authorization may be possible when not active, but not guaranteed. <br><br><b>Active:</b> {TIMESOFUSE}. <br>From {LOWER_VAL} ft and above. <br><b>Managed by:</b> {CONT_AGENT}."
    }
  });
  
      var FAA_A = new FeatureLayer({
   url:
      "https://services6.arcgis.com/ssFJjBXIUyZDrSYZ/arcgis/rest/services/Special_Use_Airspace/FeatureServer/0",
    outFields: ["*"],

    visible: true,
    renderer: renderer_suAirspace,
    opacity: 0.8,
	minScale: max_Zoom_Out,
	maxScale: 0,
	title: "FAA - Alert Area",
    definitionExpression:
      "STATE = 'CA' AND (LOWER_VAL=0 OR LOWER_VAL=200) AND (TYPE_CODE='A')",
    popupTemplate:{
        title:"{NAME}",
        content: "<b>Caution</b>: Alert Area<br>Area contains a high volume of pilot training operations, or an unusual type of aeronautical activity.  Fly with caution. <br><br><b>Active:</b> {TIMESOFUSE}. <br>From {LOWER_VAL} ft and above. <br><b>Managed by:</b> {CONT_AGENT}."
    }
  });

  var publicGroupLayers = new GroupLayer({
	  title: "Public Lands",
	  visible: false,
	  visibilityMode: "independent",
	  layers: [US_NPS, NFS_bounds, BLM_NMS, FED_NWA, CA_State_Park],
  });
  
  var flyingsitesGroupLayers = new GroupLayer({
	 title: "Identified Flying Sites",
		visible: true,
		visibilityMode: "independent",
		layers: [FAA_rec_fields, UASTestSite],
  });
  
  var FAA_SUA = new GroupLayer({
      title: "FAA Special Use Airspace",
      visible:true,
      visibilityMode:"inherited",
      listMode:"hide-children",
      layers:[FAA_MOA,FAA_R,FAA_A],
  })
  
  var airspaceGroupLayers = new GroupLayer({
	 title: "FAA Airspace Information",
	 visible: true,
	 visibilityMode: "independent",
	 layers: [classAirspace, uasFacilities, FAA_SUA],
  });
  
  var UC_propertiesGroupLayers = new GroupLayer({
	  title: "University of California",
	  visible: true,
	  visibilityMode: "independent",
	  layers: [ UC_other,UC_campus,]
	  
  });
  
  var CA_county = new GroupLayer({
	  title: "CA County Regulations",
	  visibility: true,
	  visibilityMode: "inherited",
	  listMode: "hide-children",
	  layers: [CA_county_regs1, CA_county_regs2, CA_county_regs3],
  });
  
  var CA_city = new GroupLayer({
	 title: "CA City Regulations",
	 visibility: true,	 
	 visibilityMode: "inherited",
	 listMode: "hide-children",
	 layers: [CA_city_regs1, CA_city_regs2],
	 
  });
  
  var CA_State_Local_Regs = new GroupLayer({
	  title: "CA Local Regulations",
	  visible: false,
	  visibilityMode: "independent",
	  blendMode: "normal",
	  layers: [CA_city,CA_county],
	  
  });
  
  

  var map = new Map({
    basemap: "gray",
    layers: [
        publicGroupLayers,
	CA_State_Local_Regs,
        airspaceGroupLayers,
        FAA_NS_NFZ,
	DL_NOTAM,
        UC_propertiesGroupLayers	  
    ],
  });
  
  

  var view = new MapView({
    container: "Map", 
    map: map, 
    zoom: 11, 
    center: [-120.420165, 37.363572], // longitude, latitude
  });
  
  
  var basemapToggle = new BasemapToggle({
	view: view,
	nextBasemap: "satellite"
  });
  
  view.ui.add(basemapToggle, "bottom-right");
  

  var layerList = new LayerList({
    view: view,
    container: "layers"
  });

  //Do some things after everything has loaded
  setTimeout(function(){
	layerList.operationalItems.reverse();
	
	var legend = new Legend({
	  view: view,
	  layerInfos: [
	  {
		layer: UC_campus,
		title: "UC Campuses"
	  }]
	});
	view.ui.add(legend, "top-right");
	
  }, 2000);
  

    view.when().then(function() {
        view.watch("scale", function(newValue) {
	UC_campus.renderer = newValue <= max_Zoom_Out ? UC_renderer : UC_point_renderer;
	UC_other.renderer = newValue <= max_Zoom_Out ? UC_renderer2 : UC_point_other_renderer;
	});
    });
});
