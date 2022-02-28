import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, getColorClassName } from '@wordpress/block-editor';
import classnames from 'classnames'


export default function save({ attributes }) {
	// prettier-ignore
	const { text, alignment, backgroundColor, textColor, customBackgroundColor, customTextColor } = attributes;

	// first parameter is the CSS property, second is the value
	const backgroundClassName = getColorClassName("background-color", backgroundColor);

	const textClassName = getColorClassName("color", textColor);

	const classes = classnames(`text-box-align-${alignment}`, {
		[textClassName]: textClassName,
		[backgroundClassName]: backgroundClassName,
	})

	return (
		<RichText.Content
			{...useBlockProps.save({
				className: classes,
				style: {
					backgroundColor: !backgroundClassName ? customBackgroundColor : undefined,
					color: !textClassName ? customTextColor : undefined,
				},
			})}
			tagName="h4"
			value={text}
		/>
	);
}
