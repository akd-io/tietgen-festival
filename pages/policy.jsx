import Head from 'next/head';
import PolicySection from '../components/sections/PolicySection';

export default () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="noindex" />
        <title>Privacy Policy | Tietgen Festival</title>
        <link rel="icon" href="/static/favicon.png" sizes="32x32" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700"
          rel="stylesheet"
        />
      </Head>
      <PolicySection />
      <style jsx global>{`
        /* TypoPRO Bebas Neue Regular */
        @import url('https://cdn.jsdelivr.net/npm/@typopro/web-bebas-neue@3.7.5/TypoPRO-BebasNeue-Regular.css');
        html,
        body {
          margin: 0;
        }
        body {
          font-family: 'Roboto', sans-serif;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'TypoPRO Bebas Neue', 'Roboto', sans-serif;
          user-select: none;
        }
      `}</style>
    </>
  );
};
