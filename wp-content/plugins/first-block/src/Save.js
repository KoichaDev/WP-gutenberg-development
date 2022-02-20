import { useBlockProps } from '@wordpress/block-editor';

const Save = () => {
	const blockProps = useBlockProps.save();
	return <p {...blockProps}>helloo JSX is saved</p>;
};

export default Save;
