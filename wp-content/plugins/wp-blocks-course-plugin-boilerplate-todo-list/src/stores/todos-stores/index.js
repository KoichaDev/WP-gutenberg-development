import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as actions from './actions';
import * as selectors from './selectors';

const store = createReduxStore('blocks-course/todos', {
    reducer,
    actions,
    selectors,
});

register(store);
