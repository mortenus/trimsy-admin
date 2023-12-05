import React from 'react';
import { useRouter } from 'next/router';
import LoadingOverlay from 'features/LoadingOverlay';

export default function Logout() {
  const router = useRouter();

  React.useEffect(() => {
    localStorage.clear();
    localStorage.setItem('isAuth', 'false');
  }, []);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return <LoadingOverlay fullScreen />;
}

Logout.title = 'Log Out';
