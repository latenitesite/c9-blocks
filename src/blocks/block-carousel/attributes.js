const attributes = {
	instanceId: {
		type: "number"
	},
	slides: {
		type: "number",
		default: 3
	},
	showControls: {
		type: "boolean",
		default: true
	},
	showIndicators: {
		type: "boolean",
		default: true
	},
	autoSlide: {
		type: "boolean",
		default: true
	},
	wrapAround: {
		type: "boolean",
		default: true
	},
	slideTime: {
		type: "number",
		default: 5000
	}
};

export default attributes;