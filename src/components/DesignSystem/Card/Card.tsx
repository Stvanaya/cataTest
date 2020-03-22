import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './card.module.scss';

interface CardProps {
  children: ReactNode;
  isSmall?: boolean;
  flexAlign?: boolean;
};

const Card: React.FC<CardProps> = ({
  isSmall,
  flexAlign,
  children
}) => {

  const classes = cx(styles.card, {
    [styles['card-small']]: isSmall,
    [styles['card-flex-align']]: flexAlign
  });

  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};

Card.defaultProps = {
  isSmall: false,
  flexAlign: false
};

export default Card;