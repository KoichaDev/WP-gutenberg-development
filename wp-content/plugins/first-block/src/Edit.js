import { useBlockProps } from '@wordpress/block-editor';

const Edit = () => {
	// We want to use the blockProps to get all of the props from WP. In this case, we want to use it with the className prop.
	const blockProps = useBlockProps();
	return <p {...blockProps}>hellooasdasds JSX is edited</p>;
};

export default Edit;
