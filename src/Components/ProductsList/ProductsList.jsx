import React from 'react';

import Product from 'Components/Product/Product';

/* UTILS */
import calcProductPrice from 'utils/calcProductPrice';

import styles from './productList.module.scss';

const ProductList = ({ products }) => {
  return (
    <div className={styles['product-list']}>
      {products.map(product => (
        <Product
          key={product.uuid}
          default_image={product.default_image}
          name={product.name}
          price={calcProductPrice(product)}
        />
      ))}
    </div>
  );
};

export default ProductList;
