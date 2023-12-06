import useInView from 'hooks/useInView';
import React from 'react';

import styles from './AdminPanel.module.scss';
import Nav from '../Nav';
import { useRouter } from 'next/router';
// import Orders from '../Orders';
// import Dashboard from '../Dashboard';
// import Settings from '../Settings';

import dynamic from 'next/dynamic';

const Dashboard = dynamic(() => import('../Dashboard'));
const Orders = dynamic(() => import('../Orders'));
const Settings = dynamic(() => import('../Settings'));

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
      {router.pathname === '/settings' && <Settings />}
    </section>
  );
};

export default React.memo(AdminPanel);
