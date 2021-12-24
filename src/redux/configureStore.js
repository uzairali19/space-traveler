import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';
import addRemover from './missions/storeMissions';

const reducer = combineReducers({
  missionReducer,
  addRemover,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
