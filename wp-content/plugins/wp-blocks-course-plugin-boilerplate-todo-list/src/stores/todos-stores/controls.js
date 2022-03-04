import { FETCH_TODOS } from './types';

// controllers is used to send API-request to our resolvers. Controllers are another type of actions that is called "control-actions"
export const fetchTodos = () => {
    return {
        type: FETCH_TODOS,
    };
};

export default {
    FETCH_TODOS() {
        return window
            .fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }

                throw new Error('Could not fetch todos');
            });
    },
};
