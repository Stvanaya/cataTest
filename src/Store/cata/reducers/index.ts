import { combineReducers } from 'redux';

/* REDUCERS */
import categoryReducer from './category';

const rootReducer = combineReducers({
  category: categoryReducer,
});

export default rootReducer;
