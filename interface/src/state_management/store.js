import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import immutable from 'redux-immutable-state-invariant';
import reducer from 'state_management/reducer';

const isDev = !process.env.NODE_ENV
  || process.env.NODE_ENV === 'development'
  || document.location.search.includes('debug');

const axiosClient = axios.create({
  responseType: 'json',
});

const axiosMiddlewareConfig = {};

export const middlewares = {
  axios: axiosMiddleware(axiosClient, axiosMiddlewareConfig),
  thunk,
};

if (isDev) {
  middlewares.logger = createLogger();
  middlewares.immutable = immutable();
}

export default () => {
  const initialState = {};
  const store = createStore(reducer,
    initialState,
    applyMiddleware(...Object.values(middlewares)));
  if (isDev) {
    window.store = store;
  }

  return store;
};
