import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

import TextIcon from './components/UI/Icons/TextIcon';
import { __ } from '@wordpress/i18n';

import { v1 } from './v1';

import './style.scss';

registerBlockType('block-course/text-block', {
	icon: {
		src: TextIcon,
		background: '#f03',
		foreground: '#fff',
	},
	edit: Edit,
	save,
	deprecated: [v1],
	variations: [
		{
			name: 'block-course/gradient-text-block',
			title: __('Gradient Text Block'),
			icon: 'wordpress',
			attributes: {
				gradient: 'red-to-blue',
			},
		},
	],
});
