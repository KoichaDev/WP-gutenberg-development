import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps, RichText } from '@wordpress/block-editor';

import classnames from 'classnames';
import blockData from '../block.json';

export const v1 = {
    supports: {
        html: false,
        color: {
            background: true,
            text: true,
            gradients: true,
        },
        spacing: {
            padding: true,
        },
    },
    attributes: {
        ...blockData.attributes,
        text: {
            type: 'string',
            source: 'html',
            selector: 'h4',
        },
    },
    save: ({ attributes }) => {
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
    },
};
