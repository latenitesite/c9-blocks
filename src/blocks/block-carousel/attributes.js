/**
 * Block Attributes
 */
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
	},
	slideMaxHeight: {
		type: "number",
		default: -1
	},
	slideEqualHeight: {
		type: "boolean",
		default: false
	},
	slideSizes: {
		type: "array",
		default: []
	},
	verticalAlign: {
		type: "string"
	},
	align: {
		type: "string",
		default: ""
	},
	containerWidth: {
		type: "string",
		default: "container"
	}
};

export default attributes;
