
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import socketMiddleware from './middleware/websockets.middleware'

import { rootReducer } from './reducers/index'

const middlewares = [thunk, socketMiddleware()]

const initialState = {
  channels: {
    items: [],
    currentChannelId: 1,
  },
  messages: {
    items: [],
  },
  // currentChannelId: 1,
  errors: '',
  loading: {},
  user: {
    username: null,
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));
