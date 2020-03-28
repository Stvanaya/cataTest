import { combineReducers } from 'redux';

/* REDUCERS */
import categoriesReducer from './categories';
import catalogueReducer from './catalogue';

const rootReducer = combineReducers({
  categoriesState: categoriesReducer,
  catalogueState: catalogueReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
