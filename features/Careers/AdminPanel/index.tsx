import useInView from 'hooks/useInView';
import React from 'react';

import styles from './AdminPanel.module.scss';
import Nav from '../Nav';
import Orders from '../Orders';
import { useRouter } from 'next/router';
import Dashboard from '../Dashboard';

type TAdminPanel = {
  //   onScrollEvent: any;
  //   offset: number;
  //   children: React.ReactNode;
};

const AdminPanel = ({}: TAdminPanel) => {
  const router = useRouter();
  //   const ref = React.useRef(null);

  //   const { inView } = useInView({ ref, onScrollEvent, offset, mobileDisabled: true });

  return (
    <section className={styles.admin}>
      <Nav />
      {router.pathname === '/' && <Dashboard />}
      {router.pathname === '/orders' && <Orders />}
    </section>
  );
};

export default React.memo(AdminPanel);
