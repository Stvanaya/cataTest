import React, { ReactNode } from 'react';

import styles from './grid.module.scss';

interface GridProps {
  children: ReactNode;
};

const Grid: React.FC<GridProps> = ({
  children
}) => {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
};

export default Grid;