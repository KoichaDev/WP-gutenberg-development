import { __ } from '@wordpress/i18n';
import { useSelect, useDispatch } from '@wordpress/data';
import { CheckboxControl, TextControl, Button } from '@wordpress/components';
import { useBlockProps } from '@wordpress/block-editor';
import { useState } from '@wordpress/element';

import './editor.scss';

const Edit = () => {
    const [newTodos, setNewTodos] = useState('');

    const actions = useDispatch('blocks-course/todos');

    const todos = useSelect((select) => {
        const todosStore = select('blocks-course/todos');

        return todosStore && todosStore.getTodos();
    }, []);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!actions) return;
        actions.addTodo({ id: Math.random(), 'title': newTodos, completed: false });
    };

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

            <form onSubmit={onSubmitHandler}>
                <TextControl
                    value={newTodos}
                    onChange={(value) => setNewTodos(value)}
                />
                <Button type="submit" isPrimary>
                    {__('Add Todo', 'todo-list')}
                </Button>
            </form>
        </div>
    );
};

export default Edit;
