import Product, { ProductFields } from 'types/product';

const setPrefix = (quantity: number, fields: ProductFields): string => {
  if (fields.unit_of_measure.value === 'gr') {
    return quantity.toString().concat(' Libra');
  }

  if (fields.unit_of_measure.value === 'u') {
    return quantity
      .toString()
      .concat(` ${fields.product_presentation.value || 'Unidad'}`);
  }

  return '';
};

const parseProductContent = (product: Product): string => {
  const { fields, limits } = product;

  if (fields.unit_of_measure.value === 'gr') {
    const quantity = Number(fields.product_content.value) / 500;
    return setPrefix(quantity, fields);
  }

  if (fields.unit_of_measure.value === 'u') {
    return setPrefix(limits.step, fields);
  }

  return 'No disp.';
};

export default parseProductContent;
