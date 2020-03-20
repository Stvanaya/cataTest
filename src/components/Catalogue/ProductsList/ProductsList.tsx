import React from 'react';

import Product from '../Product/Product';
import { ProductProps } from '../../../interfaces/product';

import styles from './productList.module.scss';

interface ProductListProps {
  products: ProductProps[];
};

const ProductList: React.FC<ProductListProps> = ({
  products
}) => {
  return (
    <div className={styles['product-list']}>
      {
        products.map(product => 
          <Product
            key={product.uuid}
            default_image={product.default_image}
            name={product.name}
            price="$90.000"
          />)
      }
    </div>
  );
};

export default ProductList;