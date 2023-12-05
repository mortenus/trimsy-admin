import React from 'react';

import styles from './Intro.module.scss';

const Intro = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headline}>
          <h2>Let&apos;s support the people of Ukraine,</h2>
          <h3>
            any way we <span>can</span>
          </h3>
        </div>
        <p className={styles.text}>
          We, at Trimsy, condemn the war in Ukraine. <br /> Join us in helping those in need
        </p>
      </div>
    </>
  );
};

export default Intro;
