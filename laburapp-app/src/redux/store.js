import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunk, logger]

export default createStore(
  reducers,
	{}, // default state
  compose(
    applyMiddleware(...middlewares),
  )
);