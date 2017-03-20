import { combineReducers } from 'redux';
import actorsReducer from './actors';

const rootReducer = combineReducers({
  myData: actorsReducer
});

export default rootReducer;