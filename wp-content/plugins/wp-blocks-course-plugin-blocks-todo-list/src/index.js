import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';
import './style.scss';

registerBlockType('blocks-course/todo-list', {
    edit: Edit,
    save,
});
