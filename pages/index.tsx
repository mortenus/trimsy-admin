import AuthWrapper from 'components/Auth/AuthWrapper';
import { Nav } from 'features/Careers';
import AdminPanelCareers from 'features/Careers/AdminPanel';
import LoadingOverlay from 'features/LoadingOverlay';
import useCheckAuth from 'hooks/useCheckAuth';
import { useRouter } from 'next/router';
import React from 'react';

Landing.description = `Exp☻lore innovative solutions with Trimsy in Web Development, IT opportunities with support and more.`;

export default function Landing() {
  //   const { isAuth } = useCheckAuth();

  //   const [currentDepartment, setCurrentDepartment] = React.useState<string | null>(
  //     localStorage.getItem('user') ? localStorage.getItem('user') : null,
  //   );

  const router = useRouter();
  const [currentDepartment, setCurrentDepartment] = React.useState('');

  React.useEffect(() => {
    // console.log('haha ', (localStorage.getItem('user')!.defaultDepartment.toString()));
    if (localStorage.getItem('user')) {
      const storedUser = localStorage.getItem('user');

      if (storedUser !== null) {
        const user = JSON.parse(storedUser);
        setCurrentDepartment(user.defaultDepartment);
      }
    }
  }, [router.pathname]);

  return (
    <>
      <main>
        {currentDepartment === 'development' ? (
          <div>dev</div>
        ) : currentDepartment === 'careers' ? (
          <AdminPanelCareers />
        ) : (
          <LoadingOverlay fullScreen />
        )}
      </main>
    </>
  );
}
