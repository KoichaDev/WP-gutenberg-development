import { __ } from '@wordpress/i18n';

// prettier-ignore
import { useBlockProps, RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { text, alignment } = attributes;

	const alignmentToolbarHandler = (alignmentValue) => setAttributes({ alignment: alignmentValue });

	const richTextHandler = (textValue) => setAttributes({ text: textValue })



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
			<BlockControls>
				<AlignmentToolbar value={alignment} onChange={alignmentToolbarHandler} />
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
