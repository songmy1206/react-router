import { combineReducers } from 'redux';
import todo from './modules/todo';
import weight from './modules/weight';
import mbti from './modules/mbti';

//store라는 코드를 관리해주는 코드

export default combineReducers({
  todo,
  weight,
  mbti,
});
