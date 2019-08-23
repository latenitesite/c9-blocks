// Import block dependencies and components
import classnames from "classnames";

import Inspector from "./components/inspector";
import CallToAction from "./components/cta";
import WidthToolbar from "./components/width-toolbar";

// Extend component
const { Component, Fragment } = wp.element;

// Register editor components
const {
	AlignmentToolbar,
	URLInput,
	BlockControls,
	RichText
} = wp.editor;

// Register components
const { IconButton, Dashicon, Button } = wp.components;

// Components
const { __ } = wp.i18n;

export default class Edit extends Component {
	constructor() {
		super(...arguments);

		this.state = {
			hideForm: false
		};
	}

	layoutClass(ctaWidth, textOrButton) {
		if ("two-thirds" == ctaWidth) {
			if ("text" == textOrButton) {
				return "col-md-8";
			}
			return "col-md-4";
		} else if ("three-quarters" == ctaWidth) {
			if ("text" == textOrButton) {
				return "col-md-9";
			}
			return "col-md-3";
		}
	}

	render() {
		// Setup the attributes
		const {
			attributes: {
				buttonText,
				buttonUrl,
				buttonAlignment,
				buttonBackgroundColor,
				buttonTextColor,
				buttonSize,
				buttonShape,
				ctaText,
				ctaWidth,
				ctaTextColor,
				ctaLayout,
				align,
				type
			},
			isSelectedBlockInRoot,
			setAttributes
		} = this.props;

		let currWidth;
		if (0 != align.length) {
			if ("container" == ctaWidth) {
				currWidth = "wide";
			} else if ("container-fluid" == ctaWidth) {
				currWidth = "full";
			} else {
				currWidth = "narrow";
			}
		}

		return (
			// Show the alignment toolbar on focus
			<Fragment>
				<BlockControls>
					<WidthToolbar
						value={currWidth}
						onChange={value => {
							if ("wide" == value) {
								setAttributes({ ctaWidth: "container", align: "wide" });
							} else if ("full" == value) {
								setAttributes({
									ctaWidth: "container-fluid",
									align: "full"
								});
							} else if ("narrow" == value) {
								setAttributes({
									ctaWidth: "container-narrow",
									align: "narrow"
								});
							} else {
								setAttributes({ ctaWidth: "container", align: "" });
							}
						}}
					/>
					<AlignmentToolbar
						value={buttonAlignment}
						onChange={value => {
							setAttributes({ buttonAlignment: value });
						}}
					/>
				</BlockControls>
				<Inspector {...{ setAttributes, ...this.props }} />
				<CallToAction {...this.props}>
					<div
						className={
							"c9-cta-content col-12 " + this.layoutClass(ctaLayout, "text")
						}
					>
						<RichText
							tagName="div"
							multiline="p"
							placeholder={__("Call To Action Text", "c9-blocks")}
							keepPlaceholderOnFocus
							value={ctaText}
							className={classnames(
								this.layoutClass(ctaLayout, "text"),
								"c9-cta-text",
								type
							)}
							style={{
								color: ctaTextColor
							}}
							onChange={value => setAttributes({ ctaText: value })}
						/>
					</div>
					<div
						className={
							"c9-cta-content col-12 " + this.layoutClass(ctaLayout, "button")
						}
					>
						<RichText
							tagName="a"
							placeholder={__("Button text...", "c9-blocks")}
							keepPlaceholderOnFocus={true}
							value={buttonText}
							formattingControls={[]}
							className={classnames(
								"wp-block-button__link",
								`c9-button-shape-${buttonShape}`,
								buttonSize
							)}
							style={{
								color: buttonTextColor,
								backgroundColor: buttonBackgroundColor
							}}
							onChange={value => setAttributes({ buttonText: value })}
						/>
						{isSelectedBlockInRoot && (
							<Button
								className="c9-cta-reveal-anchor"
								onClick={() =>
									this.setState({ hideForm: !this.state.hideForm })
								}
							>
								<Dashicon icon={"admin-links"} />
							</Button>
						)}
						{isSelectedBlockInRoot && !this.state.hideForm && (
							<form
								key="form-link"
								className={`blocks-button__inline-link c9-button-${buttonAlignment}`}
								onSubmit={event => event.preventDefault()}
								style={{
									textAlign: buttonAlignment
								}}
							>
								<URLInput
									className="button-url"
									value={buttonUrl}
									onChange={value => setAttributes({ buttonUrl: value })}
								/>
								<IconButton
									icon="editor-break"
									label={__("Apply", "c9-blocks")}
									type="submit"
								/>
							</form>
						)}
					</div>
				</CallToAction>
			</Fragment>
		);
	}
}
