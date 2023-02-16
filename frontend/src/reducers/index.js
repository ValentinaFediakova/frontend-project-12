
import { combineReducers } from 'redux';
import channels from './channels'
import loading from './loading'
import messages from './messages'
import currentChannelId from  './currentChannel'

export const rootReducer = combineReducers({
  channels,
  loading,
  messages,
  currentChannelId,
});