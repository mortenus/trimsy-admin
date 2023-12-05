import React from 'react';
import styles from './LoadingOverlay.module.scss';
import clsx from 'clsx';

type TLoadingOverlay = {
  fullScreen?: boolean;
};

const LoadingOverlay = ({ fullScreen }: TLoadingOverlay) => {
  return (
    <div
      className={clsx(styles.overlay, { [styles.fullScreen]: fullScreen })}
      //   style={{ zIndex: fullScreen ? 9999 : 10, position: fullScreen ? 'relative' : 'absolute' }}
    >
      <div className={styles.loader}></div>
    </div>
  );
};

export default LoadingOverlay;
