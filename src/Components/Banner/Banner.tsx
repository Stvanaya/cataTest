import React from 'react';

import { TitleH2 } from 'DS/Title/Title';

import bannerImage from 'assets/BG_desktop.jpg';

import BannerStyles from './Banner.styles';

interface BannerProps {}

const Banner: React.FC<BannerProps> = () => {
  return (
    <BannerStyles bgUrl={bannerImage}>
      <TitleH2>
        Productos de la mayor calidad a los mejores precios
      </TitleH2>
    </BannerStyles>
  );
};

export default Banner;
