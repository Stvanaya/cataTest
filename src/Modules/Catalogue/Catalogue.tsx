import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

import Grid from 'DS/UILayout/Grid';
import Column from 'DS/UILayout/Column';
import Banner from 'Components/Banner/Banner';
import ProductList from 'Components/ProductsList/ProductsList.jsx';
import Title from 'DS/Title/Title';

/* REQUESTS */
import { getPrices, getProducts, getVendors } from '../../request/cataApi';

interface VendorsI {
  uuid: string;
}

interface ProductsI {
  uuid: string;
}

const Catalogue: React.FC = () => {
  const [vendors, setVendors] = useState<VendorsI[]>([]);
  const [prices, setPrices] = useState<ProductsI[]>([]);
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
          const { data: pricesRes } = await getPrices(
            `vendor/${vendors[0].uuid}/prices`,
          );

          const mergedProducts = (products as Array<{ uuid: string }>).map(
            product => {
              return Object.assign(
                product,
                (pricesRes as Array<{ uuid: string }>).find(price => {
                  return product.uuid === price.uuid;
                }),
              );
            },
          );

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
