import Product from 'types/product';

const filterProductsByCategory = (
  products: Product[],
  categoryId: number,
): Promise<Product[]> => {
  return new Promise(resolve => {
    const filterProducts = products.filter(
      product => product.fk_category === categoryId,
    );
    resolve(filterProducts);
  });
};

export default filterProductsByCategory;
