import { __ } from '@wordpress/i18n';

// prettier-ignore
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	TextareaControl,
	ToggleControl,
	AnglePickerControl,
	ColorPicker,
	ColorPalette,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment, backgroundColor, textColor } = attributes;

	const alignmentToolbarHandler = (alignmentValue) =>
		setAttributes({ alignment: alignmentValue });

	const richTextHandler = (textValue) => setAttributes({ text: textValue });

	// prettier-ignore
	const backgroundColorHandler = (backgroundColor) => setAttributes({ backgroundColor });

	const textColorHandler = (textColor) => setAttributes({ textColor });

	const buttonControl = [
		{
			title: 'Button 1',
			icon: 'admin-generic',
			isActive: true,
			onClick: () => console.log('cliiicke'),
		},
		{
			title: 'Button 2',
			icon: 'admin-collapse',
			onClick: () => console.log('button 2'),
		},
	];

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__('Color settings', 'text-box')}
					icon="admin-appearance"
					initialOpen={true}
				>
					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						]}
						value={backgroundColor}
						onChange={backgroundColorHandler}
					/>
				</PanelBody>
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
						backgroundColor,
					}
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
