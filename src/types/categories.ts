import { ProductFields } from 'types/product';

type Category = {
  id: number;
  uuid: string;
  slug: string;
  name: string;
  images: string[];
  fields: ProductFields;
  fk_parent_category: number | null;
};

export default Category;
