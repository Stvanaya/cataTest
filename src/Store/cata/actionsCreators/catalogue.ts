import { cataApi } from 'request/cataApi';

import ProductType, { ProductPrice } from 'types/product';

import { setLoading, setError } from 'Store/cata/actionsCreators/global';
import {
  SAVE_PRODUCTS,
  SAVE_VENDORS,
  SET_LOADING_CATALOGUE,
  SET_ERROR_CATALOGUE,
  SET_PRODUCTS_FILTER,
} from 'Store/cata/actions';

/* import { products } from 'mock'; */

export const saveProducts = (products: ProductType[]) => {
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

export const setProductsFilter = (productsFilter: ProductType[]) => {
  return {
    type: SET_PRODUCTS_FILTER,
    value: {
      productsFilter,
    },
  };
};

export const asyncSetFilterProducts = (categoryId: number) => {
  return async (dispatch: any, getState: any) => {
    try {
      const { catalogueState } = getState();
      const filter = await catalogueState.products.filter(
        (product: ProductType) => product.fk_category === categoryId,
      );
      dispatch(setProductsFilter(filter));
    } catch (error) {
      console.log(error);
    }
  };
};

export const asyncFetchProductsWithPrices = (vendorUuid: string) => {
  return async (dispatch: any) => {
    try {
      const { data: products } = await cataApi.get('product');
      const { data: prices } = await cataApi.get(`vendor/${vendorUuid}/prices`);
      const mergedProducts = await (products as Array<ProductType>).map(
        product =>
          Object.assign(
            product,
            (prices as Array<ProductPrice>).find(
              price => product.uuid === price.uuid,
            ),
          ),
      );

      dispatch(saveProducts(mergedProducts));
      dispatch(setLoading(SET_LOADING_CATALOGUE, false));
    } catch (error) {
      dispatch(setError(SET_ERROR_CATALOGUE, true));
      dispatch(setLoading(SET_LOADING_CATALOGUE, false));
    }
  };
};

export const asyncFetchVendorsProducts = () => {
  return async (dispatch: any) => {
    try {
      const { data } = await cataApi.get('vendor');
      dispatch(saveVendors(data));
      dispatch(asyncFetchProductsWithPrices(data[0].uuid));
    } catch (error) {
      console.log(error);
    }
  };
};
