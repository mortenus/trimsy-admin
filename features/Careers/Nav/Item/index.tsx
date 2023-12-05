import React from 'react';

import { useRouter } from 'next/router';
import styles from './Item.module.scss';
import Link from 'next/link';
import TItem from './Item.types';
import clsx from 'clsx';

const Item = ({ title, svg, href }: TItem) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={clsx(styles.container, { [styles.active]: router.pathname === href })}>
      {svg}
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
};

export default Item;
