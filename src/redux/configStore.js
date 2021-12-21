import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rocketReducer from './reducers/rocketReducer';
import reserveReducer from './reducers/reserveReducer';

const reducer = combineReducers({ rocketReducer, reserveReducer });

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

export default store;
