import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import reducer from './reducers';
import {init} from './actions';

import App from './components/App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

function run() {
   let state = store.getState();
   
   ReactDOM.render(
               <Provider store={store}>
                  <App />
               </Provider>, document.getElementById('app'));
}
//run();
store.subscribe(run);
store.dispatch(init());