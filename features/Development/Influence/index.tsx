import React from 'react';

import styles from './Influence.module.scss';

import { Swiper } from 'components';

const slidesArr = [
  '/static/img/carousel/archakovBlog.jpg',
  '/static/img/carousel/reactPizza.jpg',
  '/static/img/carousel/talentForce.jpg',
  '/static/img/carousel/reactChat1.jpg',
  '/static/img/carousel/capacity.jpg',
];

const Influence = () => {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.intro}>
        <h2>Believing in seeing</h2>
        <p>Expand trending User Experience with substantial Level Up.</p>
      </div>
      <div className={styles.wrapper}>
        <Swiper images={slidesArr} />
      </div>
    </section>
  );
};

export default Influence;
