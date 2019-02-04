import { Fragment } from "react";

export default () => {
  const links = [
    {
      text: "top",
      sectionID: "banner-section"
    },
    {
      text: "artists",
      sectionID: "artists-section"
    },
    {
      text: "activities",
      sectionID: "activities-section"
    },
    {
      text: "about",
      sectionID: "about-section"
    }
  ];
  const scrollToSection = sectionID => {
    console.log(sectionID);
    const menu = document.getElementById("menu");
    const section = document.getElementById(sectionID);
    const domRect = section.getBoundingClientRect();
    const newWindowY =
      sectionID === "banner-section"
        ? window.scrollY + domRect.top
        : window.scrollY + domRect.top - menu.getBoundingClientRect().height;
    window.scrollTo({
      top: newWindowY,
      left: 0,
      behavior: "smooth"
    });
  };
  return (
    <Fragment>
      <div id="menu" className="menu">
        <div className="menu-logo">TIETGEN FESTIVAL</div>
        <div className="menu-links">
          {links.map(link => (
            <a
              onClick={() => scrollToSection(link.sectionID)}
              className="menu-link"
              key={link.text}
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .menu {
          position: fixed;
          background: white;
          left: 0;
          top: 0;
          right: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
          padding-top: 1.5em;
          padding-bottom: 1.5em;
        }
        .menu-logo {
          font-family: "TypoPRO Bebas Neue", sans-serif;
          font-size: 1.5em;
          padding-left: 1em;
          padding-right: 1em;
        }
        .menu-links {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .menu-link {
          text-transform: uppercase;
          font-family: "TypoPRO Bebas Neue", sans-serif;
          font-size: 1.5em;
          padding-left: 1em;
          padding-right: 1em;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};
