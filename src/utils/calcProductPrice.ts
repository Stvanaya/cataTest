/* TYPES */
import ProductType from 'types/product';

const formatMoney = (price: number): string => {
  return new Intl.NumberFormat('en-US').format(price).replace(',', '.');
};

const calcProductPrice = (product: ProductType): string => {
  const { purchase_type: purchaseType, price, limits } = product;

  if (purchaseType === 'u') {
    const pricePerUnit = Number(price.unit) * Number(limits.min);
    return formatMoney(pricePerUnit);
  }

  const pricePerWeight = Number(price.weight) * Number(limits.min);
  return formatMoney(pricePerWeight);
};

export default calcProductPrice;
