var UC_cl = 0.5;
var UC_op = 0.9;
var UC_fs = 0.1;

let color_table = [
	[92,186,230],
	[182,217,87],
	[250,195,100],
	[140,211,255],
	[217,152,203],
	[242,210,73],
	[147,185,198],
	[204,197,168],
	[82,186,204],
	[219,219,70],
	[152,170,251],
]

var color_UC = [];

for (i=0; i<color_table.length;i++){
	temp1 = color_table[i].slice();
	temp1.push(UC_cl);
	temp2 = color_table[i].slice();
	temp2.push(UC_op);
	temp3 = color_table[i].slice();
	temp3.push(UC_fs);
	color_UC[i]= [temp1,temp2,temp3];
}



var UCANR_symbol = {
	type: "simple-fill",  
	color: color_UC[0][0],
	outline: {
		color: color_UC[0][1],
		width: "2px",
	}
};

var UCB_symbol = {
	type: "simple-fill",  
	color: color_UC[1][0],
	outline: {
		color: color_UC[1][1],
		width: "2px",
	}
};

var UCD_symbol = {
	type: "simple-fill",  
	color: color_UC[2][0],
	outline: {
		color: color_UC[2][1],
		width: "2px",
	}
};

var UCI_symbol = {
	type: "simple-fill",  
	color: color_UC[3][0],
	outline: {
		color: color_UC[3][1],
		width: "2px",
	}
};

var UCLA_symbol = {
	type: "simple-fill",  
	color: color_UC[4][0],
	outline: {
		color: color_UC[4][1],
		width: "2px",
	}
};

var UCM_symbol = {
	type: "simple-fill",  
	color: color_UC[5][0],
	outline: {
		color: color_UC[5][1],
		width: "2px",
	}
};

var UCR_symbol = {
	type: "simple-fill",  
	color: color_UC[6][0],
	outline: {
		color: color_UC[6][1],
		width: "2px",
	}
};

var UCSD_symbol = {
	type: "simple-fill",  
	color: color_UC[7][0],
	outline: {
		color: color_UC[7][1],
		width: "2px",
	}
};

var UCSF_symbol = {
	type: "simple-fill",  
	color: color_UC[8][0],
	outline: {
		color: color_UC[8][1],
		width: "2px",
	}
};

var UCSB_symbol = {
	type: "simple-fill",  
	color: color_UC[9][0],
	outline: {
		color: color_UC[9][1],
		width: "2px",
	}
};

var UCSC_symbol = {
	type: "simple-fill",  
	color: color_UC[10][0],
	outline: {
		color: color_UC[10][1],
		width: "2px",
	}
};

var UC_renderer = {
	type: "unique-value",
	field: "Campus",
	//defaultSymbol: sym_def, 
	uniqueValueInfos: [
		{
			value: "UC ANR",
			symbol: UCANR_symbol,
			label: "UC ANR - REC",
		},
		{
			value: "UC Berkeley",
			symbol: UCB_symbol,
			label: "UC Berkeley"
		},
		{
			value: "UC Davis",
			symbol: UCD_symbol,
			label: "UC Davis",
		},
		{
			value: "UC Irvine",
			symbol: UCI_symbol,
			label: "UC Irvine",
		},
		{
			value: "UC Los Angeles",
			symbol: UCLA_symbol,
			label: "UC Los Angeles",
		},
		{
			value: "UC Merced",
			symbol: UCM_symbol,
			label: "UC Merced",
		},
		{
			value: "UC Riverside",
			symbol: UCR_symbol,
			label: "UC Riverside",
		},
		{
			value: "UC San Diego",
			symbol: UCSD_symbol,
			label: "UC San Diego",
		},
		{
			value: "UC San Francisco",
			symbol: UCSF_symbol,
			label: "UC San Francisco",
		},
		{
			value: "UC Santa Barbara",
			symbol: UCSB_symbol,
			label: "UC Santa Barbara",
		},
		{
			value: "UC Santa Cruz",
			symbol: UCSC_symbol,
			label: "UC Santa Cruz",
		},
	],

};

var UCANR2_symbol = {
	type: "simple-fill",  
	color: color_UC[0][2],
	outline: {
		color: color_UC[0][1],
		width: "2px",
	}
};

var UCB2_symbol = {
	type: "simple-fill",  
	color: color_UC[1][2],
	outline: {
		color: color_UC[1][1],
		width: "2px",
	}
};

var UCD2_symbol = {
	type: "simple-fill",  
	color: color_UC[2][2],
	outline: {
		color: color_UC[2][1],
		width: "2px",
	}
};

var UCI2_symbol = {
	type: "simple-fill",  
	color: color_UC[3][2],
	outline: {
		color: color_UC[3][1],
		width: "2px",
	}
};

var UCLA2_symbol = {
	type: "simple-fill",  
	color: color_UC[4][2],
	outline: {
		color: color_UC[4][1],
		width: "2px",
	}
};

var UCM2_symbol = {
	type: "simple-fill",  
	color: color_UC[5][2],
	outline: {
		color: color_UC[5][1],
		width: "2px",
	}
};

var UCR2_symbol = {
	type: "simple-fill",  
	color: color_UC[6][2],
	outline: {
		color: color_UC[6][1],
		width: "2px",
	}
};

var UCSD2_symbol = {
	type: "simple-fill",  
	color: color_UC[7][2],
	outline: {
		color: color_UC[7][1],
		width: "2px",
	}
};

var UCSF2_symbol = {
	type: "simple-fill",  
	color: color_UC[8][2],
	outline: {
		color: color_UC[8][1],
		width: "2px",
	}
};

var UCSB2_symbol = {
	type: "simple-fill",  
	color: color_UC[9][2],
	outline: {
		color: color_UC[9][1],
		width: "2px",
	}
};

var UCSC2_symbol = {
	type: "simple-fill",  
	color: color_UC[10][2],
	outline: {
		color: color_UC[10][1],
		width: "2px",
	}
};

var UC_renderer2 = {
	type: "unique-value",
	field: "Campus",
	//defaultSymbol: sym_def, 
	uniqueValueInfos: [
		{
			value: "UC ANR",
			symbol: UCANR2_symbol,
			label: "UC ANR - REC",
		},
		{
			value: "UC Berkeley",
			symbol: UCB2_symbol,
			label: "UC Berkeley"
		},
		{
			value: "UC Davis",
			symbol: UCD2_symbol,
			label: "UC Davis",
		},
		{
			value: "UC Irvine",
			symbol: UCI2_symbol,
			label: "UC Irvine",
		},
		{
			value: "UC Los Angeles",
			symbol: UCLA2_symbol,
			label: "UC Los Angeles",
		},
		{
			value: "UC Merced",
			symbol: UCM2_symbol,
			label: "UC Merced",
		},
		{
			value: "UC Riverside",
			symbol: UCR2_symbol,
			label: "UC Riverside",
		},
		{
			value: "UC San Diego",
			symbol: UCSD2_symbol,
			label: "UC San Diego",
		},
		{
			value: "UC San Francisco",
			symbol: UCSF2_symbol,
			label: "UC San Francisco",
		},
		{
			value: "UC Santa Barbara",
			symbol: UCSB2_symbol,
			label: "UC Santa Barbara",
		},
		{
			value: "UC Santa Cruz",
			symbol: UCSC2_symbol,
			label: "UC Santa Cruz",
		},
	],

};