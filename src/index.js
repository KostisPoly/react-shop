import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
// import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import reducers from './redux/reducers'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import thunk from 'redux-thunk'

const middlewares = [logger, thunk];
const store = createStore(reducers, {}, applyMiddleware(...middlewares));

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);