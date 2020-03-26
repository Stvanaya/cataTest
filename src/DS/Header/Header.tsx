import React from 'react';

import Grid from 'DS/Layout/Grid';
import Column from 'DS/Layout/Column';
import Image from 'DS/Image/Image';

import HeaderStyles from './Header.styles';

const Header: React.FC = () => {
  return (
    <HeaderStyles>
      <Grid
        style={{
          height: '60px',
        }}
      >
        <Column lg={2}>
          <Image
            src="https://secureservercdn.net/198.71.233.179/38c.d4c.myftpupload.com/wp-content/uploads/2020/02/logo.png?time=1584061552"
            alt="muni-logo"
            width="98px"
            height="30px"
          />
        </Column>
      </Grid>
    </HeaderStyles>
  );
};

export default Header;
