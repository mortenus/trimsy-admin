import React from 'react';

import Item from './components/Item';
import styles from './FAQ.module.scss';

type TFAQ = {
  arr: {
    title: string;
    description: string;
    learnMoreUrl?: string;
  }[];
};

const FAQ = ({ arr }: TFAQ) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.intro}>
        <h2>Questions?</h2>
      </div>
      {arr.map((item, i) => (
        <Item key={i} description={item.description} learnMoreUrl={item.learnMoreUrl}>
          {item.title}
        </Item>
      ))}
    </section>
  );
};

export default FAQ;
