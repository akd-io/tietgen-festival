import Section from './Section';
import colors from '../colors';

export default () => (
  <>
    <Section
      id="banner-section"
      height="calc(100vh - 80px)"
      color={colors.yellow}
    >
      <img className="poster" src="/static/video_poster.jpg" />
      <video
        controls={false}
        autoPlay
        loop
        muted
        playsInline
        poster="/static/video_poster.jpg"
      >
        <source src="/static/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <img className="logo" src="static/logo.png" />
        <div className="title-container">
          <h2 className="title">
            8<sup>TH</sup> - 9<sup>TH</sup> MAY 2020
          </h2>
          <h2 className="title">Tietgenkollegiet</h2>
        </div>
      </div>
      <a
        className="ticket-button"
        href="https://ticket.livebackend.com/tietgen-festival/api/heyticket/v1/member"
      >
        Buy tickets
      </a>
    </Section>
    <style jsx>{`
      video,
      .poster {
        position: absolute;
        width: 100%;
        height: calc(100vh - 80px);
        z-index: -1;
        object-fit: cover;
      }
      video {
        display: none;
      }
      @media screen and (min-width: 800px) {
        video {
          display: block;
        }
        .poster {
          display: none;
        }
      }
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      .logo {
        width: 35vw;
        margin-right: 2vw;
        border-radius: 100%;
      }
      .title-container {
        display: flex;
        flex-direction: column;
      }
      .title {
        margin: 0;
        text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
        font-size: 8.5vw;
        word-break: normal;
      }
      sup {
        font-size: 0.5em;
      }
      .ticket-button {
        margin-top: 2em;
        padding: 1em;
        padding-top: 0.9em;
        padding-bottom: 0.7em;
        font-family: 'TypoPRO Bebas Neue', 'Roboto', sans-serif;
        font-size: 1.5em;
        color: ${colors.yellow};
        background-color: ${colors.pink};
        border: none;
        border-radius: 0.5em;
      }
      @media screen and (min-width: 800px) {
        .ticket-button {
          font-size: 2em;
        }
        .logo {
          width: calc(0.35 * 800px);
          margin-right: calc(0.02 * 800px);
        }
        .title {
          font-size: calc(0.085 * 800px);
        }
      }
    `}</style>
  </>
);
