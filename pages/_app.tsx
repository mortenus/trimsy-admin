import React from 'react';
import type { AppProps } from 'next/app';
import type { NextComponentType } from 'next';

import '../styles/globals.scss';

import Head from 'next/head';

import useHideScrollOnTrue from 'hooks/useHideScrollOnTrue';
import Header from 'features/Header';
import Script from 'features/Script';
import { useRouter } from 'next/router';
import useChangeStateOnSpace from 'hooks/useChangeStateOnSpace';
import useToken from 'hooks/useToken';
import useCheckAuth from 'hooks/useCheckAuth';
import LoadingOverlay from 'features/LoadingOverlay';

type CustomAppProps = AppProps & {
  Component: NextComponentType;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const {
    handleStateChange: handleFormOverflowChange,
    handleKeyDown: handleKeyDownOverflowChange,
    state: formOpen,
  } = useChangeStateOnSpace();

  useHideScrollOnTrue(formOpen);
  //   useGtag();

  useToken();

  const router = useRouter();

  const { isAuth } = useCheckAuth();

  //   const router = useRouter();

  //   const [isAuth, setIsAuth] = React.useState(false);
  //   const [loading, setLoading] = React.useState(true);
  //   const [sessionTimer, setSessionTimer] = React.useState<any>(null);

  //   const startSessionTimer = () => {
  //     const timer = setInterval(() => {
  //       // Check authentication status periodically
  //       const storedAuth = localStorage.getItem('isAuth') === 'true';

  //       setIsAuth(storedAuth);

  //       if (storedAuth) {
  //         axios
  //           .get('http://localhost:3001/user/me')
  //           .then(({ data }) => {
  //             //   localStorage.setItem('user', JSON.stringify(data));
  //           })
  //           .catch((err) => {
  //             if (err.response && err.response.status === 403) {
  //               delete window.localStorage.token;
  //               delete window.localStorage.data;
  //             }
  //           });
  //       }
  //     }, 10 * 100); // Adjust the interval as needed

  //     setSessionTimer(timer);
  //   };

  //   const stopSessionTimer = () => {
  //     if (sessionTimer) {
  //       clearInterval(sessionTimer);
  //     }
  //   };

  //   React.useEffect(() => {
  //     // Check authentication status initially
  //     const storedAuth = localStorage.getItem('isAuth') === 'true';
  //     if (!storedAuth) router.push('/auth/signin');
  //     setIsAuth(storedAuth);

  //     setLoading(false);

  //     // Start the session timer
  //     startSessionTimer();

  //     // Clean up the session timer when the component unmounts
  //     return () => {
  //       stopSessionTimer();
  //     };
  //   }, []);

  return (
    <>
      <Script />
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Head>

      <Header
        handleFormChange={handleFormOverflowChange}
        handleKeyDownOverflowChange={handleKeyDownOverflowChange}
        isAuth={isAuth}
      />

      {!isAuth && router.pathname !== '/auth/signin' ? (
        <LoadingOverlay fullScreen />
      ) : (
        <Component
          {...pageProps}
          handleFormChange={handleFormOverflowChange}
          handleKeyDownOverflowChange={handleKeyDownOverflowChange}
        />
      )}
    </>
  );
}
