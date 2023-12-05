import React from 'react';

import styles from './404.module.scss';

Custom404.title = 'Page not found';

export default function Custom404() {
  return (
    <div className={styles.wrapper}>
      <h1>
        The page you’re looking for <br /> can’t be found.
      </h1>
    </div>
  );
}

Custom404.title = '404';
