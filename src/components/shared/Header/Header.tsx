import React from 'react';

import Grid from '../UILayout/Grid';
import Column from '../UILayout/Column';
import Image from '../Image/Image';


import styles from './header.module.scss';

const Header: React.FC<Object> = () => {
  return (
    <header
      className={styles.header}
    >
      <Grid>
        <Column cols={2}>
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