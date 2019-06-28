import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import About from './components/About';
import Navbar from './components/Navbar';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleWare, logger)
);

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Navbar />

      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </Provider>
  </Router>,
  document.getElementById('root')
);

serviceWorker.unregister();
