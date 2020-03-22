import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import Grid from 'components/DesignSystem/UILayout/Grid';
import Column from 'components/DesignSystem/UILayout/Column';
import Banner from 'components/DesignSystem/Banner/Banner';
import ProductList from 'components/Catalogue/ProductsList/ProductsList';
import Title from 'components/DesignSystem/Title/Title';

/* REQUESTS */
import { getPrices, getProducts, getVendors } from '../../request/cataApi';

const Catalogue = () => {
  const [vendors, setVendors] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVendors() {
      const { data } = await getVendors('vendor');
      setVendors(data);
    }

    loadVendors();
  }, []);

  useEffect(() => {
    async function loadProducts() {
      const { data: products } = await getProducts('product');

      async function loadPrices() {
        if (vendors.length) {
          const { data: prices } = await getPrices(
            `vendor/${vendors[0].uuid}/prices`,
          );

          const mergedProducts = products.map(product => {
            return Object.assign(
              product,
              prices.find(price => {
                return product.uuid === price.uuid;
              }),
            );
          });

          setPrices(mergedProducts);
          setLoading(false);
        }
      }

      loadPrices();
    }
    loadProducts();
  }, [vendors]);

  let content = (
    <Column>
      <ProductList products={prices.slice(0, 20)} />
    </Column>
  );

  if (loading) {
    content = (
      <Column
        customCss={{
          marginTop: '20px',
        }}
      >
        <Skeleton width="100%" height="200px" />
      </Column>
    );
  }

  return (
    <Grid>
      <Column>
        <Banner />
      </Column>
      <Column
        customCss={{
          marginBottom: '20px',
          marginTop: '20px',
        }}
      >
        <Title>Alimentación</Title>
        {content}
      </Column>
    </Grid>
  );
};

export default React.memo(Catalogue);
