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
    router.push('/');
  }, []);

  return <LoadingOverlay fullScreen />;
}

Logout.title = 'Log Out';
