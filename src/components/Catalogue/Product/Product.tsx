import React from 'react';

import Card from 'components/shared/Card/Card';
import Text from 'components/shared/Text/Text';
import Image from 'components/shared/Image/Image';

interface ProductProps {
  name: string;
  price: string;
  default_image: string;
}

const Product: React.FC<ProductProps> = props => {
  return (
    <Card isSmall flexAlign>
      <Image
        src={props.default_image}
        alt="Product Alt"
        width="70px"
        height="70px"
        customCss={{
          objectFit: 'contain',
        }}
      />
      <div>
        <Text isSmall centerAlign>
          {props.name}
        </Text>
        <Text centerAlign isBold>
          ${props.price}
        </Text>
      </div>
    </Card>
  );
};

export default Product;
