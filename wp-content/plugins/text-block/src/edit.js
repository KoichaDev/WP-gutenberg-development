import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
	PanelColorSettings,
	ContrastChecker,
} from '@wordpress/block-editor';

// constants for the block
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;

	const alignmentToolbarHandler = (alignmentValue) =>
		setAttributes({ alignment: alignmentValue });

	const richTextHandler = (textValue) => setAttributes({ text: textValue });



	// prettier-ignore
	const backgroundColorHandler = (backgroundColor) => setAttributes({ backgroundColor });

	const textColorHandler = (textColor) => setAttributes({ textColor });

	const colorSettings = [
		{
			value: backgroundColor,
			onChange: backgroundColorHandler,
			label: __('background Color', 'text-box'),
		},
		{
			value: textColor,
			onChange: textColorHandler,
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
						textColor={textColor}
						backgroundColor={backgroundColor}
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
						background: backgroundColor,
						color: textColor,
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
