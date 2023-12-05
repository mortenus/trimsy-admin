import React from 'react';

import styles from './Potential.module.scss';

import Button from 'components/Button';

import useInView from 'hooks/useInView';

type TPotential = {
  onScrollEvent: any;
};

const Potential = ({ onScrollEvent }: TPotential) => {
  const potentialRef = React.useRef(null);
  const additionalRef = React.useRef(null);

  const { inView: potentialInView } = useInView({ ref: potentialRef, onScrollEvent, offset: 200 });
  const { inView: additionalInView } = useInView({
    ref: additionalRef,
    onScrollEvent,
    offset: 200,
  });

  const activeStyles = {
    opacity: 1,
    transform: `translateY(0)`,
  };

  return (
    <section className={styles.potentialWrap}>
      <div className={styles.wrapper}>
        <div ref={potentialRef} className={styles.potential}>
          <div className={styles.title} style={potentialInView ? activeStyles : undefined}>
            <h2>Your potential,</h2>
            <h2>our solution</h2>
          </div>

          <div className={styles.action} style={potentialInView ? activeStyles : undefined}>
            <div className={styles.text}>
              <h4>Fast, targeted recruitment tailored to</h4>
              <h4>your business</h4>
            </div>

            <Button to="#contact" color={'black'}>
              Let&apos;s Talk
            </Button>
          </div>
        </div>
        <div
          ref={additionalRef}
          className={styles.additional}
          style={additionalInView ? activeStyles : undefined}>
          <div className={styles.item}>
            <h6>HR manager</h6>
            <p>Get dedicated help to develop your potential with Trimsy Careers</p>
          </div>
          <div className={styles.item}>
            <h6>24/7</h6>
            <p>Connect with Recruiter. Appoint at any time. We’re here to help.</p>
          </div>
          <div className={styles.item}>
            <h6>Expert consultation</h6>
            <p>Get direct access to recruiting experts on career guidance </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Potential;
