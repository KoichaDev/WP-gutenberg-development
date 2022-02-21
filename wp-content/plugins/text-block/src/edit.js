import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {

	console.log(attributes);
	return (
		<RichText
			{...useBlockProps()}
			placeholder={__('Type something...', 'teext-block')}
			tagName="h4"
			// allowedFormats is allowing what format to use
			allowedFormats={['core/bold']}
			value={attributes.text}
			onChange={(textValue) => setAttributes({ text: textValue })}
		/>
	);
}
