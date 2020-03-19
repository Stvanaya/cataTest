import React from 'react';

import Card from '../../shared/Card/Card';
import Text from '../../shared/Text/Text';
import Image from '../../shared/Image/Image';

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
      <Text centerAlign isBold>{price}</Text>
    </Card>
  );
};

export default Product;