const blockAttributes = {
	buttonText: {
		type: "string"
	},
	buttonUrl: {
		type: "string",
		source: "attribute",
		selector: "a",
		attribute: "href"
	},
	buttonAlignment: {
		type: "string",
		default: "center"
	},
	buttonBackgroundColor: {
		type: "string"
	},
	buttonTextColor: {
		type: "string",
		default: "#ffffff"
	},
	buttonSize: {
		type: "string",
		default: "c9-button-size-medium"
	},
	buttonShape: {
		type: "string",
		default: "c9-button-shape-rounded"
	},
	buttonTarget: {
		type: "boolean",
		default: false
	},
	ctaTitle: {
		type: "array",
		selector: ".c9-cta-title",
		source: "children"
	},
	titleFontSize: {
		type: "number",
		default: "32"
	},
	ctaLayout: {
		type: "string",
		default: "two-thirds"
	},
	ctaTextFontSize: {
		type: "number"
	},
	ctaText: {
		type: "array",
		selector: ".c9-cta-text",
		source: "children"
	},
	ctaWidth: {
		type: "string"
	},
	ctaBackgroundColor: {
		type: "string"
	},
	ctaTextColor: {
		type: "string"
	},
	imgURL: {
		type: "string",
		source: "attribute",
		attribute: "src",
		selector: "img"
	},
	imgID: {
		type: "number"
	},
	imgAlt: {
		type: "string",
		source: "attribute",
		attribute: "alt",
		selector: "img"
	},
	dimRatio: {
		type: "number",
		default: 50
	},

	// Deprecated
	ctaTitleFontSize: {
		type: "string",
		default: "32"
	}
};

export default blockAttributes;
