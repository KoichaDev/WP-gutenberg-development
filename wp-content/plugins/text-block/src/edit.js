import { __ } from '@wordpress/i18n';

// prettier-ignore
import { useBlockProps, RichText, BlockControls } from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
	ToolbarDropdownMenu,
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const text = attributes.text;

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
			{text && (
				<>
					<BlockControls group="inline">
						<p>Inline Controls</p>
					</BlockControls>
					<BlockControls group="block">
						<p>Block control text</p>
					</BlockControls>
					<BlockControls group="other" controls={buttonControl}>
						<ToolbarGroup>
							<ToolbarButton
								title="Align Left"
								icon="editor-alignleft"
								onClick={() => console.log('Align left')}
							/>
							<ToolbarButton
								title="Align Center"
								icon="editor-aligncenter"
								onClick={() => console.log('Align Center')}
							/>
							<ToolbarButton
								title="Align Right"
								icon="editor-alignright"
								onClick={() => console.log('Align right')}
							/>
							<ToolbarDropdownMenu
								icon="arrow-down-alt2"
								label={__(
									'More Alignment Options',
									'block-text'
								)}
								controls={[
									{
										title: __('Wide', 'block-text'),
										icon: 'align-wide',
									},
									{
										title: __('Full', 'block-text'),
										icon: 'align-full-width',
									},
								]}
							/>
						</ToolbarGroup>
					</BlockControls>
				</>
			)}

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
