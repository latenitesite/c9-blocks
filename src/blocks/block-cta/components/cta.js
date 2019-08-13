/**
 * CTA Wrapper
 */

// Setup the block
const { Component } = wp.element;

const { applyFilters } = wp.hooks;

// Import block dependencies and components
import classnames from "classnames";

/**
 * Create a CallToAction wrapper Component
 */
export default class CallToAction extends Component {
	constructor() {
		super(...arguments);
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonAlignment,
				ctaTextFontSize,
				ctaWidth,
				ctaBackgroundColor,
			},
			className = ""
		} = this.props;

		const styles = {
			backgroundColor: ctaBackgroundColor ? ctaBackgroundColor : undefined,
			textAlign: buttonAlignment ? buttonAlignment : undefined
		};

		return (
			<div
				style={styles}
				className={classnames(
					[
						applyFilters("c9-blocks.blocks.className", className),
						"c9-block-cta",
						"container"
					],
					{
						["ab-font-size-" + ctaTextFontSize]: ctaTextFontSize,
						["align" + ctaWidth]: ctaWidth
					}
				)}
			>
				<div className="row">{this.props.children}</div>
			</div>
		);
	}
}
