import useInView from 'hooks/useInView';
import React from 'react';

import styles from './AdminPanel.module.scss';
import Nav from '../Nav';
import Orders from '../Orders';

type TAdminPanel = {
  //   onScrollEvent: any;
  //   offset: number;
  //   children: React.ReactNode;
};

const AdminPanel = ({}: TAdminPanel) => {
  //   const ref = React.useRef(null);

  //   const { inView } = useInView({ ref, onScrollEvent, offset, mobileDisabled: true });

  return (
    <section className={styles.admin}>
      <Nav />
      <Orders />
    </section>
  );
};

export default React.memo(AdminPanel);
