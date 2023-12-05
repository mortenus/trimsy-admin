import React from 'react';

import styles from './UserProfile.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import useProfile from './useProfile';
import useLogout from 'hooks/user/useLogout';
import { useRouter } from 'next/router';

interface IUser {
  email: string;
  fullname: string;
  password?: string;
  confirmed?: boolean;
  confirm_hash?: any;
  imageUrl: string;
  companyPosition: string;
}

const UserProfile = () => {
  const { showModal, handleModalChange, ref, additionalRef } = useProfile();

  const logout = useLogout();

  const [userData, setUserData] = React.useState<null | IUser>(null);

  //   const userData = localStorage.getItem('user');
  const router = useRouter();

  React.useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) {
        logout();
        return;
      }
      const storedUserParsed = JSON.parse(storedUser);

      setUserData(storedUserParsed);
    }
  }, [router.pathname]);

  return (
    <div className={styles.wrap}>
      {userData && (
        <>
          <div className={styles.menu} onClick={handleModalChange} ref={additionalRef}>
            <div className={styles.image}>
              <Image fill src={userData.imageUrl} alt={'Profile Image'} />
            </div>
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ transform: showModal ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <path
                d="M6.36403 4.94983L11.314 -0.00016797L12.728 1.41383L6.36403 7.77783L2.72592e-05 1.41383L1.41503 -0.000168836L6.36503 4.94983"
                fill="black"
              />
            </svg>
            {showModal && (
              <div className={clsx(styles.overflow, { [styles.overlayVisible]: showModal })}>
                <div className={styles.modal} ref={ref}>
                  {/* <div className={styles[`modal-button`]}>
                <span className={styles[`modal-button--title`]}>Change department</span>
              </div> */}
                  <div className={styles[`modal-button`]}>
                    <span className={styles[`modal-button--title`]} onClick={logout}>
                      Log out
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className={styles.info}>
            <h3 className={styles.name}>{userData.fullname}</h3>
            <p className={styles.position}>{userData.companyPosition}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfile;
