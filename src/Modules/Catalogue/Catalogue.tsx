import React, { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';

import ProductList from 'Components/ProductsList/ProductList';
import Column from 'DS/Layout/Column';
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
  }, [categoriesState.selectedCategory, catalogueState.products]);

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
        <Title>{categoriesState.selectedCategory.name}</Title>
        <ProductList products={catalogueState.productsFilter} />
      </Column>
    </>
  );
};

export default React.memo(Catalogue);
