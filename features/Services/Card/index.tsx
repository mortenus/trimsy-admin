import React from 'react';

import styles from './Card.module.scss';
import { Button } from 'components';
import Image from 'next/image';

type TCardBase = {
  isNew?: boolean;
  serviceName: string;
  serviceHeadline: string;
  href: string;
  imgSrc?: string;
  backgroundColor?: string;
};

interface TCardChildren extends TCardBase {
  children: React.ReactNode;
  imgSrc?: never;
}

interface TCardImg extends TCardBase {
  imgSrc: string;
  children?: never;
}

type TCard = TCardChildren | TCardImg;

const Card = ({
  isNew,
  serviceName,
  serviceHeadline,
  href,
  imgSrc,
  backgroundColor,
  children,
}: TCard) => {
  return (
    <section className={styles.card} style={{ background: backgroundColor ? backgroundColor : '' }}>
      <div className={styles.text}>
        {isNew && <span className={styles.new}>New</span>}
        <h4 className={'typography-hero-product'}>{serviceName}</h4>
        <h3 className={'typography-hero-headline'}>{serviceHeadline}</h3>
      </div>
      <div className={styles.cta}>
        <Button to={href} size={'small'}>
          Select
        </Button>
      </div>
      {imgSrc && (
        <Image
          className={styles.img}
          width="900"
          height="0"
          sizes="100vw"
          src={imgSrc}
          alt={'Image'}
          priority
          quality={100}
        />
      )}
      {/* {imgSrc && (
        // <Image
        //   width="0"
        //   height="0"
        //   sizes="100vw"
        //   style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        //   src={imgSrc}
        //   alt={'Image'}
        // />
        <figure
          className={styles.img}
          style={{
            backgroundImage: `url(${imgSrc})`,
            width: '1900px',
            height: '965px',
            backgroundSize: '1900px 965px',
          }}
        />
      )} */}
      {children && children}
    </section>
  );
};

export default Card;
