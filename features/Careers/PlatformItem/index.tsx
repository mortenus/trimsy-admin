import useInView from 'hooks/useInView';
import React from 'react';

import styles from './PlatformItem.module.scss';

type TPlatformItem = {
  onScrollEvent: any;
  offset: number;
  children: React.ReactNode;
};

const PlatformItem = ({ onScrollEvent, offset, children }: TPlatformItem) => {
  const ref = React.useRef(null);

  const { inView } = useInView({ ref, onScrollEvent, offset, mobileDisabled: true });

  return (
    <div style={{ opacity: inView ? '1' : '0' }} className={styles.item} ref={ref}>
      <p>{children}</p>
    </div>
  );
};

export default React.memo(PlatformItem);
