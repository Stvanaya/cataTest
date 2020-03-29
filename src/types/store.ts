import Product from 'types/product';
import Category from 'types/categories';
import Vendors from 'types/vendors';

export type UIStates = {
  isError: boolean;
  isLoading: boolean;
};

export type CategoriesState = {
  categories: Category[];
  selectedCategory: Category;
};

export type CatalogueState = {
  products: Product[];
  productsFilter: Product[];
  vendors: Vendors[];
};

export interface RootState {
  categoriesState: CategoriesState & UIStates;
  catalogueState: CatalogueState & UIStates;
}
