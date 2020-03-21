import React from 'react';

import Card from '../../shared/Card/Card';
import Text from '../../shared/Text/Text';
import Image from '../../shared/Image/Image';

interface ProductProps {
  name: string;
  price: string;
  default_image: string;
};

const Product: React.FC<ProductProps> = ({
  name,
  price,
  default_image
}) => {
  return (
    <Card
      isSmall
      flexAlign
    >
      <Image 
        src={default_image}
        alt="Product Alt"
        width="70px"
        height="70px"
        customCss={{
          objectFit: 'contain'
        }}
      />
      <div>
        <Text isSmall centerAlign>{name}</Text>
        <Text centerAlign isBold>${price}</Text>
      </div>
    </Card>
  );
};

export default Product;