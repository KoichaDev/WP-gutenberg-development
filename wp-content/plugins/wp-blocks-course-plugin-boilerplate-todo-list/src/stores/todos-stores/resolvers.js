// Resolvers is handling the side-effects
import { fetchTodos } from './controls';

// The generator function are a function that can stop their execution at a certain pointa and come back and continue later
// More info about how generator function works: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
export function* getTodos() {
    // // we have to use 'yield' keyword  to dispatch it, because w are using generator function
    const todos = yield fetchTodos();
    console.log(todos);
}
