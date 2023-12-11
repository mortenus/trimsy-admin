import React from 'react';
import clsx from 'clsx';

import styles from './Item.module.scss';

import { TItem, TStatus } from './Item.types';

import Modal from '../Modal';
import UniversalModal from 'components/UniversalModal';
import { Button } from 'components';
import axios, { AxiosResponse } from 'axios';

type TModalType = 'delete';

type TLocationData = {
  status: string;
  country: string;
  regionName: string;
  city: string;
  proxy: string;
};

const Item = ({ data }: TItem) => {
  const [statusState, setStatusState] = React.useState<TStatus>(data.general.status);

  const statusClass = clsx(styles.status, {
    [styles.new]: statusState === 'new',
    [styles.canceled]: statusState === 'canceled',
    [styles.pending]: statusState === 'pending',
  });

  //   const callModal = (type: string) => {
  //     <UniversalModel />
  //     if (type === 'delete') {
  //       onClickDelete(data);
  //     }
  //   };

  const formattedDate = new Date(data.createdAt).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  //   const callModal = (type?: string) => {
  //     if (type === 'delete') {
  //       return <UniversalModal>Content for Delete</UniversalModal>;
  //     } else if (type === 'otherType') {
  //       // Handle otherType logic

  //       // Render the UniversalModal for the 'otherType'
  //       return <UniversalModal>Content for Other Type</UniversalModal>;
  //     } else {
  //       // Handle other types or provide a default behavior
  //       return null;
  //     }
  //   };

  //   const handleTypeChange = (newStatus: TStatus) => {
  //     onTypeChange(newStatus);
  //     setStatusState(newStatus);
  //     handleCloseModal();
  //   };

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
          <div className={statusClass}>{statusState}</div>
          <span className={styles.date}>{formattedDate}</span>
          {/* <Modal onClick={(type: TModalType) => setModalType(type)} /> */}
        </div>
      </div>
    </>
  );
};

export default Item;
