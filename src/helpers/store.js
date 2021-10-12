import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers';

const loggerMiddleware = createLogger();

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )),
);

export default Store;
