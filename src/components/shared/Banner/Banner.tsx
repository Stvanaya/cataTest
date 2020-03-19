import React from 'react';

import Title from '../Title/Title';
import Text from '../Text/Text';

import styles from './banner.module.scss';

interface BannerProps {

};

const Banner: React.FC<BannerProps> = () => {
  return (
    <article className={styles.banner}>
      <Text 
        isBold
        centerAlign
        isSmall
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
  );
};

export default Banner;