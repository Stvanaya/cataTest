/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';

/* DS */
import DropdownList from 'DS/Dropdown/DropdownList/DropdownList';
import DropdownItem from 'DS/Dropdown/DropdownItem/DropdownItem';
import DropdownHeader from 'DS/Dropdown/DropdownHeader/DropdownHeader';
import Dropdown from 'DS/Dropdown/Dropdown';
import { SmallText } from 'DS/Text/Text';
import Image from 'DS/Image/Image';

/* TYPES */
import CategoryType from 'types/categories';

interface CategoryListProps {
  categories: CategoryType[];
  selected: CategoryType | undefined;
  title: string;
  isIcon?: boolean;
  fullWidth?: boolean;
  clickHandler: (category: CategoryType) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories,
  selected,
  fullWidth,
  title,
  clickHandler,
}) => {
  return (
    <Dropdown fullWidth={fullWidth}>
      <DropdownHeader>
        <SmallText isBold isXXS isUpperCase>
          {title}
        </SmallText>
      </DropdownHeader>
      <DropdownList>
        {categories.map(category => {
          return (
            <DropdownItem
              key={category.uuid}
              isSelected={selected ? selected.uuid === category.uuid : false}
              onClick={() => clickHandler(category)}
            >
              <Image
                src={
                  category.images[0] ||
                  'https://www.frutality.es/wp-content/uploads/tomates-cherry.png'
                }
                width="30px"
                height="30px"
                alt={category.name}
              />
              {category.name}
            </DropdownItem>
          );
        })}
      </DropdownList>
    </Dropdown>
  );
};

export default CategoryList;
