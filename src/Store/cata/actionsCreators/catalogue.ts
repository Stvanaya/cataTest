import { cataApi } from 'request/cataApi';

import Product from 'types/product';

import { setLoading, setError } from 'Store/cata/actionsCreators/global';
import {
  SAVE_PRODUCTS,
  SAVE_VENDORS,
  SET_LOADING_CATALOGUE,
  SET_ERROR_CATALOGUE,
  SET_PRODUCTS_FILTER,
} from 'Store/cata/actions';
import mergedProductsPrices from 'utils/mergedProductPrices';
import filterProdByCategory from 'utils/filterProdByCategory';

export const saveProducts = (products: Product[]) => {
  return {
    type: SAVE_PRODUCTS,
    value: {
      products,
    },
  };
};

export const saveVendors = (vendors: any) => {
  return {
    type: SAVE_VENDORS,
    value: {
      vendors,
    },
  };
};

export const setProductsFilter = (productsFilter: Product[]) => {
  return {
    type: SET_PRODUCTS_FILTER,
    value: {
      productsFilter,
    },
  };
};

export const asyncSetFilterProducts = (categoryId: number) => {
  return (dispatch: any, getState: any) => {
    const { catalogueState } = getState();
    filterProdByCategory(catalogueState.products, categoryId)
      .then(productsFilter => {
        console.log(productsFilter, 'Producttos filtrados');
        dispatch(setProductsFilter(productsFilter));
        dispatch(setLoading(SET_LOADING_CATALOGUE, false));
      })
      .catch(() => {
        dispatch(setError(SET_ERROR_CATALOGUE, true));
        dispatch(setLoading(SET_LOADING_CATALOGUE, false));
      });
  };
};

export const asyncFetchPrices = (products: Product[], vendorUuid: string) => {
  return (dispatch: any, getState: any) => {
    const { categoriesState } = getState();
    cataApi
      .get(`vendor/${vendorUuid}/prices`)
      .then(({ data: prices }) => {
        return mergedProductsPrices(products, prices);
      })
      .then(mergedProducts => {
        dispatch(saveProducts(mergedProducts));
        dispatch(asyncSetFilterProducts(categoriesState.categories[0].id));
      })
      .catch(() => {
        dispatch(setError(SET_ERROR_CATALOGUE, true));
        dispatch(setLoading(SET_LOADING_CATALOGUE, false));
      });
  };
};

export const asyncFetchProductsWithPrices = (vendorUuid: string) => {
  return async (dispatch: any) => {
    cataApi
      .get('product')
      .then(({ data: products }) => {
        dispatch(asyncFetchPrices(products, vendorUuid));
      })
      .catch(() => {
        dispatch(setError(SET_ERROR_CATALOGUE, true));
        dispatch(setLoading(SET_LOADING_CATALOGUE, false));
      });
  };
};

export const asyncFetchVendorsProducts = () => {
  return (dispatch: any) => {
    cataApi
      .get('vendor')
      .then(({ data }) => {
        dispatch(saveVendors(data));
        dispatch(asyncFetchProductsWithPrices(data[0].uuid));
      })
      .catch(() => {
        dispatch(setError(SET_ERROR_CATALOGUE, true));
        dispatch(setLoading(SET_LOADING_CATALOGUE, false));
      });
  };
};
