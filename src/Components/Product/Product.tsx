import React from 'react';

import { SmallCard } from 'DS/Card/Card';
import Text, { SmallText } from 'DS/Text/Text';
import Image from 'DS/Image/Image';

interface ProductProps {
  name: string;
  price: string;
  default_image: string;
}

const Product: React.FC<ProductProps> = props => {
  return (
    <SmallCard flexVerAlign>
      <Image
        src={props.default_image}
        alt="Product Alt"
        width="70px"
        height="70px"
      />
      <div>
        <SmallText align="center">
          {props.name}
        </SmallText>
        <Text align="center" isBold>
          ${props.price}
        </Text>
      </div>
    </SmallCard>
  );
};

export default Product;
