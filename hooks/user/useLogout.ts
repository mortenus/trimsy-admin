import React from 'react';
import { useRouter } from 'next/router';

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    localStorage.clear();
    localStorage.setItem('isAuth', 'false');
    router.push('/auth/signin');
  };

  return logout;
}
