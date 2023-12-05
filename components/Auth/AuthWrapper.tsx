import React from 'react';
import { useRouter } from 'next/router';

type TAuthWrapper = {
  children?: React.ReactNode;
};

const AuthWrapper = ({ children }: TAuthWrapper) => {
  const router = useRouter();

  React.useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (!isAuth) {
      router.push('/auth/signin'); // Redirect to login if not authenticated
    }
  }, [router]);

  return <>{children}</>;
};

export default AuthWrapper;
