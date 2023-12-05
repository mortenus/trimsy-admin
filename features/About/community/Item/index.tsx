import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './CommunityItem.module.scss';

const Item = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: '25%', height: 'auto' }}
        src={'/static/img/about/hart.jpg'}
        alt={'Community Involvement Item Icon'}
      />
      <p>HART (Humanitarian Aid Response Team) - is a way to help those in needs.</p>
      <p>
        Our members have been actively participating in helping packaging and delivering
        humanitarian help to Ukraine in places it is urgently needed.
      </p>
      <p>
        Participating in various activities helps us stay connected to the community and identify
        areas where we can help.
      </p>

      <Link href="https://hart.ca">hart.ca</Link>
    </div>
  );
};

export default Item;
