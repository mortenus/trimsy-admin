import React from 'react';
import { useRouter } from 'next/router';

import axios from 'core/blog/axios';
import checkApiEndpoint from 'utils/checkApiEndpoint';

export default function useCheckAuth() {
  const router = useRouter();

  const API_ENDPOINT = checkApiEndpoint();

  const [isAuth, setIsAuth] = React.useState<boolean | null>(null);
  const [isSessionStarted, setIsSessionStarted] = React.useState(false);

  const [localSessionTimer, setLocalSessionTimer] = React.useState<any>(null);
  const [sessionTimer, setSessionTimer] = React.useState<any>(null);

  const checkIsAuth = () => {
    const isAuthLocalStorage = localStorage.getItem('isAuth');
    const token = localStorage.getItem('token');

    const user = localStorage.getItem('user');
    if (user) {
      const userParsed = JSON.parse(user);
      if (!userParsed && userParsed.length < 1) {
        return resetAuth();
      }
    } else {
      return resetAuth();
    }

    if (!isAuthLocalStorage || !token) {
      return resetAuth();
    } else {
      setIsAuth(true);
      console.log('auth');
    }
  };

  const resetAuth = () => {
    localStorage.clear();
    localStorage.setItem('isAuth', 'false');

    setIsAuth(false);
    setIsSessionStarted(false);
    stopSessionTimers();

    router.push('/auth/signin');
  };

  const startLocalSessionTimer = () => {
    setIsSessionStarted(true);
    const timeInSeconds = 300;

    const timer = setInterval(() => {
      const storedAuth = localStorage.getItem('isAuth') === 'true';

      setIsAuth(storedAuth);

      if (storedAuth) {
        checkIsAuth();
      } else {
        resetAuth();
      }
    }, timeInSeconds * 1000);

    setLocalSessionTimer(timer);
  };

  const startSessionTimer = () => {
    const timeInSeconds = 600;

    const timer = setInterval(() => {
      const storedAuth = localStorage.getItem('isAuth') === 'true';

      setIsAuth(storedAuth);

      if (storedAuth) {
        axios
          .get(`${API_ENDPOINT}/admin/me`)
          .then(({ data: backendUser }) => {
            //   localStorage.setItem('user', JSON.stringify(backendUser));

            const storedUser = localStorage.getItem('user');

            if (!storedUser) {
              resetAuth();
              return;
            }
            const storedUserParsed = JSON.parse(storedUser);

            if (!storedUserParsed || storedUserParsed.length < 1) {
              return resetAuth();
            }

            // Compare the objects
            const objectsAreEqual =
              JSON.stringify(storedUserParsed) === JSON.stringify(backendUser);

            // If they are different, update localStorage and push the new object
            if (!objectsAreEqual) {
              localStorage.setItem('user', JSON.stringify(backendUser));
            }
          })
          .catch((err) => {
            if (err.response && err.response.status === 403) {
              return resetAuth();
            }
          });
      } else {
        resetAuth();
      }
    }, timeInSeconds * 1000);

    setSessionTimer(timer);
  };

  const startTimers = () => {
    startLocalSessionTimer();
    startSessionTimer();
  };

  const stopSessionTimers = () => {
    if (sessionTimer) {
      clearInterval(sessionTimer);
    }

    if (localSessionTimer) {
      clearInterval(localSessionTimer);
    }
  };

  React.useEffect(() => {
    checkIsAuth();
  }, [router.pathname]);

  React.useEffect(() => {
    if (isAuth) {
      if (!isSessionStarted) {
        startTimers();
      }
    }

    return () => stopSessionTimers();
  }, [isAuth]);

  return { isAuth };
}
