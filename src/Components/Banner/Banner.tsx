import React from 'react';

import Title from 'DS/Title/Title';

import bannerImage from 'assets/BG_desktop.jpg';

import styles from './banner.module.scss';

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <article
      className={styles.banner}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <Title isSmall isCenterAlign>
        Productos de la mayor calidad a los mejores precios
      </Title>
    </article>
  );
};

export default Banner;
