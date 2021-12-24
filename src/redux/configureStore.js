import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import missionReducer from './missions/missions';
import add_remove_reducer from './missions/storeMissions';

const reducer = combineReducers({
  missionReducer,
  add_remove_reducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
