import { bindActionCreators } from 'redux';
import { ADD_TODO, POPULATE_TODOS } from './types';

const DEFAULT_STATE = {
    todos: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.todo] };
        case POPULATE_TODOS:
            return { ...state, todos: action.todos };

        default:
            return state;
    }
};

export default reducer;
