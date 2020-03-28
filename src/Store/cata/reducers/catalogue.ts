import ProductType from 'types/product';

import {
  SAVE_PRODUCTS,
  SAVE_VENDORS,
  SET_LOADING_CATALOGUE,
  SET_ERROR_CATALOGUE,
  SET_PRODUCTS_FILTER,
} from 'Store/cata/actions';

interface InitialState {
  isError: boolean;
  isLoading: boolean;
  products: ProductType[];
  productsFilter: ProductType[];
  vendors: any;
}

const initialState: InitialState = {
  isError: false,
  isLoading: true,
  products: [],
  productsFilter: [],
  vendors: [],
};

type Action = {
  type: string;
  value: InitialState;
};

const catalogueReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case SAVE_PRODUCTS:
      return { ...state, products: action.value.products };
    case SAVE_VENDORS:
      return { ...state, vendors: action.value.vendors };
    case SET_PRODUCTS_FILTER:
      return { ...state, productsFilter: action.value.productsFilter };
    case SET_LOADING_CATALOGUE:
      return { ...state, isLoading: action.value.isLoading };
    case SET_ERROR_CATALOGUE:
      return { ...state, isError: action.value.isError };
    default:
      return state;
  }
};

export default catalogueReducer;
