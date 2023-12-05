import React from 'react';

import styles from './TestimonialsCard.module.scss';

type TTestimonialsCard = {
  img: string;
  review_title: string;
  quote: string;
  author: string;
  position: string;
};

const TestimonialsCard = ({ img, review_title, quote, author, position }: TTestimonialsCard) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.company}>
          <div className={styles.icon}>
            <figure style={{ backgroundImage: `url(${img})` }} />
          </div>

          <h3 className={styles.title}>{review_title}</h3>
          <p className={styles.quote}>“{quote}“</p>
        </div>
        <div className={styles.author}>
          {author}, {position}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
