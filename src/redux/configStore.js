import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rocketReducer from './reducers/RocketReducer';

const reducer = combineReducers({ rocketReducer });

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger));

export default store;
