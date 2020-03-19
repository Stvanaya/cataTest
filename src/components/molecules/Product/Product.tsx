import React from 'react';

import Card from '../../atoms/Card/Card';
import Text from '../../atoms/Text/Text';
import Image from '../../atoms/Image/Image';

import { ProductProps } from '../../../interfaces/product';

const Product: React.FC<ProductProps> = ({
  name,
  price,
  imageUrl
}) => {
  return (
    <Card isSmall>
      <Image src={imageUrl} alt="Product Alt"/>
      <Text isSmall centerAlign>{name}</Text>
      <Text isSmall centerAlign isBold>{price}</Text>
    </Card>
  );
};

export default Product;