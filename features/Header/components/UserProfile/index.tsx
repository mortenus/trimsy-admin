import React from 'react';

import styles from './UserProfile.module.scss';
import Image from 'next/image';
import clsx from 'clsx';
import useProfile from './useProfile';
import useLogout from 'hooks/user/useLogout';
import { useRouter } from 'next/router';
import UniversalModal from 'components/UniversalModal';
import { Button } from 'components';
import axios from 'core/blog/axios';
import checkApiEndpoint from 'utils/checkApiEndpoint';

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
  const router = useRouter();

  const { showModal, handleModalChange, ref, additionalRef } = useProfile();

  const logout = useLogout();

  const handleLogout = () => {
    logout();
    setUserData(null);
    setIsLocalAuth(false);
  };

  const [userData, setUserData] = React.useState<null | IUser>(null);
  const [isLocalAuth, setIsLocalAuth] = React.useState(userData !== null);

  //   const userData = localStorage.getItem('user');

  React.useEffect(() => {
    if (localStorage.getItem('isAuth')) {
      const storedUser = localStorage.getItem('user');
      const isAuth = localStorage.getItem('isAuth');
      if (!storedUser && !isAuth) {
        return handleLogout();
      }

      if (storedUser === null) return;

      const storedUserParsed = JSON.parse(storedUser);

      setUserData(storedUserParsed);
      setIsLocalAuth(true);
    }
  }, [router.pathname]);

  const [isModalOpened, setIsModalOpened] = React.useState(false);

  const handleModalAdditionalChange = () => setIsModalOpened(!isModalOpened);

  const handleDepartmentChange = (department: string) => {
    const patchData = {
      department,
    };

    const API_ENDPOINT = checkApiEndpoint();

    axios
      .patch(`${API_ENDPOINT}/admin/updateDepartment`, patchData)
      .then(({ data: backendUser }) => {
        // Update the user of to change the department
        localStorage.setItem('user', JSON.stringify(backendUser));

        setIsModalOpened(false);
        if (router.pathname === '/') {
          router.reload();
        } else {
          router.push('/');
        }
      })
      .catch((error: any) => {
        console.error('Error patching department:', error.response?.data || error.message);
      });
  };

  return (
    <>
      {userData && isLocalAuth && (
        <div className={styles.wrap}>
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
                  <div className={styles['menu-modal']} ref={ref}>
                    {/* <div className={styles[`modal-button`]}>
                <span className={styles[`modal-button--title`]}>Change department</span>
              </div> */}
                    <div className={styles[`modal-button`]} onClick={handleModalAdditionalChange}>
                      <span className={styles[`modal-button--title`]}>Change Department</span>
                    </div>
                    <div className={styles[`modal-button`]} onClick={handleLogout}>
                      <span className={styles[`modal-button--title`]}>Log out</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.info}>
              <h3 className={styles.name}>{userData.fullname}</h3>
              <p className={styles.position}>{userData.companyPosition}</p>
            </div>
            {isModalOpened && (
              <UniversalModal showClose onClose={handleModalAdditionalChange}>
                {
                  <div className={styles[`modal-dialog`]}>
                    <header className={styles['modal-header']}>
                      <span className={styles[`modal-hero`]}>
                        <h1 className={styles[`modal-title`]} tabIndex={-1}>
                          Change Department
                        </h1>
                        <p className={styles[`modal-description`]}>Switch between departments</p>
                      </span>
                    </header>
                    <div className={styles['modal-body--flex']}>
                      <div className={styles[`modal-buttons`]}>
                        <Button
                          className={styles[`modal-order-button`]}
                          type="nav"
                          size="small"
                          color="transparent"
                          onClick={() => handleDepartmentChange('development')}>
                          Development
                        </Button>
                        <Button
                          className={styles[`modal-order-button`]}
                          type="nav"
                          size="small"
                          color="transparent"
                          onClick={() => handleDepartmentChange('careers')}>
                          Careers
                        </Button>
                      </div>
                    </div>
                  </div>
                }
              </UniversalModal>
            )}
          </>
        </div>
      )}
    </>
  );
};

export default UserProfile;
