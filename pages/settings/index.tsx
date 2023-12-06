import AdminPanel from 'features/Careers/AdminPanel';
import React from 'react';

Landing.description = `Exp☻lore innovative solutions with Trimsy in Web Development, IT opportunities with support and more.`;

export default function Landing() {
  return (
    <>
      <main>{<AdminPanel />}</main>
    </>
  );
}
