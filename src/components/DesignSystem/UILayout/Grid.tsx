import React, { ReactNode, CSSProperties } from 'react';

import styles from './grid.module.scss';

interface GridProps {
  customCss?: CSSProperties | undefined;
  children: ReactNode;
};

const Grid: React.FC<GridProps> = ({
  customCss,
  children
}) => {
  return (
    <div
      className={styles.grid}
      style={customCss}
    >
      {children}
    </div>
  );
};

Grid.defaultProps = {
  customCss: undefined
};

export default Grid;