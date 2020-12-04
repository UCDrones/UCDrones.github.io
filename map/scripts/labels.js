var label_white_text = {
    type: "text",
    color: "#FFFFFF",
    haloColor: "#000000",
    haloSize: "4px",
    font: {
		size: "18px",
		family: "Noto Sans",
		style: "italic",
		weight: "normal"
    }
}

var label_UASfac_text = {
	type: "text",
    color: "#FF0000",
    haloColor: "#FFFFFF",
    haloSize: "1px",
    font: {
      size: "15px",
      family: "Noto Sans",
      weight: "normal"
    }
}

var label_NFS_text = {
	type: "text",
    color: "#FFFFFF",
    haloColor: "#000000",
    haloSize: "1px",
    font: {
		size: "14px",
        family: "Noto Sans",
        style: "normal",
        weight: "normal",
    },
}

var DistrictLabels = {
	symbol: label_white_text,
	labelPlacement: "always-horizontal",
	labelExpressionInfo: {expression: " 'District ' + $feature.DISTRICT" }
};

var UASFacilitiesLabels = {
	symbol: label_UASfac_text,
	labelPlacement: "always-horizontal",
	labelExpressionInfo: {expression: "$feature.CEILING"},
	minScale: max_Zoom_Fac,
	maxScale: 0,
};



var NFS_Labels = {
	symbol: label_NFS_text,
	labelPlacement: "always-horizontal",
	labelExpressionInfo: {expression: "$feature.FORESTNAME"},
};