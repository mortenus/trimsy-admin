import React from 'react';

import styles from './BoostItem.module.scss';

type TItem = {
  title: string;
  description: string;
  style?: React.CSSProperties;
};

const BoostItem = ({ style, title, description }: TItem) => {
  return (
    <div style={style} className={styles.item}>
      <h6 className={styles.title}>{title}</h6>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BoostItem;
