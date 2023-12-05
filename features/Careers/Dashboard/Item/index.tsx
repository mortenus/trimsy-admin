import React from 'react';
import clsx from 'clsx';

import styles from './Item.module.scss';

import { TItem, TStatus } from './Item.types';

import Modal from '../Modal';

const Item = ({ data, onClickDelete }: TItem) => {
  const [statusState, setStatusState] = React.useState<TStatus>(data.general.status);

  const statusClass = clsx(styles.status, {
    [styles.completed]: statusState === 'completed',
    [styles.canceled]: statusState === 'canceled',
    [styles.pending]: statusState === 'pending',
  });

  const callModal = (type: string) => {
    if (type === 'delete') {
      onClickDelete(data);
    }
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.block}>
          <span className={styles.id}>{data._id}</span>
          <h3 className={styles.name}>{data.general.fullname}</h3>
          <span className={styles.email}>{data.general.email}</span>
        </div>
        <div className={styles.block}>
          <p className={styles.product}>{data.general.product}</p>
        </div>
        <div className={styles.block}>
          <div className={statusClass}>{data.general.status}</div>
          <span className={styles.date}>{data.created_at}</span>
          <Modal onClick={callModal} />
        </div>
      </div>
    </>
  );
};

export default Item;
