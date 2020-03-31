import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';

import CategoryList from 'Components/CategoryList/CategoryList';
import Error from 'DS/Error/Error';
import { TitleH4 } from 'DS/Title/Title';

import CategoryType from 'types/categories';
import { RootState } from 'types/store';

import {
  asyncFetchCategories,
  setSelectedCategory,
} from 'Store/cata/actionsCreators/categories';
import { asyncSetFilterProducts } from 'Store/cata/actionsCreators/catalogue';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  const dispatch = useDispatch();
  const { categoriesState, catalogueState } = useSelector(
    (state: RootState) => state,
  );

  useEffect(() => {
    dispatch(asyncFetchCategories());
  }, []);

  const handleClickCategory = (category: CategoryType): void => {
    if (!catalogueState.isLoading) {
      dispatch(setSelectedCategory(category));
      dispatch(asyncSetFilterProducts(category.id));
    }
  };

  if (categoriesState.isLoading) {
    return <Skeleton width="100%" height="30px" count={5} />;
  }

  if (categoriesState.isError) {
    return (
      <Error>
        <TitleH4>Algo salió mal</TitleH4>
      </Error>
    );
  }

  return (
    <CategoryList
      fullWidth
      categories={categoriesState.categories}
      title="categorías"
      selected={categoriesState.selectedCategory}
      clickHandler={handleClickCategory}
    />
  );
};

export default Categories;
