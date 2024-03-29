var renderer_classAirspace = {
	type: "unique-value",
	field: "LOWER_VAL",
	field2: "LOCAL_TYPE",
	fieldDelimiter: ", ",

	defaultSymbol: sym_def, 
	uniqueValueInfos: [
	  {
		value: "0, CLASS_E2",
		symbol: sym_ClassE,
	  }, {
		value: "0, CLASS_D",
		symbol: sym_ClassD,
	  }, {
		value: "0, CLASS_C",
		symbol: sym_ClassC,
	  }, {
		value: "0, CLASS_B",
		symbol: sym_ClassB,
	  },
	],
};

var renderer_suAirspace = {
	type: "unique-value",
	field: "TYPE_CODE",

	defaultSymbol: sym_def, 
	uniqueValueInfos: [
	  {
		value: "MOA",
		symbol: sym_MOA
	  }, {
		value: "R",
		symbol: sym_R,
	  }, {
		value: "A",
		symbol: sym_A,
	  }, 
	],
};

var renderer_site = {
	type: "unique-value",
	field: "OwnerType",
 
	uniqueValueInfos: [
	  {
		value: "City",
		symbol: sym_city,
	  }, {
		value: "County",
		symbol: sym_county,
	  }, {
		value: "State",
		symbol: sym_state,
	  }, {
		value: "University",
		symbol: sym_univ,
	  },
	  {
		  value: "Private",
		  symbol: sym_priv,
	  }
	],
};

var renderer_uasFacilities = {
	type: "unique-value",
	field: "APT1_LAANC",
	defaultSymbol: sym_def, 
	uniqueValueInfos: [
	{
		value: 1,
		symbol: sym_LAANC_1,
	},{
		value: 0,
		symbol: sym_LAANC_0
	}
	],
};

var renderer_NMS = {
	type: "simple",
    symbol: sym_MS 
};

var renderer_NMSROZ = {
	type: "simple",
    symbol: sym_MS_ROZ 
};

var renderer_NWA = {
    type: "simple",
    symbol: sym_NWA    
};

var renderer_RA_Other = {
    type: "simple",
    symbol: sym_other    
};

var renderer_CA_Other = {
    type: "simple",
    symbol: sym_CA    
};

var renderer_BLM = {
    type: "simple",
    symbol: sym_NFS   
};

var renderer_District = {
	type: "simple",  
	symbol: sym_white_outline,
};

var renderer_NFZ = {
	type: "simple", 
	symbol: sym_NFZ,
};

var renderer_CSP = {
	type: "simple",
	symbol: sym_CSP,
};

var NPS_Renderer = {
	type: "simple",  
	symbol: sym_NPS,
};

var FAA_RF_Renderer = {
	type: "simple",
	symbol: sym_FAA_RF,
	label: "Recognized Fixed-Flying Site",
};

var FRIA_renderer = {
	type: "unique-value",
	field: "orgName",
	defaultSymbol: sym_EDU,
	uniqueValueInfos: [
	{
		value: "Academy of Model Aeronautics",
		symbol: sym_AMA,
		label: "AMA",
	},
	{
		value: "Flite Test Community Association",
		symbol: sym_AMA,
		label: "AMA",
	},
	{
		value: "STEM+C Inc",
		symbol: sym_AMA,
		label: "AMA",
	},
	{
		value: "FPV Freedom Coalition, Inc",
		symbol: sym_AMA,
		label: "AMA",
	},
	],
};

var NFS_Renderer = {
	type: "simple",
	symbol: sym_NFS,
};

var NMS_Renderer = {
	type: "simple",
	symbol: sym_NMS,
};

var renderer_city = {
	type: "simple",
	symbol: sym_city_regs,
};

var renderer_county = {
	type: "simple",
	symbol: sym_county_regs,
};