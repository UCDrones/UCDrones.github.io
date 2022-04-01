var max_Zoom_Out = 2400000;
var max_Zoom_Out2 = 10400000;
var max_Zoom_Fac = 300000;

var color_FAA_blue_opaqu = [1, 135, 191, 0.9];
var color_FAA_blue_clear = [1, 135, 191, 0.3];
var color_FAA_mage_opaqu = [167, 98, 168, .9];
var color_FAA_mage_clear = [167, 98, 168, .3];

var color_NFS = [70,180,70,0.4];
var color_NFS_line = color_NFS.slice();
color_NFS_line[3] = 0.9;

var color_NMS = [255,172,28,0.4];
var color_NMS_line = color_NMS.slice();
color_NMS_line[3] = 0.9;

var color_NPS = [30, 70,30,0.6];
var color_NPS_line = color_NPS.slice();
color_NPS_line[3] = 0.9;

var color_CSP = [0, 56, 118, 0.3];
var color_CSP_line = color_CSP.slice();
color_CSP_line[3] = 0.9;

var color_LAANC_1 = [0, 128, 0, .3];
var color_LAANC_1_line = [0, 128, 0, .8];
var color_LAANC_0 = [255, 69, 0, .3];
var color_LAANC_0_line = [255,99,71,.8];

//IBM colorblind palette
var color_site = [	[100, 199, 255],
					[120, 94, 240],
					[220, 38, 127],
					[254, 97, 0],
					[255, 231, 0]
				];
				
var marker_size = "16px";

var sym_ClassE = {
	type: "simple-fill",
    color: color_FAA_mage_clear,
    outline: {
        color: color_FAA_mage_opaqu,
        width: "3px",
		style: "dash",
    },
}

var sym_ClassD = {
	type: "simple-fill", 
    color: color_FAA_blue_clear,
    outline: {
        color: color_FAA_blue_opaqu,
        width: "3px",
        style: "dash",
    },
}

var sym_ClassC = {
	type: "simple-fill", 
	color: color_FAA_mage_clear,
    outline: {
        color: color_FAA_mage_opaqu,
        width: "3px",
    },
}

var sym_ClassB = {
	type: "simple-fill",
    color: color_FAA_blue_clear,
    outline: {
        color: color_FAA_blue_opaqu,
        width: "3px",
    },
}

var sym_def = {
	type: "simple-fill",
	color: "blue",
}


var sym_MOA = {
    type: "simple-fill",
    color: [0,0,0,.1],

    outline: {
        color: color_FAA_mage_opaqu,
        width: "2px",
	style: "dot"
    }
};

var sym_R = {
    type: "simple-fill",
    color: [128,0,0,.3],

    outline: {
        color: color_FAA_blue_opaqu,
        width: "2px",
	style: "dot"
    }
};

var sym_A = {
    type: "simple-fill",
    color: [0,0,0,.1],

    outline: {
        color: color_FAA_mage_opaqu,
        width: "2px",
	style: "dot"
    }
};

var sym_NFS = {
	type: "simple-fill",
	color: color_NFS,
	outline: {
		width: 1.5,
		color: color_NFS_line,
	},
}

var sym_NMS = {
	type: "simple-fill",
	color: color_NMS,
	outline: {
		width: 1.5,
		color: color_NMS_line,
	},
}

var sym_CSP = {
	type: "simple-fill",
	color: color_CSP,
	outline: {
		width: 1.5,
		color: color_CSP_line,
	},
}

var sym_LAANC_1 = {
	type: "simple-fill",  
	color: color_LAANC_1 ,
	outline: {
		width: 3,
		color: color_LAANC_1_line,
	}
}

var sym_LAANC_0 = {
	type: "simple-fill",  
	color: color_LAANC_0,
	outline: {
		width: 3,
		color: color_LAANC_0_line,
	},
}

var sym_white_outline = {
	type: "simple-fill",  
	color: [ 255, 128, 0, 0.0 ],
	outline: {  
		width: 2,
		color: "white"
	}
}

var sym_NFZ = {
	type: "simple-fill",  
	color: [ 128, 0, 0, 0.6 ],
	outline: { 
		width: 2,
		color: "red"
	}
}

var sym_NPS = {
	type: "simple-fill",  
	color: color_NPS,
	outline: { 
		width: 2,
		color: color_NPS_line,
	}
}

var sym_FAA_RF = {
	type: "simple-marker", 
	style: "circle",
	color: color_site[0],
	size: "10px",  
	outline: {  
		color: [0, 0, 0 ],
		width: 2,  
	}
}

var sym_priv = {
	type: "simple-marker", 
	style: "circle",
	color: color_site[0],
	size: marker_size,  
	outline: {  
		color: [0, 0, 0 ],
		width: 2,  
	}
}

var sym_city = {
	type: "simple-marker", 
	style: "circle",
	color: color_site[1],
	size: marker_size,  
	outline: {  
		color: [0, 0, 0 ],
		width: 2,  
	}
}

var sym_county = {
	type: "simple-marker", 
	style: "circle",
	color: color_site[2],
	size: marker_size,  
	outline: {  
		color: [0, 0, 0 ],
		width: 2,  
	}
}

var sym_state = {
	type: "simple-marker", 
	style: "circle",
	color: color_site[3],
	size: marker_size,  
	outline: {  
		color: [0, 0, 0 ],
		width: 2,  
	}
}

var sym_univ = {
	type: "simple-marker", 
	style: "circle",
	color: color_site[4],
	size: marker_size,  
	outline: {  
		color: [0, 0, 0 ],
		width: 2,  
	}
}

var sym_fieldstation = {
	type: "simple-marker", 
	style: "circle",
	color: [254, 150, 100],
	size: "10px",  
	outline: {  
		color: [0, 0, 0 ],
		width: 2,  
	}
}

var sym_city_regs = {
	type: "simple-fill",
	color: [ 200, 200, 0, 0.10 ],
	outline: { 
		width: 2,
		color: "black"
	}
}

var sym_county_regs = {
	type: "simple-fill",
	color: [ 0, 200, 200, 0.10],
	outline: { 
		width: 2,
		color: "black"
	}
}

var sym_NWA = {
    type: "simple-fill", // autocasts as new SimpleFillSymbol()
    color: [0, 0, 0, 1],
    style: "diagonal-cross",
    outline: {
        color: "black",
        width: 1
    }
}