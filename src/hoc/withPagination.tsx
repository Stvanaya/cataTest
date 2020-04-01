/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import Product from 'types/product';

interface Props {
  products: Product[];
}

function withPagination<T extends Props>(Wrapped: React.ComponentType<T>) {
  return function Pagination(props: T) {
    const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
    const [page, setPage] = useState(1);
    const [productPerPage] = useState(20);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
      const initialProducts = [...props.products.slice(0, 1 * productPerPage)];
      setCurrentProducts(initialProducts);

      if (initialProducts.length < props.products.length) {
        setPage(1);
        setHasMore(true);
      } else {
        setHasMore(false);
      }
    }, [props.products]);

    const nextPageHandler = () => {
      const nextProducts = [
        ...props.products.slice(0, (page + 1) * productPerPage),
      ];

      if (currentProducts.length < props.products.length) {
        if (nextProducts.length >= props.products.length) setHasMore(false);

        setPage(p => p + 1);
        setCurrentProducts(nextProducts);
      } else {
        setHasMore(false);
      }
    };

    return (
      <Wrapped
        {...props}
        hasMore={hasMore}
        products={currentProducts}
        page={page}
        nextPageHandler={nextPageHandler}
      />
    );
  };
}

export default withPagination;
