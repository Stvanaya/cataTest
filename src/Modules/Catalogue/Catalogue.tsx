import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';

import Column from 'DS/Layout/Column';
import ProductList from 'Components/ProductsList/ProductList';
import Title, { TitleH4 } from 'DS/Title/Title';
import Error from 'DS/Error/Error';

import { RootState } from 'types/store';

import {
  asyncFetchVendorsProducts,
  asyncSetFilterProducts,
} from 'Store/cata/actionsCreators/catalogue';

const Catalogue: React.FC = () => {
  const { categoriesState, catalogueState } = useSelector(
    (state: RootState) => state,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncFetchVendorsProducts());
  }, []);

  useEffect(() => {
    if (categoriesState.selectedCategory) {
      dispatch(asyncSetFilterProducts(categoriesState.selectedCategory.id));
    }
  }, [categoriesState.selectedCategory]);

  if (catalogueState.isLoading) {
    return <Skeleton width="100%" height="200px" />;
  }

  if (catalogueState.isError) {
    return (
      <Error>
        <TitleH4>Algo salió mal</TitleH4>
      </Error>
    );
  }

  return (
    <>
      <Column>
        <Title>
          {categoriesState.selectedCategory
            ? categoriesState.selectedCategory.name
            : 'Productos'}
        </Title>
        <ProductList
          products={
            categoriesState.selectedCategory
              ? catalogueState.productsFilter
              : catalogueState.products
          }
        />
      </Column>
    </>
  );
};

export default React.memo(Catalogue);
