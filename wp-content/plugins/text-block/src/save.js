import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save({ attributes }) {
	// prettier-ignore
	const { text, alignment } = attributes;

	const classes = classnames(`text-box-align-${alignment}`);

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: classes,
			})}
			tagName="h4"
			value={text}
		/>
	);
}
