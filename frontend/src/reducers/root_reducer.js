import { combineReducers } from 'redux';
import session from './session_reducer';

const RootReducer = combineReducers({
  errors,
  session
});

export default RootReducer;
