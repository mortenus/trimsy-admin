import React from 'react';
import NumberCounter from '../AnimatedNumber';

import styles from './Item.module.scss';

type TItem = {
  title: string;
  number: number;
};

const Item = ({ title, number }: TItem) => {
  return (
    <div className={styles.wrapper}>
      <NumberCounter endValue={number} />+<h5>{title}</h5>
    </div>
  );
};

export default React.memo(Item);
