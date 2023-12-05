import clsx from 'clsx';
import { Button } from 'components';
import useInView from 'hooks/useInView';
import React from 'react';

import styles from './ContactUs.module.scss';

type TContactUs = {
  onScrollEvent: any;
};

const ContactUs = ({ onScrollEvent }: TContactUs) => {
  const ButtonRef = React.useRef(null);
  const { inView: ButtonInView } = useInView({
    ref: ButtonRef,
    onScrollEvent,
    oneTime: true,
  });

  return (
    <section className={styles.potentialWrap} id={'contact'}>
      <div className={styles.wrapper}>
        <div className={styles.potential}>
          <h2>{`Let's chat about your next project`}</h2>
          <p>Tell us how we can help you bring your ideas into reality.</p>
          <div className={clsx(styles.button, { [styles.active]: ButtonInView })} ref={ButtonRef}>
            <Button type="nav" to="/development/services">
              Let's work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
