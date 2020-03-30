import React from 'react';

import Product from 'Components/Product/Product';
import Button from 'DS/Button/Button';
import withPagination from 'hoc/withPagination';

import calcProductPrice from 'utils/calcProductPrice';
import ProductType from 'types/product';
import ProductListStyles from './ProductList.styles';

interface ProductListProps {
  products: ProductType[];
  hasMore?: boolean;
}

const ProductList: React.FC<ProductListProps> = ({ products, hasMore }) => {
  return (
    <ProductListStyles>
      {products.map(product => (
        <Product
          key={product.uuid}
          default_image={product.default_image}
          name={product.name}
          price={calcProductPrice(product)}
          variation={product.fields.product_variation.value}
        />
      ))}
      {hasMore && (
        <Button typeBtn="primary" fullWidth style={{ marginTop: '20px' }}>
          Ver más
        </Button>
      )}
    </ProductListStyles>
  );
};

export default withPagination(ProductList);
