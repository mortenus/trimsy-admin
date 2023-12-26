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

const Item = ({ data, onClickDelete, onTypeChange }: TItem) => {
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

  const [modalType, setModalType] = React.useState<TModalType | null>(null);

  const handleCloseModal = () => {
    setModalType(null);
    setCurrentStep(1);
    setLocationData(null);
  };

  const [currentStep, setCurrentStep] = React.useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleCloseStepModal = () => {
    setCurrentStep(1);
  };

  const handleTypeChange = (newStatus: TStatus) => {
    onTypeChange(newStatus);
    setStatusState(newStatus);
    handleCloseModal();
  };

  const [isGettingLocation, setIsGettingLocation] = React.useState(false);
  const [locationData, setLocationData] = React.useState<TLocationData | null>(null);
  const handleGetLocation = () => {
    setIsGettingLocation(true);

    axios
      .get(
        `http://ip-api.com/json/${data.securityData?.ip}?fields=status,message,country,regionName,city,proxy`,
      )
      .then((res: AxiosResponse<TLocationData>) => {
        const data = res.data;
        if (data.status === 'success') {
          setLocationData(data);
        }
      })
      .finally(() => {
        setIsGettingLocation(false);
      });
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
        <div className={styles[`block--action`]}>
          <div className={statusClass}>{statusState}</div>
          <span className={styles.date}>{formattedDate}</span>
          <Modal onClick={(type: TModalType) => setModalType(type)} />
        </div>
      </div>
      {modalType === 'delete' ? (
        <UniversalModal onClose={handleCloseModal} className={styles['custom-modal-type1']}>
          {
            <div className={styles.modal}>
              <header className={styles['modal-header']}>
                <span className={styles[`modal-hero`]}>
                  <svg
                    className={styles['modal-icon']}
                    width="9"
                    height="8"
                    viewBox="0 0 9 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.7292 1.45455H6.27098V1.01818C6.27098 0.748143 6.15148 0.489165 5.93878 0.298219C5.72608 0.107272 5.4376 0 5.1368 0H3.19249C2.89169 0 2.60321 0.107272 2.39051 0.298219C2.17781 0.489165 2.05832 0.748143 2.05832 1.01818V1.45455H0.60009C0.471174 1.45455 0.347539 1.50052 0.256382 1.58235C0.165225 1.66419 0.114014 1.77518 0.114014 1.89091C0.114014 2.00664 0.165225 2.11763 0.256382 2.19946C0.347539 2.2813 0.471174 2.32727 0.60009 2.32727H0.762115V7.27273C0.762115 7.46561 0.847467 7.6506 0.999396 7.78699C1.15132 7.92338 1.35738 8 1.57224 8H6.75705C6.97191 8 7.17797 7.92338 7.3299 7.78699C7.48183 7.6506 7.56718 7.46561 7.56718 7.27273V2.32727H7.7292C7.85812 2.32727 7.98175 2.2813 8.07291 2.19946C8.16407 2.11763 8.21528 2.00664 8.21528 1.89091C8.21528 1.77518 8.16407 1.66419 8.07291 1.58235C7.98175 1.50052 7.85812 1.45455 7.7292 1.45455ZM3.03047 1.01818C3.03047 0.979605 3.04754 0.942608 3.07793 0.91533C3.10831 0.888052 3.14952 0.872727 3.19249 0.872727H5.1368C5.17977 0.872727 5.22098 0.888052 5.25137 0.91533C5.28175 0.942608 5.29882 0.979605 5.29882 1.01818V1.45455H3.03047V1.01818ZM6.59503 7.12727H1.73427V2.32727H6.59503V7.12727ZM3.67857 3.49091V5.81818C3.67857 5.93391 3.62736 6.0449 3.5362 6.12674C3.44505 6.20857 3.32141 6.25455 3.19249 6.25455C3.06358 6.25455 2.93994 6.20857 2.84879 6.12674C2.75763 6.0449 2.70642 5.93391 2.70642 5.81818V3.49091C2.70642 3.37518 2.75763 3.26419 2.84879 3.18235C2.93994 3.10052 3.06358 3.05455 3.19249 3.05455C3.32141 3.05455 3.44505 3.10052 3.5362 3.18235C3.62736 3.26419 3.67857 3.37518 3.67857 3.49091ZM5.62287 3.49091V5.81818C5.62287 5.93391 5.57166 6.0449 5.48051 6.12674C5.38935 6.20857 5.26571 6.25455 5.1368 6.25455C5.00788 6.25455 4.88425 6.20857 4.79309 6.12674C4.70193 6.0449 4.65072 5.93391 4.65072 5.81818V3.49091C4.65072 3.37518 4.70193 3.26419 4.79309 3.18235C4.88425 3.10052 5.00788 3.05455 5.1368 3.05455C5.26571 3.05455 5.38935 3.10052 5.48051 3.18235C5.57166 3.26419 5.62287 3.37518 5.62287 3.49091Z"
                      fill="black"
                    />
                  </svg>
                  <h1 className={styles[`modal-title`]} tabIndex={-1}>
                    Delete order
                  </h1>
                  <p className={styles[`modal-description`]}>
                    {data.general.email} is going to be permenantly deleted.
                  </p>
                </span>
              </header>
              <div className={styles['modal-buttons']}>
                <Button type="nav" size="small" onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button type="nav" size="small" color="white" onClick={() => onClickDelete(data)}>
                  Delete
                </Button>
              </div>
            </div>
          }
        </UniversalModal>
      ) : modalType === 'more' ? (
        <UniversalModal
          showClose
          onClose={handleCloseModal}
          className={styles['custom-modal-type1']}>
          {currentStep === 1 && (
            <div className={styles[`modal-dialog`]}>
              <header className={styles['modal-header']}>
                <span className={styles[`modal-hero`]}>
                  <h1 className={styles[`modal-title`]} tabIndex={-1}>
                    More
                  </h1>
                  <p className={styles[`modal-subtitle`]}>User IP: {data.securityData?.ip}</p>
                  <p className={styles[`modal-description`]}>
                    Data was taken at the time when order was made.
                  </p>
                </span>
              </header>
              <div className={styles['modal-body']}>
                <h3 className={styles['modal-body-title']} style={{ fontWeight: 'bold' }}>
                  Description to the order
                </h3>
                <p className={styles[`modal-description`]} style={{ fontWeight: '600' }}>
                  {data.general?.description || 'Not provided'}
                </p>
                <div className={styles[`modal-body-section`]}>
                  <h3 className={styles['modal-body-title']} style={{ fontWeight: 'bold' }}>
                    {locationData !== null
                      ? `${locationData.country}, ${locationData.city}`
                      : `Get Customer Location`}
                  </h3>
                  {/* {locationData !== null && (
                    <p className={styles[`modal-description`]}>
                      {locationData.country}, {locationData.city}
                    </p>
                  )} */}
                  <Button
                    className={styles[`modal-order-button`]}
                    type="nav"
                    size="small"
                    color="transparent"
                    disabled={(isGettingLocation || locationData !== null) && 'black'}
                    onClick={handleGetLocation}>
                    Get Location
                  </Button>
                </div>
                <div className={styles[`modal-body-section`]}>
                  <h3 className={styles['modal-body-title']} style={{ fontWeight: 'bold' }}>
                    Status
                  </h3>
                  <p className={styles['modal-status']}>Change the status for this order</p>
                  <Button
                    className={styles[`modal-order-button`]}
                    type="nav"
                    size="small"
                    color="transparent"
                    onClick={handleNextStep}>
                    Change
                  </Button>
                </div>
                {/* <div className={styles[`modal-body-section`]}>
            
                </div> */}
                {/* <div className={styles['modal-buttons']}>
                  <Button type="nav" size="small" onClick={handleCloseModal}>
                    Cancel
                  </Button>
                  <Button
                    type="nav"
                    size="small"
                    color="white"
                    onClick={() => console.log('Deleted, (nope)')}>
                    Delete
                  </Button>
                </div> */}
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div className={styles[`modal-dialog`]}>
              <header className={styles['modal-header']}>
                <span className={styles[`modal-hero`]}>
                  <h1 className={styles[`modal-title`]} tabIndex={-1}>
                    Change status
                  </h1>
                  <p className={styles[`modal-description`]}>Choose a status for this order.</p>
                </span>
              </header>
              <div className={styles['modal-buttons']}>
                <Button
                  className={styles[`modal-order-button`]}
                  type="nav"
                  size="small"
                  color="transparent"
                  onClick={() => handleTypeChange('pending')}>
                  Pending
                </Button>
                <Button
                  className={styles[`modal-order-button`]}
                  type="nav"
                  size="small"
                  color="transparent"
                  onClick={() => handleTypeChange('completed')}>
                  Complete
                </Button>
                <Button
                  className={styles[`modal-order-button`]}
                  type="nav"
                  size="small"
                  color="transparent"
                  onClick={() => handleTypeChange('canceled')}>
                  Reject
                </Button>
              </div>
              <div className={styles['modal-buttons']}>
                <Button
                  className={styles[`modal-order-button`]}
                  type="nav"
                  size="small"
                  onClick={handlePreviousStep}>
                  Return
                </Button>
              </div>
            </div>
          )}
        </UniversalModal>
      ) : null}
    </>
  );
};

export default Item;
