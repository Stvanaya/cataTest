import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './LinkM.module.scss';

interface LinkMProps {
  isActive?: boolean;
  href?: string,
  children?: ReactNode;
};

const LinkM: React.FC<LinkMProps> = ({
  isActive,
  href,
  children
}) => {

  const classes = cx(styles.link, {
    [styles['link-active']]: isActive
  });

  return (
    <a
      href={href}
      className={classes}
    >
      {children}
    </a>
  );
};

LinkM.defaultProps = {
  isActive: false,
  href: '#'
};

export default LinkM;