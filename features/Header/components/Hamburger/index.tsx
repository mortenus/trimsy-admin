import React from 'react';

import styles from './Hamburger.module.scss';

import THamburger from './Hamburger.types';

import HamburgerMenu from '../HamburgerMenu';
import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';

const linkRows = [
  {
    id: 0,
    title: 'Dashboard',
    href: '/',
  },
  //   {
  //     id: 1,
  //     title: 'Services',
  //     links: [
  //       {
  //         title: 'Web Development',
  //         description: 'Discover all the ways to get your presence in Web',
  //         href: '/development',
  //       },
  //       {
  //         title: 'Marketplace',
  //         description: 'Get a professional to help you in your IT journey',
  //         href: '/careers',
  //       },
  //     ],
  //   },
  {
    id: 2,
    title: 'Orders',
    href: '/orders',
  },
  {
    id: 3,
    title: 'Settings',
    href: '/Settings',
  },
];

const Hamburger = ({ handleFormChange }: THamburger) => {
  const [hamburgerActive, setHamburgerActive] = React.useState<boolean>(false);

  const handleHamburgerChange = () => setHamburgerActive(!hamburgerActive);

  useHideScrollOnTrue(hamburgerActive);

  return (
    <div className={styles.hamburger}>
      {hamburgerActive ? (
        <svg
          className={styles.svg}
          onClick={handleHamburgerChange}
          style={{ width: '20px', height: '20px' }}
          width="35"
          height="35"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.5 35L0 31.5L14 17.5L0 3.5L3.5 0L17.5 14L31.5 0L35 3.5L21 17.5L35 31.5L31.5 35L17.5 21L3.5 35Z"
            fill="black"
          />
        </svg>
      ) : (
        <svg
          className={styles.svg}
          onClick={handleHamburgerChange}
          style={{ width: '25px', height: '25px' }}
          width="91"
          height="61"
          viewBox="0 0 91 61"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3 58H88M3 30.5H88M3 3H88"
            stroke="black"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      <HamburgerMenu
        links={linkRows}
        handleFormChange={handleFormChange}
        handleHamburgerChange={handleHamburgerChange}
        hamburgerActive={hamburgerActive}
      />
    </div>
  );
};

export default React.memo(Hamburger);
