export type PurchaseType = 'w' | 'u';
export type UnitMeasure = 'gr' | 'u';

export type ProductFields = {
  product_content: {
    key: string;
    value: number;
  };
  unit_of_measure: {
    key: string;
    value: UnitMeasure;
  };
  product_variation: {
    key: string;
    value: null | string;
  };
  product_presentation: {
    key: string;
    value: null | string;
  };
};

export type ProductPrice = {
  uuid: null | string;
  unit: null | number;
  weight: null | number;
};

export type ProductLimits = {
  max: number;
  min: number;
  step: number;
};

type Product = {
  id: number;
  uuid: string;
  identifier: string;
  name: string;
  fields: ProductFields;
  images: string[];
  fk_category: number;
  default_image: string;
  purchase_type: PurchaseType;
  price: ProductPrice;
  limits: ProductLimits;
};

export default Product;
