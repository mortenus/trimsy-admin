import clsx from 'clsx';
import { ImageUnoptimized } from 'components';
import Image from 'next/image';
import React from 'react';

import styles from './Card.module.scss';

interface TCard {
  title: string;
  price: number;
  imageUrl: string;
  favorited?: boolean;
  added?: boolean;
  hover?: boolean;
}

const Card = ({
  title,
  price,
  imageUrl,
  favorited = false,
  added = false,
  hover = false,
}: TCard) => {
  return (
    <div key={title} className={clsx([styles.wrapper, { [styles.hover]: hover }])}>
      <div className={styles.content}>
        <div className={styles.favorite}>
          <Image
            fill
            src={
              favorited
                ? '/static/img/sneakers/heart-liked.svg'
                : '/static/img/sneakers/heart-unliked.svg'
            }
            alt="Liked item icon"
          />
        </div>

        <div className={styles.image}>
          <ImageUnoptimized fill src={imageUrl} loading={'lazy'} alt="Additional Item" />
        </div>
      </div>
      <h5>{title}</h5>
      <div className={styles.info}>
        <div className={styles.price}>
          <span>Price:</span>
          <b>${price}</b>
        </div>
        <div className={styles.like}>
          <Image
            fill
            src={
              added ? '/static/img/sneakers/btn-checked.svg' : '/static/img/sneakers/btn-plus.svg'
            }
            alt="Added item icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
