import clsx from 'clsx';
import useCodingEffect from 'hooks/useCodingEffect';
import useInView from 'hooks/useInView';
import React from 'react';

import styles from './ProfessionalItem.module.scss';

type TProfessionalItem = {
  onScrollEvent: any;
  children: string;
  offset: number;
};

const ProfessionalItem = ({ children, onScrollEvent, offset = 0 }: TProfessionalItem) => {
  const ref = React.useRef(null);

  const { inView } = useInView({ ref, onScrollEvent, offset });

  const { text, active } = useCodingEffect({ inView, children });

  return (
    <>
      <span ref={ref} className={clsx(styles.text, { [styles.active]: active })}>
        {text}
      </span>
      {children.split('. ').map((item) => {
        return (
          <span key={item} className={styles.backup}>
            {item}
          </span>
        );
      })}
    </>
  );
};

export default React.memo(ProfessionalItem);
