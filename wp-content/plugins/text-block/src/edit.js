import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

// constants for the block
import './editor.scss';

function Edit(props) {
	const { attributes, setAttributes } = props;
	const { text, alignment } = attributes;

	const onChangeAlignmentToolbarHandler = (alignmentValue) =>
		setAttributes({ alignment: alignmentValue });

	const richTextHandler = (textValue) => setAttributes({ text: textValue });

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={alignment}
					onChange={onChangeAlignmentToolbarHandler}
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
			/>
		</>
	);
}

export default Edit;
