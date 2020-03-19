import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './column.module.scss';

interface ColumnProps {
  cols: number;
  children: ReactNode;
};

const Column: React.FC<ColumnProps> = ({
  cols,
  children
}) => {

  const classes = cx(styles.column, {
    [styles['col-1']]: cols === 1,
    [styles['col-2']]: cols === 2,
    [styles['col-3']]: cols === 3,
    [styles['col-4']]: cols === 4,
    [styles['col-5']]: cols === 5,
    [styles['col-6']]: cols === 6,
    [styles['col-7']]: cols === 7,
    [styles['col-8']]: cols === 8,
    [styles['col-9']]: cols === 9,
    [styles['col-10']]: cols === 10,
    [styles['col-11']]: cols === 11,
    [styles['col-12']]: cols === 12
  });

  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};

export default Column;