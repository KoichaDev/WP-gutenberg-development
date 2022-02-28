import { __ } from '@wordpress/i18n';

import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';

import { __experimentalBoxControl as BoxControl } from '@wordpress/components';

// constants for the block
import './editor.scss';

const { __Visualizer: BoxControlVisualizer } = BoxControl;

function Edit(props) {
	const { attributes, setAttributes, style } = props;
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

			<div
				{...useBlockProps({
					className: `text-box-align-${alignment}`,
				})}
			>
				<RichText
					{...useBlockProps({
						className: `text-box-align-${alignment}`,
					})}
					className="text-box-title"
					placeholder={__('Type something...', 'text-block')}
					tagName="h4"
					// allowedFormats is allowing what format to use
					allowedFormats={[]}
					value={text}
					onChange={richTextHandler}
				/>
				<BoxControlVisualizer
					values={style && style.spacing && style.spacing.padding}
					showValues={
						style && style.visualizers && style.visualizers.padding
					}
				/>
			</div>
		</>
	);
}

export default Edit;
