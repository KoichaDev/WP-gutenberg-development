import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType('blocks-course/data-store-demo', {
	edit: Edit,
	save,
});
