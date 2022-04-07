import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import auth from './auth';
import confirmation from './confirmation';

const composeEnhancers = composeWithDevTools || compose;

export default createStore(
  combineReducers({ auth, confirmation }),
  composeEnhancers(applyMiddleware(thunk)),
);
