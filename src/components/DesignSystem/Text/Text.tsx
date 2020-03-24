import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './Text.module.scss';

interface TextProps {
  isSmall?: boolean;
  centerAlign?: boolean;
  isBold?: boolean;
  isSecondary?: boolean;
  children?: ReactNode;
};

const Text: React.FC<TextProps> = ({
  isSmall,
  centerAlign,
  isBold,
  isSecondary,
  children
}) => {
  const classes = cx(styles.text, {
    [styles['text-small']]: isSmall,
    [styles['text-center']]: centerAlign,
    [styles['text-bold']]: isBold,
    [styles['text-secondary']]: isSecondary
  });

  return (
    <p
      className={classes}
    >
      {children}
    </p>
  );
};

Text.defaultProps = {
  isSmall: false,
  centerAlign: false,
  isBold: false,
  isSecondary: false
};

export default Text;