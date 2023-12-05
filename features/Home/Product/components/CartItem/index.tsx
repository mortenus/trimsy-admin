import React from 'react';
import Image from 'next/image';

import styles from './CartItem.module.scss';

type TCartItem = {
  obj: {
    id: number;
    title: string;
    price: number;
    imageUrl: string;
  };
};

const CartItem = ({ obj }: TCartItem) => {
  return (
    <div key={obj.id} className={styles.item}>
      <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.image} />

      <div className={styles.title}>
        <p>{obj.title}</p>
        <b>${obj.price}</b>
      </div>
      <Image width={17} height={30} src="/static/img/sneakers/btn-remove.svg" alt="Remove Icon" />
    </div>
  );
};

export default CartItem;
