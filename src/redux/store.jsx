import { createStore } from 'redux';
import { activeState } from './reducers';

const defaultState = {
    activeState: 'napping'
    

}

export const store = createStore(
    activeState,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);