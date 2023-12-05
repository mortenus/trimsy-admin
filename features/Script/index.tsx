import React from 'react';
import NextScript from 'next/script';

import * as gtag from 'lib/gtag';

const Script = () => {
  return (
    <>
      {/* Google Tag Manager Code */}
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <NextScript
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <NextScript
        strategy="afterInteractive"
        id="google-tag-manager"
        async
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${gtag.GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `,
        }}
      />
    </>
  );
};

export default Script;
