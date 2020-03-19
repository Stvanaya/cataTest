import React from 'react';

import Image from '../../atoms/Image/Image';

import styles from './header.module.scss';

interface HeaderProps {

};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header
      className={styles.header}
    >
      <Image
        src="https://secureservercdn.net/198.71.233.179/38c.d4c.myftpupload.com/wp-content/uploads/2020/02/logo.png?time=1584061552"
        alt="muni-logo"
        width="90px"
        height="30px"
      />
    </header>
  );
};

export default Header;