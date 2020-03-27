import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

/* DS */
import CategoryList from 'Components/CategoryList/CategoryList';

/* TYPES */
import CategoryType from 'types/categories';

/* REQUESTS */
import { getCategories } from 'request/cataApi';

interface CategoriesProps {}

const Categories: React.FC<CategoriesProps> = () => {
  /* This code should be replace by dispatch actions usign Redux */
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelected] = useState<CategoryType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchCategories() {
      const { data: categoriesRes } = await getCategories('category');
      setCategories(categoriesRes);
      setSelected(categoriesRes[0]);
      setLoading(false);
    }

    fetchCategories();
  }, []);

  const handleClickCategory = (category: CategoryType): void => {
    setSelected(category);
  };

  if (loading) {
    return <Skeleton width="100%" height="200px" />;
  }

  return (
    <CategoryList
      fullWidth
      categories={categories}
      title="categorías"
      selected={selectedCategory}
      clickHandler={handleClickCategory}
    />
  );
};

export default Categories;
