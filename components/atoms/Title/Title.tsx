import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './Title.module.scss';

interface TitleProps {
  isSmall?: boolean;
  isCenterAlign?: boolean;
  children: ReactNode;
};

const Title: React.FC<TitleProps> = ({
  isSmall,
  isCenterAlign,
  children
}) => {
  const classes = cx(styles.title, {
    [styles['title-small']]: isSmall,
    [styles['title-center']]: isCenterAlign
  });

  return (
    <h1 className={classes}>
      {children}
    </h1>
  );
};

Title.defaultProps = {
  isSmall: false,
  isCenterAlign: false
};

export default Title;