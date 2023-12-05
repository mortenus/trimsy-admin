import React from 'react';
import { useRouter } from 'next/router';

export default function useLogout() {
  const router = useRouter();

  const logout = () => {
    router.push('/auth/signout');
  };

  return logout;
}
