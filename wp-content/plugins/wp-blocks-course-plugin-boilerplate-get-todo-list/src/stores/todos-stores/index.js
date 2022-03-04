import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import controls from './controls';

const store = createReduxStore('blocks-course/todos', {
    reducer,
    selectors, // selectors is only going to return something from a local state, and not any API (side-effects )
    actions,
    resolvers,
    controls, // control functions that will run whenever a control-action is called
});

register(store);
