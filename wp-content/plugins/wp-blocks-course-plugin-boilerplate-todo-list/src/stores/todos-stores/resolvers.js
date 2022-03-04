// Resolvers is handling the side-effects

import { dispatch } from '@wordpress/data'

import { fetchTodos } from './controls';
import { populateTodos } from './actions';

// The generator function are a function that can stop their execution at a certain pointa and come back and continue later
// More info about how generator function works: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* getTodos() {
    // we have to use 'yield' keyword  to dispatch it, because w are using generator function

    try {
        const todos = yield fetchTodos();
        return populateTodos(todos);

    } catch (err) {
        return dispatch('core/notices').createErrorNotice(err.message || 'Something went wrong');
    }

}
