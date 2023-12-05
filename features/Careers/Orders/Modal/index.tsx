import clsx from 'clsx';
import React from 'react';

import styles from './Modal.module.scss';
import useModal from './useModal';
import TModal from './Modal.types';

const Modal = ({ onClick }: TModal) => {
  const { ref, additionalRef, handleModalChange, showModal } = useModal();

  return (
    <>
      <div
        className={styles.more}
        style={{ background: showModal ? `#d1d1d1` : '' }}
        onClick={handleModalChange}
        ref={additionalRef}>
        <svg
          width="18"
          height="4"
          viewBox="0 0 18 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 2C4 2.53043 3.78929 3.03914 3.41421 3.41421C3.03914 3.78929 2.53043 4 2 4C1.46957 4 0.960859 3.78929 0.585786 3.41421C0.210714 3.03914 0 2.53043 0 2C0 1.46957 0.210714 0.96086 0.585786 0.585787C0.960859 0.210714 1.46957 0 2 0C2.53043 0 3.03914 0.210714 3.41421 0.585787C3.78929 0.96086 4 1.46957 4 2ZM11 2C11 2.53043 10.7893 3.03914 10.4142 3.41421C10.0391 3.78929 9.53043 4 9 4C8.46957 4 7.96086 3.78929 7.58579 3.41421C7.21071 3.03914 7 2.53043 7 2C7 1.46957 7.21071 0.96086 7.58579 0.585787C7.96086 0.210714 8.46957 0 9 0C9.53043 0 10.0391 0.210714 10.4142 0.585787C10.7893 0.96086 11 1.46957 11 2ZM18 2C18 2.53043 17.7893 3.03914 17.4142 3.41421C17.0391 3.78929 16.5304 4 16 4C15.4696 4 14.9609 3.78929 14.5858 3.41421C14.2107 3.03914 14 2.53043 14 2C14 1.46957 14.2107 0.96086 14.5858 0.585787C14.9609 0.210714 15.4696 0 16 0C16.5304 0 17.0391 0.210714 17.4142 0.585787C17.7893 0.96086 18 1.46957 18 2Z"
            // fill="black"
            style={{ fill: showModal ? `#000` : '#555' }}
          />
        </svg>
        {showModal && (
          <div className={clsx(styles.overflow, { [styles.overlayVisible]: showModal })}>
            <div className={styles.content} ref={ref}>
              <div className={clsx(styles.button, styles.delete)} onClick={() => onClick('delete')}>
                <svg
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

                <h2 className={styles.title}>Delete</h2>
              </div>
              <div
                className={clsx(styles.button, styles.additional)}
                onClick={() => onClick('more')}>
                <h2 className={styles.title}>More</h2>
                <svg
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11 5L1 5M11 5L6.71429 9M11 5L6.71429 1"
                    stroke="black"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;