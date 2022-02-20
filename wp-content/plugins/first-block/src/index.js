import { registerBlockType } from '@wordpress/blocks';

registerBlockType('block-course/firstblock', {
	edit: () => {
		return <p className='helloo'>hellooasdasds JSX is edited</p>;
	},
	save: () => {
		return <p className='helloo'>helloo JSX is saved</p>;
	},
});
