import useChangeStateOnSpace from 'hooks/useChangeStateOnSpace';
import Link from 'next/link';
import React from 'react';

import styles from './Item.module.scss';

type TItem = {
  description: string;
  learnMoreUrl?: string;
  children: React.ReactNode;
};

const Item = ({ description, children, learnMoreUrl }: TItem) => {
  const {
    handleStateChange: handleOpenChange,
    state: open,
    handleKeyDown,
  } = useChangeStateOnSpace();

  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    setHeight(open ? contentRef.current?.scrollHeight || 0 : 0);
  }, [open]);

  return (
    <div className={styles.wrapper}>
      <div
        className={styles.header}
        onClick={handleOpenChange}
        tabIndex={0}
        onKeyDown={handleKeyDown}>
        <h4 className={styles.headline}>{children}</h4>
        <svg
          className={styles.arrow}
          style={{ rotate: open ? '180deg' : '0deg' }}
          width="34"
          height="20"
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M34 3.01486L17 20L0 3.01486L3.0175 0L17 13.9703L30.9825 0L34 3.01486Z"
            fill="white"
          />
        </svg>
      </div>

      <div
        className={styles.description}
        ref={contentRef}
        style={{
          maxHeight: open ? `${height}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
          minHeight: '0px',
        }}>
        <p>{description}</p>
        {learnMoreUrl && <Link href={learnMoreUrl}>Learn More</Link>}
      </div>
    </div>
  );
};

export default Item;
