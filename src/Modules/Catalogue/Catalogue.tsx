import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

/* COMPONENTS */
import Column from 'DS/Layout/Column';
import ProductList from 'Components/ProductsList/ProductList';
import Title from 'DS/Title/Title';

/* TYPES */
import ProductType, { ProductPrice } from 'types/product';
import VendorType from 'types/vendors';

/* REQUESTS */
import { getPrices, getProducts, getVendors } from '../../request/cataApi';

const Catalogue: React.FC = () => {
  const [vendors, setVendors] = useState<VendorType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
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
      const { data: productsRes } = await getProducts('product');

      async function loadPrices() {
        if (vendors.length) {
          const { data: pricesRes } = await getPrices(
            `vendor/${vendors[0].uuid}/prices`,
          );

          const mergedProducts = (productsRes as Array<ProductType>).map(
            product =>
              Object.assign(
                product,
                (pricesRes as Array<ProductPrice>).find(
                  price => product.uuid === price.uuid,
                ),
              ),
          );

          setProducts(mergedProducts);
          setLoading(false);
        }
      }

      loadPrices();
    }
    loadProducts();
  }, [vendors]);

  let content = (
    <Column>
      <ProductList products={products.slice(0, 30)} />
    </Column>
  );

  if (loading) {
    content = (
      <Column
        style={{
          marginTop: '20px',
        }}
      >
        <Skeleton width="100%" height="200px" />
      </Column>
    );
  }

  return (
    <>
      <Title style={{ marginLeft: '20px' }}>Alimentación</Title>
      {content}
    </>
  );
};

export default React.memo(Catalogue);
