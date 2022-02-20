import { registerBlockType } from '@wordpress/blocks';
import Save from './Save';
import Edit from './edit';

import './style.scss';

registerBlockType('block-course/firstblock', {
	edit: Edit,
	save: Save,
});
