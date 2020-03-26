import React from 'react';

/* COMPONENTS */
import Product from 'Components/Product/Product';

/* UTILS */
import calcProductPrice from 'utils/calcProductPrice';

/* TYPES */
import ProductType from 'types/product';

/* STYLES */
import ProductListStyles from './ProductList.styles';

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ProductListStyles>
      {products.map(product => (
        <Product
          key={product.uuid}
          default_image={product.default_image}
          name={product.name}
          price={calcProductPrice(product)}
        />
      ))}
    </ProductListStyles>
  );
};

export default ProductList;
