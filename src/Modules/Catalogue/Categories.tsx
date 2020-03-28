import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';

import CategoryList from 'Components/CategoryList/CategoryList';
import Error from 'DS/Error/Error';
import { TitleH4 } from 'DS/Title/Title';

import CategoryType from 'types/categories';

import {
  asyncFetchCategories,
  setSelectedCategory,
} from 'Store/cata/actionsCreators/categories';

interface CategoriesProps {}

interface RootState {
  categoriesState: {
    isError: boolean;
    isLoading: boolean;
    categories: CategoryType[];
    selectedCategory: CategoryType;
  };
}

const Categories: React.FC<CategoriesProps> = () => {
  const dispatch = useDispatch();
  const { categories, selectedCategory, isLoading, isError } = useSelector(
    (state: RootState) => state.categoriesState,
  );

  useEffect(() => {
    dispatch(asyncFetchCategories());
  }, []);

  const handleClickCategory = (category: CategoryType): void => {
    dispatch(setSelectedCategory(category));
  };

  if (isLoading) {
    return <Skeleton width="100%" height="30px" count={5} />;
  }

  if (isError) {
    return (
      <Error>
        <TitleH4>Algo salió mal</TitleH4>
      </Error>
    );
  }

  return (
    <CategoryList
      fullWidth
      categories={categories}
      title="categorías"
      selected={selectedCategory}
      clickHandler={handleClickCategory}
    />
  );
};

export default Categories;
