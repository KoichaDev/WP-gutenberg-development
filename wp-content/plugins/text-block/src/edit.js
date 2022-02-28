import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
	withColors,
} from '@wordpress/block-editor';

// constants for the block
import './editor.scss';

function Edit(props) {
	const { attributes, setAttributes, backgroundColor, setBackgroundColor, textColor, setTextColor } = props;
	const { text, alignment } = attributes;

	const alignmentToolbarHandler = (alignmentValue) =>
		setAttributes({ alignment: alignmentValue });

	const richTextHandler = (textValue) => setAttributes({ text: textValue });

	const colorSettings = [
		{
			value: backgroundColor.color,
			onChange: setBackgroundColor,
			label: __('background Color', 'text-box'),
		},
		{
			value: textColor.color,
			onChange: setTextColor,
			label: __('Text Color', 'text-box'),
		},
	];

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={__('Color settings', 'text-box')}
					icon="admin-appearance"
					disableCustomColors={false}
					colorSettings={colorSettings}
					initialOpen
				>
					<ContrastChecker
						textColor={textColor.color}
						backgroundColor={backgroundColor.color}
					/>
				</PanelColorSettings>
			</InspectorControls>

			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={alignmentToolbarHandler}
				/>
			</BlockControls>

			<RichText
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
					style: {
						background: backgroundColor.color,
						color: textColor.color,
					},
				})}
				placeholder={__('Type something...', 'text-block')}
				tagName="h4"
				// allowedFormats is allowing what format to use
				allowedFormats={[]}
				value={text}
				onChange={richTextHandler}
			/>
		</>
	);
}

export default withColors({
	backgroundColor: 'backgroundColor',
	textColor: 'color',
})(Edit);
