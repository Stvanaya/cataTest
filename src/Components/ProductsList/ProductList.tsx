import React from 'react';

import Product from 'Components/Product/Product';
import Button from 'DS/Button/Button';
import withPagination from 'hoc/withPagination';

import calcProductPrice from 'utils/calcProductPrice';
import parseProductContent from 'utils/parseProductContent';
import ProductType from 'types/product';
import ProductListStyles from './ProductList.styles';

interface ProductListProps {
  products: ProductType[];
  hasMore?: boolean;
  nextPageHandler?: () => {};
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  hasMore,
  nextPageHandler,
}) => {
  let clickHandler = () => {};
  if (nextPageHandler) {
    clickHandler = nextPageHandler;
  }

  return (
    <ProductListStyles>
      {products.map(product => (
        <Product
          key={product.uuid}
          default_image={product.default_image}
          name={product.name}
          price={calcProductPrice(product)}
          content={parseProductContent(product)}
          variation={product.fields.product_variation.value}
        />
      ))}
      {hasMore && (
        <Button
          typeBtn="primary"
          fullWidth
          style={{ marginTop: '20px' }}
          onClick={clickHandler}
        >
          Ver más
        </Button>
      )}
    </ProductListStyles>
  );
};

export default withPagination(ProductList);
