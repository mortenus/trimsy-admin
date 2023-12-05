import React from 'react';
import Link from 'next/link';

import styles from './SupportItem.module.scss';
import { ImageUnoptimized } from 'components';

type TSupportItem = {
  title: string;
  imgUrl: string;
  href: string;
};

const SupportItem = ({ title, href, imgUrl }: TSupportItem) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <div className={styles.wrap}>
          {/* <Image width={500} height={250} src={imgUrl} alt="Supporting Website" /> */}
          <ImageUnoptimized
            fill
            loading={'lazy'}
            src={imgUrl}
            alt={'additional, support referenced website img'}
          />
          {/* <Image fill src={imgUrl} alt="Supporting Website" /> */}
        </div>
      </div>
      <Link target={'_blank'} className={styles.link} href={href}>
        {title}
      </Link>
    </div>
  );
};

export default SupportItem;
