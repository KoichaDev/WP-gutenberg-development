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
	const { text, alignment } = attributes;

	const alignmentToolbarHandler = (alignmentValue) =>
		setAttributes({ alignment: alignmentValue });

	const richTextHandler = (textValue) => setAttributes({ text: textValue });

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
					<TextControl
						label={__('Input Label', 'text-block')}
						value={text}
						onChange={richTextHandler}
						help={'Help'}
					/>

					<TextareaControl
						label={__('Text Area Label', 'text-block')}
						value={text}
						onChange={richTextHandler}
						help={'Help'}
					/>

					<ToggleControl
						label="Toggle Label"
						checked={true}
						onChange={(value) => console.log(value)}
					/>

					<AnglePickerControl />

					<ColorPicker
						color={'F03'}
						onChangeComplete={(value) => console.log(value)}
					/>

					<ColorPalette
						colors={[
							{ name: 'red', color: '#F00' },
							{ name: 'black', color: '#000' },
						]}

						onChange={value => console.log(value)}
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
				})}
				placeholder={__('Type something...', 'text-block')}
				tagName="h4"
				// allowedFormats is allowing what format to use
				allowedFormats={[]}
				value={text}
				onChange={richTextHandler}
				style={{ textAlign: alignment }}
			/>
		</>
	);
}
