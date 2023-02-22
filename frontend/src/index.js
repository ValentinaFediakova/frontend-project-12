import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import socketMiddleware from './asyncActions/websockets'

import { rootReducer } from './reducers/index'
import App from './App'

const middlewares = [thunk, socketMiddleware()]

const initialState = {
  channels: {
    items: [],
  },
  messages: {
    items: [],
  },
  currentChannelId: 1,
  errors: '',
  loading: {},
  user: {
    username: null,
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middlewares)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  {/* <React.StrictMode> */}
      <App />
  {/* </React.StrictMode> */}
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

