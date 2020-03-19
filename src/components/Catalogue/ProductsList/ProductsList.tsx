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
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.price}
          />)
      }
    </div>
  );
};

export default ProductList;