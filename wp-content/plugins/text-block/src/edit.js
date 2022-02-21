import { __ } from '@wordpress/i18n';

// prettier-ignore
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
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
			<BlockControls controls={buttonControl} />
			<RichText
				{...useBlockProps()}
				placeholder={__('Type something...', 'teext-block')}
				tagName="h4"
				// allowedFormats is allowing what format to use
				allowedFormats={[]}
				value={attributes.text}
				onChange={(textValue) => setAttributes({ text: textValue })}
			/>
		</>
	);
}
