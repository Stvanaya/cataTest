import React from 'react';

import Grid from '../shared/UILayout/Grid';
import Column from '../shared/UILayout/Column';
import Banner from '../shared/Banner/Banner';
import ProductList from '../Catalogue/ProductsList/ProductsList';
import Title from '../shared/Title/Title';

import products from '../../mock/product';

interface CatalogueProps {

};

const Catalogue: React.FC<CatalogueProps> = () => {
    return (
      <Grid>
        <Column>
          <Banner />
        </Column>
        <Column
          customCss={{
            marginBottom: '20px',
            marginTop: '20px'
          }}
        >
          <Title>Alimentación</Title>
        </Column>
        <Column>
          <ProductList products={products}/>
        </Column>
      </Grid>
    );
};

export default Catalogue;