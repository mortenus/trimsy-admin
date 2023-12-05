import React from 'react';

import styles from './Boost.module.scss';

import Button from 'components/Button';

import useInView from 'hooks/useInView';
import { Item } from './components';

type TBoost = {
  onScrollEvent: any;
};

const itemsArr = [
  {
    title: 'SEO',
    description: 'Get the SEO optimization your site need for perfect search visibility.',
  },
  {
    title: 'UI and UX',
    description: 'Loop forward for new UI and UI experience with the help of our experts.',
  },
  {
    title: 'Faster Loading',
    description: 'Our team ensures to bring the best loading of pages for the user.',
  },
  {
    title: 'Latest Solutions',
    description: 'Trimsy uses latest tech solutions to bring your website to new level.',
  },
];

const Boost = ({ onScrollEvent }: TBoost) => {
  const additionalRef = React.useRef(null);

  const { inView: additionalInView } = useInView({
    ref: additionalRef,
    onScrollEvent,
    offset: 200,
    oneTime: true,
  });

  const activeStyles = {
    opacity: 1,
    transform: `translateY(0)`,
  };

  return (
    <section className={styles.potentialWrap}>
      <div className={styles.wrapper}>
        <div className={styles.potential}>
          <div className={styles.title}>
            <h2>Boost your business with</h2>
            <h2>solid presence in Web</h2>
          </div>
        </div>
        <div ref={additionalRef} className={styles.additional}>
          {itemsArr.map((item) => (
            <Item style={additionalInView ? activeStyles : undefined} key={item.title} {...item} />
          ))}
        </div>
        <Button to="/development/services" color="black-inverse" size={'medium'}>
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default React.memo(Boost);
