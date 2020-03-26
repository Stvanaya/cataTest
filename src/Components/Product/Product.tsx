import React from 'react';

/* DS */
import { SmallCard } from 'DS/Card/Card';
import { SmallText } from 'DS/Text/Text';
import Button from 'DS/Button/Button';
import Image from 'DS/Image/Image';

/* STYLES */
import ProductContent from './Product.styles';

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
      <ProductContent>
        <SmallText align="center" isXXS margin="15px 0 7px 0">
          {props.name}
        </SmallText>
        <SmallText align="center" isBold margin="0 0 10px 0">
          ${props.price}
        </SmallText>
        <Button typeBtn="secondary">Agregar</Button>
      </ProductContent>
    </SmallCard>
  );
};

export default Product;
