import { createStore, compose } from 'redux';

/* REDUCER */
import rootReducer from 'Store/cata/reducers/index';

// eslint-disable-next-line dot-notation
const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, composeEnhancers());

export default store;
