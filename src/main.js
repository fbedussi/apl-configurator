import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from './reducers';
import { init } from './actions';

import App from './components/App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

function run() {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('app'));
}

store.subscribe(run);
store.dispatch(init());
