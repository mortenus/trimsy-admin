import React from 'react';
import { useRouter } from 'next/router';

import styles from './Header.module.scss';

import { Button, LocalNav } from 'components';
import Logo from 'components/Logo';

import { Hamburger, HeaderLinks } from './components';
import { useInnerHeightResize } from 'hooks/useInnerHeightResize';
import clsx from 'clsx';
import { useCheckCurrentDepartment } from 'hooks/useCheckCurrentDepartment';
import UserProfile from './components/UserProfile';

// type THeaderBase = {};

// interface THeaderWithForm extends THeaderBase {
//   handleFormChange: Function;
// }

// interface THeaderClean extends THeaderBase {
//   clean: boolean;
// }

// type THeader = THeaderWithForm | THeaderClean;

const possibleDepartments = [
  {
    name: undefined,
    link: '/',
  },
  {
    name: 'blog',
    link: '/blog',
  },
];

type THeader = {
  handleFormChange: () => void;
  handleKeyDownOverflowChange: (e: any) => void;
  isAuth: boolean | null;
};

const Header = ({ handleFormChange, handleKeyDownOverflowChange, isAuth }: THeader) => {
  const router = useRouter();

  const handleCleanNav = () => router.pathname === '/stands-with-ukraine';
  const handleOverflowForm = () => router.pathname === '/';

  useInnerHeightResize();

  const { currentVisibleDepartment } = useCheckCurrentDepartment({ possibleDepartments });

  return (
    <>
      <header
        className={clsx(styles.wrapper, {
          [styles.disablePosition]: currentVisibleDepartment.name === 'blog',
        })}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <Logo />
            <div className={styles.wrap}>
              {handleCleanNav() ? (
                <></>
              ) : (
                <>
                  <ul className={styles.items}>
                    <HeaderLinks />
                  </ul>
                  {handleOverflowForm()
                    ? ''
                    : // <Button
                      //   type="nav"
                      //   onClick={handleFormChange}
                      //   onKeyDown={handleKeyDownOverflowChange}>
                      //   Contact us
                      // </Button>
                      ''}
                </>
              )}
            </div>
            <UserProfile />
            {isAuth && <Hamburger handleFormChange={handleFormChange} />}
          </nav>
        </div>
      </header>
      {currentVisibleDepartment.name === 'blog' && <LocalNav />}
    </>
  );
};

export default React.memo(Header);
