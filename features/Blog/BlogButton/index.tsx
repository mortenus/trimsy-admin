import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './BlogButton.module.scss';

interface TBlogButton {
  children: React.ReactNode;
  type?: string;
  style?: React.CSSProperties;
  active?: boolean;
  onClick?: () => void;
}

const BlogButton = ({ children, type, onClick, style, active }: TBlogButton) => {
  const stylying = clsx(
    styles.wrapper,
    { [styles.nav]: type === 'nav' },
    { [styles.number]: type === 'number' },
    { [styles.selected]: active },
  );

  return (
    <>
      <div style={style && style} className={stylying} onClick={onClick}>
        {children}
      </div>
    </>
  );
};

export default React.memo(BlogButton);
