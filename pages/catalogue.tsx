import React from 'react';

import Grid from '../components/atoms/UILayout/Grid';
import Column from '../components/atoms/UILayout/Column';
import Banner from '../components/molecules/Banner/Banner';
import ProductList from '../components/molecules/ProductsList/ProductsList';
import Title from '../components/atoms/Title/Title';

import products from '../mock/product';

const Catalogue = () => {
  return (
    <>
      <Grid>
        <Banner />
        <Column cols={12}>
          <Title>Alimentación</Title>
        </Column>
        <Column cols={12}>
          <ProductList 
            products={products}
          />
        </Column>
      </Grid>
    </>
  );
}

export default Catalogue;
