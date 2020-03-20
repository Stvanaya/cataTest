const calcProductPrice = (product) => {
  console.log(product, 'PRODUCTO');
  const {
    product_content,
    unit_of_measure
  } = product.fields;
  const { price } = product;

  if (unit_of_measure.value === 'u')
    return new Intl.NumberFormat('en-US')
      .format(Number(price.unit))
      .replace(',', '.')
};

export default calcProductPrice;