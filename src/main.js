import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {Provider, connect} from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'


import reducer from './reducers';
import {init} from './actions';

import App from './components/App';

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

function run() {
   ReactDOM.render(
               <Provider store={store}>
                   <Router history={browserHistory}>
                    {/*<Route path="/" component={App} />*/}
                    <Route path="/apl-configurator" component={App} />
                  </Router>
               </Provider>, document.getElementById('app'));
}
//run();
store.subscribe(run);
store.dispatch(init());