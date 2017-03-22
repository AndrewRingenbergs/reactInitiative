import { combineReducers } from 'redux';
import actorsReducer from './actors';

const rootReducer = combineReducers({
  actorList: actorsReducer
});

export default rootReducer;