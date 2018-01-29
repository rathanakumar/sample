import { combineReducers } from 'redux';
import takeTour from './TakeTour';

/*
 * It combines the different reducer functions into one.
 */
export default combineReducers({
  takeTour,
});
