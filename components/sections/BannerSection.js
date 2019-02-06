import { Fragment, Component } from "react";
import { Section } from "./Section";
import colors from "../colors";

export class BannerSection extends Component {
  handleArrowDownOnClick = () => {
    this.scrollToSection("about-section");
  };
  scrollToSection = sectionID => {
    console.log(sectionID);
    const section = document.getElementById(sectionID);
    const domRect = section.getBoundingClientRect();
    const newWindowY = window.scrollY + domRect.top;
    window.scrollTo({
      top: newWindowY,
      left: 0,
      behavior: "smooth"
    });
  };
  render() {
    return (
      <Fragment>
        <Section id="banner-section" height="calc(100vh)" color={colors.yellow}>
          <video autoPlay loop muted>
            <source src="/static/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="container">
            <img src="static/logo.png" />
            <div className="subtitles">
              <h2 className="bannerSubTitle">
                3<sup>RD</sup> - 4<sup>TH</sup> MAY 2019
              </h2>
              <h2 className="bannerSubTitle">Tietgenkollegiet</h2>
            </div>
          </div>
          <a onClick={this.handleArrowDownOnClick}>
            <i className="fa fa-arrow-down" />
          </a>
        </Section>
        <style jsx>{`
          video {
            position: absolute;
            width: 100%;
            height: calc(100vh);
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
          sup {
            font-size: 0.5em;
          }
          .fa-arrow-down {
            position: absolute;
            bottom: 40px;
            font-size: 4rem;
            cursor: pointer;
          }
        `}</style>
      </Fragment>
    );
  }
}
