import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './card.module.scss';

interface CardProps {
  children: ReactNode;
  isSmall?: boolean;
};

const Card: React.FC<CardProps> = ({
  isSmall,
  children
}) => {

  const classes = cx(styles.card, {
    [styles['card-small']]: isSmall
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
  isSmall: false
};

export default Card;