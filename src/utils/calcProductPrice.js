const calcProductPrice = (product) => {
  const {
    purchase_type,
    price,
    limits
  } = product;

  if (purchase_type === 'u') {
    const pricePerUnit = Number(price.unit) * Number(limits.min);
    return formatMoney(pricePerUnit);
  }

  if (purchase_type === 'w') {
    const pricePerWeight = Number(price.weight) * Number(limits.min);
    return formatMoney(pricePerWeight);
  }
};

const formatMoney = (price) => {
  return new Intl.NumberFormat('en-US')
    .format(price)
    .replace(',', '.');
};

export default calcProductPrice;
