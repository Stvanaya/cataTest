import React from 'react';
import cx from 'classnames';

import styles from './button.module.scss';

interface ButtonProps {
  isSecondary?: boolean;
  clickHandler?: any;
};

const Button: React.FC<ButtonProps> = ({
  isSecondary,
  clickHandler,
  children,
  ...props
}) => {
  const classes = cx(styles.btn, {
    [styles['btn-primary']]: !isSecondary,
    [styles['btn-secondary']]: isSecondary,
  });

  return (
    <button
      className={classes}
      onClick={clickHandler}
      {...props}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  isSecondary: false
};

export default Button;