import AuthWrapper from 'components/Auth/AuthWrapper';
import { Nav } from 'features/Careers';
import AdminPanel from 'features/Careers/AdminPanel';
import LoadingOverlay from 'features/LoadingOverlay';
import useCheckAuth from 'hooks/useCheckAuth';
import React from 'react';

Landing.description = `Exp☻lore innovative solutions with Trimsy in Web Development, IT opportunities with support and more.`;

export default function Landing() {
  //   const { isAuth } = useCheckAuth();

  return (
    <>
      <main>
        {
          <AdminPanel />

          /* <Web />

        <Careers /> */
        }
      </main>
    </>
  );
}
