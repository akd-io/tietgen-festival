import { useState } from 'react';
import MenuDropdown from './MenuDropdown';

const links = [
  {
    text: 'artists',
    sectionID: 'artists-section',
  },
  {
    text: 'activities',
    sectionID: 'activities-section',
  },
  {
    text: 'program',
    sectionID: 'program-section',
  },
  {
    text: 'about',
    sectionID: 'about-section',
  },
  {
    text: 'tickets',
    sectionID: 'tickets-section',
  },
];

export default () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = sectionID => {
    const menu = document.getElementById('menu');
    const section = document.getElementById(sectionID);

    if (section) {
      const domRect = section.getBoundingClientRect();
      const newWindowY =
        window.scrollY + domRect.top - menu.getBoundingClientRect().height;
      window.scrollTo({
        top: newWindowY,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const toggleOpen = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleDropDownClick = sectionID => {
    scrollToSection(sectionID);
    toggleOpen();
  };

  return (
    <>
      {/* This spacer fills the same space as the menu, but does not have position=fixed, meaning it will push down the page content, so as to not make the menu overlap the top of the banner section. */}
      <div className="spacer" />
      <div id="menu" className="menu">
        <div
          className="menu-logo"
          onClick={() => scrollToSection('banner-section')}
        >
          TIETGEN FESTIVAL
        </div>
        <div className="menu-links-container">
          {links.map(link => (
            <a onClick={() => scrollToSection(link.sectionID)} key={link.text}>
              {link.text}
            </a>
          ))}
        </div>
        <a className="menu-button" onClick={toggleOpen}>
          <i className="fa fa-bars" />
        </a>
      </div>
      <MenuDropdown links={links} open={open} onClick={handleDropDownClick} />
      <style jsx>{`
        .spacer {
          width: 100%;
          height: 80px;
        }
        .menu {
          position: fixed;
          background: white;
          box-sizing: border-box;
          height: 80px;
          left: 0;
          top: 0;
          right: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
          font-family: 'TypoPRO Bebas Neue', sans-serif;
          font-weight: bold;
          user-select: none;
          z-index: 100;
        }
        .menu-logo {
          font-size: 1.5em;
          padding-left: 1em;
          padding-right: 1em;
          cursor: pointer;
        }
        .menu-links-container {
          display: none;
          flex-direction: row;
          align-items: center;
        }
        @media screen and (min-width: 800px) {
          .menu-links-container {
            display: flex;
          }
          .menu-button,
          .menu-dropdown {
            display: none;
          }
        }
        a {
          cursor: pointer;
          text-transform: uppercase;
          font-size: 1.5em;
          color: black;
          padding-left: 1em;
          padding-right: 1em;
          text-align: center;
        }
      `}</style>
    </>
  );
};
