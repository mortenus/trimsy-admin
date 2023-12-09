import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './Button.module.scss';

import TButton from './Button.types';

const Button = ({
  children,
  type,
  status,
  to,
  onClick,
  disabled,
  style,
  size,
  color,
  tabIndex,
  onKeyDown,
  className,
}: TButton) => {
  const stylying = clsx(
    styles.wrapper,
    className && className,
    { [styles['wrapper--disabled_black']]: disabled === 'black' },
    { [styles['wrapper--disabled_white']]: disabled === 'white' },
    { [styles.black__inverse]: color === 'black-inverse' },
    { [styles.black]: color === 'black' },
    { [styles.white]: color === 'white' },
    { [styles.transparent]: color === 'transparent' },
    { [styles.wrapper_nav]: type === 'nav' },
    { [styles.wrapper_default]: type === 'default' },
    { [styles[`wrapper_default--bold`]]: type === 'default--bold' },
    { [styles.wrapper_search]: type === 'search' },
    { [styles.wrapper_submit]: type === 'submit' },
    { [styles.success]: status === 'success' },
    { [styles.fail]: status === 'fail' },
    { [styles.supersmall]: size === 'supersmall' },
    { [styles.small]: size === 'small' },
    { [styles.medium]: size === 'medium' },
    { [styles.large]: size === 'large' },
  );

  return (
    <>
      {!onClick ? (
        <Link href={to ? to : '#'} style={{ ...{ width: 'fit-content' }, ...(style && style) }}>
          <div className={stylying}>{children}</div>
        </Link>
      ) : (
        <button
          style={style && style}
          onClick={onClick}
          className={stylying}
          tabIndex={tabIndex || 0}
          onKeyDown={onKeyDown}
          disabled={!!disabled}>
          {children}
        </button>
      )}
    </>
  );
};

export default React.memo(Button);
