import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang={'en'}>
      <Head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spartan:200,300,400,500,600,700,800"
          media="all"
        />
        <NextScript
          src={'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js'}
          type="text/javascript"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              'WebFont.load({ google: { families: ["Spartan:200,300,400,500,600,700,800"] } })',
            ),
          }}
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="logo" type="image/svg+xml" href="/images/logo.svg" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noodp,noydir" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
