
import { combineReducers } from 'redux';
import channels from './channels'
import loading from './loading'

export const rootReducer = combineReducers({
  channels,
  loading,
  // message
});