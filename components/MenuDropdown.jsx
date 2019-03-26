import { Fragment } from 'react';

export default props => {
  return (
    <Fragment>
      <div className="menu-dropdown">
        {props.links.map(link => (
          <a key={link.text} onClick={() => props.onClick(link.sectionID)}>
            {link.text}
          </a>
        ))}
        <a href="https://ticket.livebackend.com/tietgen-festival/api/heyticket/v1/member">
          TICKET
        </a>
      </div>
      <style jsx>{`
        .menu-dropdown {
          transform: ${props.open ? 'none' : 'translate(0,-100%)'};
        }
      `}</style>
      <style jsx>{`
        .menu-dropdown {
          position: fixed;
          box-sizing: border-box;
          padding: 1.5em;
          top: 80px;
          width: 100%;
          display: flex;
          flex-direction: column;
          background-color: white;
          box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
          z-index: 50;
        }
        @media screen and (min-width: 600px) {
          .menu-dropdown {
            display: none;
          }
        }
        .menu-dropdown a {
          box-sizing: border-box;
          width: 100%;
          padding: 1.5em;
          text-transform: uppercase;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};
