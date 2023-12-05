import Image from 'next/image';
import React from 'react';
import CartItem from '../CartItem';

import styles from './Cart.module.scss';

const arr = [
  {
    id: 1,
    title: 'Jordan Air Jordan 11',
    price: 349,
    imageUrl: '/static/img/sneakers/7.jpg',
  },
  {
    id: 2,
    title: 'Nike Kyrie Flytrap IV',
    price: 499,
    imageUrl: '/static/img/sneakers/12.jpg',
  },
  {
    id: 3,
    title: 'Nike Kyrie Flytrap IV',
    price: 499,
    imageUrl: '/static/img/sneakers/12.jpg',
  },
];

const wheelEvent =
  typeof window == undefined
    ? 'onwheel' in document.createElement('div')
      ? 'wheel'
      : 'mousewheel'
    : '';

const Cart = () => {
  const scrollRef = React.createRef<HTMLInputElement>();

  const preventDefault = (e: any) => {
    e.preventDefault();
  };

  React.useEffect(() => {
    const scrollRefWrapper = scrollRef.current;

    scrollRefWrapper?.addEventListener('DOMMouseScroll', preventDefault);
    window && scrollRefWrapper?.addEventListener(wheelEvent, preventDefault);
    scrollRefWrapper?.addEventListener('touchmove', preventDefault, { passive: true });
    scrollRefWrapper?.addEventListener('keydown', preventDefault);

    return () => {
      scrollRefWrapper?.removeEventListener('DOMMouseScroll', preventDefault);
      window && scrollRefWrapper?.removeEventListener(wheelEvent, preventDefault);
      scrollRefWrapper?.removeEventListener('touchmove', preventDefault);
      scrollRefWrapper?.removeEventListener('keydown', preventDefault);
    };
  }, [scrollRef]);

  return (
    <div className={styles.drawer} style={{ top: '250px' }}>
      <h2>Cart</h2>

      <div className={styles.wrapper}>
        <div ref={scrollRef} className={styles.itemsOverflow}>
          {arr.map((obj) => (
            <CartItem key={obj.id} obj={obj} />
          ))}
        </div>
        <div className={styles.cartTotalBlock}>
          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>${899}</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>$45</b>
            </li>
          </ul>
          <button tabIndex={-1} className={styles.greenButton}>
            Place order{' '}
            <Image width={12} height={10} src="/static/img/sneakers/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
