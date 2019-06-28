/**
 * CTA Wrapper
 */

// Setup the block
const { Component } = wp.element;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a C9CustomHeading wrapper Component
 */
export default class C9CustomHeading extends Component {
	constructor(props) {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			attributes: { heading, subheading, wrapper, level, textAlign }
		} = this.props;

		const className = classnames(["section-heading"]);

		return (
			// <div className={className ? className : undefined}>
			<div className={`h${level}`} style={{ textAlign }}>
				{this.props.children}
			</div>
		);
	}
}
