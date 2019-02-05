import { Fragment } from "react";
import { Section } from "./Section";
import colors from "../colors";

export const BannerSection = () => (
  <Fragment>
    <Section
      id="banner-section"
      height="calc(100vh - 80px)"
      color={colors.yellow}
    >
      <video autoPlay loop muted>
        <source src="/static/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        <img src="static/logo.png" />
        <div className="subtitles">
          <h2 className="bannerSubTitle">May 4-5 2019</h2>
          <h2 className="bannerSubTitle">Tietgenkollegiet</h2>
        </div>
      </div>
    </Section>
    <style jsx>{`
      video {
        position: absolute;
        width: 100%;
        height: calc(100vh - 80px);
        z-index: -1;
        object-fit: cover;
      }
      .container {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
      img {
        width: 25em;
        margin-right: 2.5em;
        border-radius: 100%;
      }
      .subtitles {
        display: flex;
        flex-direction: column;
      }
      .bannerSubTitle {
        margin: 0;
        font-size: calc(25px + 3vw);
        text-shadow: 0px 0px 50px rgba(0, 0, 0, 0.5);
      }
    `}</style>
  </Fragment>
);
