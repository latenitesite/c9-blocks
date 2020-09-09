const { __ } = wp.i18n;
const { Button, ButtonGroup, BaseControl } = wp.components;

const SIZE_PRESETS = ["0%", "25%", "50%", "75%", "100%"];

const KeyframeStepper = props => {
	const { label, currentValue, resetValue } = props;

	return (
		<BaseControl label={label}>
			<div className="block-editor-image-size-control__row">
				<ButtonGroup aria-label={label}>
					{SIZE_PRESETS.map(scale => {
						const isCurrent = scale === currentValue;
						return (
							<Button
								key={`${label}-${scale}`}
								isPrimary={isCurrent}
								isPressed={isCurrent}
								onClick={() => props.handleClick(scale)}
							>
								{scale}
							</Button>
						);
					})}
				</ButtonGroup>
				<Button
					key={`${label}-reset`}
					isSmall
					onClick={() => props.handleClick(resetValue)}
				>
					{__("Reset")}
				</Button>
			</div>
		</BaseControl>
	);
};

export default KeyframeStepper;
