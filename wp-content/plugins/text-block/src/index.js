import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

import TextIcon from './components/UI/Icons/TextIcon';

import './style.scss';

registerBlockType('block-course/text-block', {
	icon: {
		src: TextIcon,
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save,
});
