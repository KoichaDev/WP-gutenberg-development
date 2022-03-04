import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { CheckboxControl } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

const Edit = () => {
    const todos = useSelect((select) => {
        const todosStore = select('blocks-course/todos');

        return todosStore && todosStore.getTodos();
    }, []);

    return (
        <div {...useBlockProps()}>
            {!todos && (
                <p>
                    {__(
                        'Please Make sure your plugin is activated!',
                        'todo-list'
                    )}
                </p>
            )}

            <ul>
                {todos.map((todo) => {
                    return (
                        <li
                            key={todo.id}
                            className={todo.completed && 'todo-completed'}
                        >
                            <CheckboxControl
                                label={todo.title}
                                checked={todo.completed}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Edit;
