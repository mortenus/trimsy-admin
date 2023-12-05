import React from 'react';

import styles from './Careers.module.scss';
import Link from 'next/link';
import { Button } from 'components';
import clsx from 'clsx';
import Product from '../Product';
import Image from 'next/image';

export default function Careers() {
  return (
    <div className={styles.wrapper}>
      <Link href="/careers" className={styles.link} />
      <div className={styles.copy}>
        <h2 className={clsx(styles.text, 'typography-hero-headline')}>Marketplace</h2>
        <p
          className={clsx(styles.text, 'typography-hero-product')}
          style={{ margin: '15px 0', fontSize: '400' }}>
          Boost your career.
        </p>
        <div className={clsx(styles.text, styles.button)}>
          <Button type="default" to="/careers" style={{ fontWeight: '600' }}>
            Learn more
          </Button>
        </div>
        {/* <Product /> */}
        <div className={styles.feather}>
          <Image
            width="139"
            height="141"
            sizes="100vw"
            src={'/static/img/services/feather.png'}
            alt="Feather"
            loading={'lazy'}
            quality={'100'}
          />
        </div>
      </div>
    </div>
  );
}
