import React from 'react';

import Grid from 'DS/Layout/Grid';
import Column from 'DS/Layout/Column';
import { SmallText } from 'DS/Text/Text';
import Icon from 'DS/Icon/Icon';

import FooterStyles from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <Grid>
        <Column style={{ borderTop: '1px solid white' }} margin="0 0 40px 0" />
        <Column lg={6} xlg={6} md={6} verAlign="center" horAlign="flex-start">
          <Icon
            as="a"
            className="fa fa-facebook-square"
            href="https://www.facebook.com/munitienda/?ref=br_rs"
            target="_blank"
            size="30px"
            color="white"
            margin="0 40px 0 0"
          />
          <Icon
            as="a"
            className="fa fa-instagram"
            href="https://www.instagram.com/munitienda/?hl=en"
            target="_blank"
            size="30px"
            color="white"
          />
        </Column>
        <Column lg={6} xlg={6} md={6} horAlign="flex-end" verAlign="center">
          <SmallText color="white">
            ©2020 <b>Yati SAS</b>. Todos los derechos reservados
          </SmallText>
        </Column>
      </Grid>
    </FooterStyles>
  );
};

export default Footer;
