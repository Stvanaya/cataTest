import React from 'react';

import Grid from 'DS/UILayout/Grid';
import Column from 'DS/UILayout/Column';
import Image from 'DS/Image/Image';

import styles from './header.module.scss';

const Header: React.FC<Object> = () => {
  return (
    <header className={styles.header}>
      <Grid
        customCss={{
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
    </header>
  );
};

export default Header;
