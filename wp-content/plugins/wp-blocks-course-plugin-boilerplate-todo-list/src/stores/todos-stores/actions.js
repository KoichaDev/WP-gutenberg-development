import ACTIONS from "./types";

export const addTodo = (todo) => {
    return {
        type: ACTIONS.ADD_TODO,
        todo,
    };
};
