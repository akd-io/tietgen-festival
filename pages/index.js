import Head from "next/head";

export default () => (
  <>
    <Head>
      <title>Tietgen Festival</title>
      <meta name="description" content="TietgenFestival.dk is currently under construction." />
      <meta name="keywords" content="Tietgen,music,festival,Copenhagen" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <div className="container">
      <p className="construction-text">
        <b>TietgenFestival.dk</b> is currently under construction.
      </p>
      <p className="facebook-text">
        In the meantime, like us on <a href="https://www.facebook.com/TietgenFestival/">Facebook</a>
        !
      </p>
    </div>
    <style jsx>{`
      .container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        padding: 1em;
        box-sizing: border-box;
      }
      p {
        font-family: sans-serif;
        color: #ff008c;
        text-align: center;
        margin: 0;
        padding: calc(0.2em + 0.1vw);
      }
      .construction-text {
        font-size: calc(1em + 0.5vw);
        line-height: calc(1.1 * (1em + 0.5vw));
      }
      .facebook-text {
        font-size: calc(0.9em + 0.45vw);
        line-height: calc(1.1 * (0.8em + 0.45vw));
      }
      a,
      a:link,
      a:visited,
      a:hover,
      a:active {
        color: #ff008c;
      }
    `}</style>
    <style jsx global>{`
      html,
      body,
      #__next {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
      }
      body {
        background: #b4dff1;
      }
    `}</style>
  </>
);
