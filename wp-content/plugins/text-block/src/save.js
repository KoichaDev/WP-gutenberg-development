import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { text, alignment, backgroundColor } = attributes;

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: `text-box-align-${alignment}`,
				style: {
					backgroundColor,
				},
			})}
			tagName="h4"
			value={text}
		/>
	);
}
