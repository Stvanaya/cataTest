/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import Product from 'types/product';

interface Props {
  products: Product[];
}

function withPagination<T extends Props>(Wrapped: React.ComponentType<T>) {
  return (props: T) => {
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [productPerPage, setProductPerPage] = useState(20);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
      const initialProducts = [
        ...props.products.slice(0, page * productPerPage),
      ];

      if (initialProducts.length < props.products.length) {
        setCurrentProducts(initialProducts);
        setPage(1);
      } else {
        setHasMore(false);
      }
    }, [props.products]);

    const nextPageHandler = () => {
      if (currentProducts.length < props.products.length) {
        setPage(p => p + 1);
        setCurrentProducts([...props.products.slice(0, page * productPerPage)]);
      } else {
        setHasMore(false);
      }
    };

    return (
      <Wrapped
        hasMore={hasMore}
        currentProducts={currentProducts}
        page={page}
        {...props}
        nextPageHandler={nextPageHandler}
      />
    );
  };
}

export default withPagination;
