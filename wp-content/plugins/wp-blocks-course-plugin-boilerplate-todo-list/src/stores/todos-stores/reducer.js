import ACTIONS from './types'

const DEFAULT_STATE = {
    todos: [],
};

const reducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return { ...state, todos: [...state.todos, action.todo] };

        default:
            return state;
    }
};

export default reducer;
