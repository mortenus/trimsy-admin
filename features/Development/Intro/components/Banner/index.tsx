import Link from 'next/link';
import React from 'react';

import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.wrapper}>
      <svg
        width="57"
        height="40"
        viewBox="0 0 57 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect width="57" height="40" fill="url(#ukraine-svg)" />
        <defs>
          <pattern id="ukraine-svg" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use
              xlinkHref="#image0_75_7"
              transform="translate(0 -0.275) scale(0.037037 0.0527778)"
            />
          </pattern>
          <image
            id="image0_75_7"
            width="27"
            height="28"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAEXklEQVRIie2WvW8cRRjGf/Pu67nNYVnHxUSOk0CIrAgalAKJCgkJpaBLS8dHhRAF/AOcREVJQZEKGppUIAqgoqBEdKAElEQmH47jOGazvoz35mbfpdg73yUYBUFK3tOj06zmnt97s8/MLvxfj6HcY3MaDORvrtt/g02NBwAzs0fVQ7CBtAYHAg40/fr8+e66LvXuhYXVZPWRkTU5tVnT1MUzx5fX33n9tfUpywG8Mfgs/3zwZvWozj69cGGxLDsrKbEWaz2TyM7ERk7F1CxXVVoOMXWrvbGklMDGcTHXrRMr/RvXb9z46IuP3/5GAS5evPrWuXc/OXfqxNFvVetrXe8LAMTyOrmTTdZZTU6fvnIrO1277NTYssPRhJiEZEKVEiFEqqohhBFVTFRx1FnK3YnN4c6JsL39MtDCrm/dX2kOHT0bt+ysV8eCb5KK4qSjiIIoxlQCTmx+Ta0WRBwijkwzFszRWEbdSIoJn3AVgAJ4XUghws17FjVzuqCo94KoopqZqqIiaCaoCgKIzMKXREAykEwcDkeGIyPLREQcKso+DBEQaQ3FoSKICCqg4kSFFiKAExpxjZsPl3O0Q9dCmRvPlU4WYvY7nEzhrfuDEhGcm3cxsqyZqCZz4/Y7q3GuRmThQdhfvOdrbtzOmTVmpiRTQlTKoVAMoQyQkpKisHwoJ9f6QdhOUHzydCbOU1Np44AIGEJIOakSEgYWWfQFvXzISregv7JFT7dIqSRUic1t5VY4SjE6zp0yzmDP9y+zJ0/we7GGZELXK+o9KoqIkPtEPw+s9gtOHdnh9MoGq/0t1pZ3WOmVIBWkAFVFDIGqMmJM5J0lruw8xfc/Ch98NYG9/+p3rK39wp3xYa7/8STReojmdL2x2h9ypD/keD/SW4rgE6QIZhCNNBRiMqoqEqpICIlYRWKs6OQjFjs1p4/szv7Z1k7B8Up4YbXgxWPQ7eZ4L4gX2g3Vbt5RmQN+LjBtQBozHEY2lRiZgMMIlTGs5qKvqqQEd3cTLlM0JLxX1AteFNWpZC4gzSTatp/mgw5PEdlvS+cnOUAwVFrJvtFEk4mNo2ka56ZAM0eyBptTSg1OGlw2a2ECaz8NNrE1koGf+Ju1SrPFcyKYCHivmAmqtIcATirNoMHyvJOiqcJoBss1J/ddXAZQm1kDE4k2iDSoOvK8g6oCTqrKZBgSYXtMOYwURaAcBvbuj2w8HguYLPezvN/PaJpM92F3C/zmdmJxsecXvJF7be+ZKqCYQVkKG5sjinKXokjpfmRz915a37y9c6nYjRt7e2nz3u5oYzyuk7W9rfSWypMnn/XnXJbKfdjV6+HLazfDsV8v7z23tOhXu4cWur6j0uBsnCga62yHUb1163bx23CYfi7uukuX18trP/zErQMy8VBd+3DwXj+fZsJNogWw+MpL9DqHyJc6EBJ2vyTcuEK4vEN5kNVgMDvQBpOn/P7DfgCDAf/uHWTfeGb6j98//q/HVn8CR6Afpt9wIk0AAAAASUVORK5CYII="
          />
        </defs>
      </svg>

      <h5>We stand with Ukraine.</h5>

      <Link className={styles.link} href="/stands-with-ukraine" passHref>
        <span>More</span>
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M25 30L21.5 26.375L30.375 17.5H0V12.5H30.375L21.5 3.625L25 0L40 15L25 30Z"
            fill="white"
          />
        </svg>
      </Link>
    </div>
  );
};

export default React.memo(Banner);
