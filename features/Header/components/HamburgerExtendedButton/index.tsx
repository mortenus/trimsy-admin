import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';

import styles from './HamburgerExtendedButton.module.scss';

import THamburgerExtendedButton from './HamburgerExtendedButton.types';

const HamburgerExtendedButton = ({ children, links, onClick }: THamburgerExtendedButton) => {
  const [open, setOpen] = React.useState(false);

  const handleOpenChange = () => setOpen(!open);

  const handleOnClick = () => {
    onClick();
    handleOpenChange();
  };

  return (
    <>
      <a>
        <li className={clsx(styles.item, { [styles.active]: open })} onClick={handleOpenChange}>
          {children}
          {open ? (
            <svg
              style={{ rotate: '180deg' }}
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              viewBox="6 6 12 12">
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="6 6 12 12">
              <path d="M7 9.79a.5.5 0 0 1 .854-.353L12 13.584l4.146-4.147a.5.5 0 1 1 .708.708L12 14.998l-4.854-4.853A.5.5 0 0 1 7 9.79Z"></path>
            </svg>
          )}
        </li>
      </a>

      <div className={clsx(styles.popup, { [styles.visible]: open })}>
        <ul className={styles.text}>
          {links.map((obj) => (
            <Link key={obj.href} className={styles.item} href={obj.href} onClick={handleOnClick}>
              <h4>{obj.title}</h4>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default React.memo(HamburgerExtendedButton);
