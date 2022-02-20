import { registerBlockType } from '@wordpress/blocks';
import { useBlockProps } from '@wordpress/block-editor';

registerBlockType('block-course/firstblock', {
	edit: () => {
        
        // We want to use the blockProps to get all of the props from WP. In this case, we want to use it with the className prop.
        const blockProps = useBlockProps();
        return <p {...blockProps}>hellooasdasds JSX is edited</p>;
	},
	save: () => {
        const blockProps =useBlockProps.save()
        return <p {...blockProps}>helloo JSX is saved</p>;
	},
});
