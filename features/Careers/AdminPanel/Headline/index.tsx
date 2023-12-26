import React from 'react';

import styles from './Headline.module.scss';

type THeadline = {
  title: string;
  description?: string;
  chlidren?: React.ReactNode;
};

const Headline = ({ title, description, chlidren }: THeadline) => {
  return (
    <div className={styles.info}>
      <div className={styles[`info__text`]}>
        <h2 className={styles[`info__text-title`]}>{title}</h2>
        {description && <p className={styles[`info__text-description`]}>{description}</p>}
      </div>

      {chlidren && <div className={styles.chidlren}>{chlidren}</div>}
    </div>
  );
};

export default Headline;
