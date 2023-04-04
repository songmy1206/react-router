import { combineReducers } from 'redux';
import todo from './modules/todo';
import weightReducer from './modules/weight';

//store라는 코드를 관리해주는 코드

export default combineReducers({
  todo,
  weightReducer,
});
