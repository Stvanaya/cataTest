import React from 'react';

import Column from '../UILayout/Column';
import Title from '../Title/Title';
import Text from '../Text/Text';

import styles from './banner.module.scss';

interface BannerProps {

};

const Banner: React.FC<BannerProps> = ({}) => {
  return (
    <Column cols={12}>
      <article className={styles.banner}>
        <Text 
          isBold
          isSmall
          centerAlign
        >
          ¡Únete con más usuarios y paga precios de mayorista al por menor!
        </Text>
        <Title
          isSmall
          isCenterAlign
        >
          Selecciona los productos que deseas comprar y envíale tu lista al líder Muni de tu preferencia
        </Title>
      </article>
    </Column>
  );
};

export default Banner;