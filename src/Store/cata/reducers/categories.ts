import CategoryType from 'types/categories';

import {
  SAVE_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SET_LOADING_CATEGORY,
  SET_ERROR_CATEGORY,
} from 'Store/cata/actions';

interface InitialState {
  isError: boolean;
  isLoading: boolean;
  categories: CategoryType[];
  selectedCategory: CategoryType | undefined;
}

const initialState: InitialState = {
  isError: false,
  isLoading: true,
  categories: [],
  selectedCategory: undefined,
};

type Action = {
  type: string;
  value: { categories: []; category: {}; isLoading: boolean; isError: boolean };
};

const categoriesReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_CATEGORIES:
      return { ...state, categories: action.value.categories };
    case SET_SELECTED_CATEGORY:
      return { ...state, selectedCategory: action.value.category };
    case SET_LOADING_CATEGORY:
      return { ...state, isLoading: action.value.isLoading };
    case SET_ERROR_CATEGORY:
      return { ...state, isError: action.value.isError };
    default:
      return state;
  }
};

export default categoriesReducer;
