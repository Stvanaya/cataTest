import Product, { ProductPrice } from 'types/product';

const mergedProductsPrices = (
  products: Product[],
  prices: ProductPrice[],
): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    const mergedProducts = products.map(product =>
      Object.assign(
        product,
        prices.find(price => product.uuid === price.uuid),
      ),
    );
    resolve(mergedProducts);
  });
};

export default mergedProductsPrices;
