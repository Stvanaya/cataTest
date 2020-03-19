import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './column.module.scss';

type ColumnRange = 1|2|3|4|5|6|7|8|9|10|11|12;

interface ColumnProps {
  xs?: ColumnRange | null;
  sm?: ColumnRange | null;
  md?: ColumnRange | null;
  lg?: ColumnRange | null;
  xlg?: ColumnRange | null;
  children?: ReactNode;
};

const Column: React.FC<ColumnProps> = ({
  xs,
  sm,
  md,
  lg,
  xlg,
  children
}) => {

  const classes = cx(styles.column, {
    [styles['col-df']]: !xs || !sm || !md || !lg || !xlg,
    [styles[`col-xs-${xs}`]]: xs,
    [styles[`col-sm-${sm}`]]: sm,
    [styles[`col-md-${md}`]]: md,
    [styles[`col-lg-${lg}`]]: lg,
    [styles[`col-xl-${xlg}`]]: xlg,
  });

  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};

Column.defaultProps = {
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xlg: null
};

export default Column;