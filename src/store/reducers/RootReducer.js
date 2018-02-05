import { combineReducers } from 'redux';
import questions from './Questions';

/*
 * It combines the different reducer functions into one.
 */
export default combineReducers({
  questions,
});
