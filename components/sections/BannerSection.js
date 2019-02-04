import { Fragment } from "react";
import { Section } from "./Section";
import colors from "../colors";

export const BannerSection = () => (
  <Fragment>
    <Section
      id="banner-section"
      backgroundImage={"/static/image.png"}
      fullHeight
      color={colors.yellow}
    >
      <h1 className="bannerTitle">TIETGEN FESTIVAL</h1>
      <h2 className="bannerSubTitle">May 5th 2019</h2>
    </Section>
    <style jsx>{`
      .bannerTitle {
        margin: 0;
        font-size: calc(25px + 5vw);
      }
      .bannerSubTitle {
        margin: 0;
        font-size: calc(20px + 4vw);
      }
    `}</style>
  </Fragment>
);
