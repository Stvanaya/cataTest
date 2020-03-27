import React from 'react';

/* DS */
import { SmallCard } from 'DS/Card/Card';
import { SmallText } from 'DS/Text/Text';
import Image from 'DS/Image/Image';

/* STYLES */
import ProductContent from './Product.styles';

interface ProductProps {
  name: string;
  price: string;
  default_image: string;
  variation: string | null;
}

const Product: React.FC<ProductProps> = ({
  name,
  default_image: defaultImage,
  variation,
  price,
}) => (
  <SmallCard flexVerAlign>
    <Image src={defaultImage} alt="Product Alt" width="70px" height="70px" />
    <ProductContent>
      <SmallText align="center" isXXS margin="15px 0 7px 0">
        {name} {variation}
      </SmallText>
      <SmallText align="center" isBold margin="0 0 10px 0">
        $ {price}
      </SmallText>
    </ProductContent>
  </SmallCard>
);

export default Product;
