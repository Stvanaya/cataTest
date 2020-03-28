import { cataApi } from 'request/cataApi';

import CategoryType from 'types/categories';

import { setLoading, setError } from 'Store/cata/actionsCreators/global';
import {
  SAVE_CATEGORIES,
  SET_SELECTED_CATEGORY,
  SET_LOADING_CATEGORY,
  SET_ERROR_CATEGORY,
} from 'Store/cata/actions';

export const saveCategories = (categories: CategoryType[]) => {
  return {
    type: SAVE_CATEGORIES,
    value: {
      categories,
    },
  };
};

export const setSelectedCategory = (category: CategoryType) => {
  return {
    type: SET_SELECTED_CATEGORY,
    value: {
      category,
    },
  };
};

export const asyncFetchCategories = () => {
  return async (dispatch: any) => {
    try {
      const { data } = await cataApi.get('category');
      const removedParent = data.filter(
        (category: any) => category.fk_parent_category !== null,
      );
      dispatch(saveCategories(removedParent));
      dispatch(setLoading(SET_LOADING_CATEGORY, false));
    } catch (error) {
      dispatch(setError(SET_ERROR_CATEGORY, true));
      dispatch(setLoading(SET_LOADING_CATEGORY, false));
    }
  };
};
