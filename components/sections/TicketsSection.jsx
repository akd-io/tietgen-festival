import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';

export default () => (
  <>
    <Section
      id="tickets-section"
      minHeight="100vh"
      color={colors.dark}
      backgroundColor={colors.gradientdownwithwhite}
    >
      <SectionTitle>Tickets this year</SectionTitle>
      <p>
      Tietgen Festival is returning on the 4th and 5th of September 2020! Mark the dates in your calendar!
      </p>
      <p>
      Stay tuned on this website for more updates about the festival, and see below for ticket information.
      </p>
      <p>
        Contact{' '}
        <a className="link" href="mailto:billet@tietgenfestival.dk">
          billet@tietgenfestival.dk
        </a>{' '}
        for questions about tickets, and {' '}
        <a className="link" href="mailto:info@tietgenfestival.dk">
          info@tietgenfestival.dk
        </a>{' '} for general inquiries 
      </p>
      <h2>Tickets for friends and neighbors</h2>
      <p>
      All friends of residents and neighbors of the Tietgen Residence Hall can purchase
      tickets for Tietgen Festival through the residents of the dorm, who will all receive
      a login for the general ticket sale in their mailboxes.

      </p>
      <p>
      The general ticket sale takes place between March 1st at 10:00 and September 3rd at 23:59.
      Prices are <b>145 DKK</b> (+10,- ticket fee) for one-day tickets, <br />
      and <b>215 DKK</b> (+10,- ticket fee) for two-day tickets.
      </p>
      <p>
      Tickets are purchased with the login all residents have received in their mailbox.
      There is no limit on the number of tickets a resident can buy, but be aware that tickets
       can sell out, and residents are therefore not guaranteed tickets. <b>Last year 2-day tickets sold out within 60 hours!</b>
      </p>
      <p>
        Ask your friend at the Tietgen Residence Hall to buy a ticket for you,
        or ask them for their login so you can do it yourself.
      </p>
      <p>Tickets will be delivered to the email listed when you buy the tickets.</p>
      <p>
        Neighbors can contact{' '}
        <a href="mailto:billet@tietgenfestival.dk">billet@tietgenfestival.dk</a>{' '}
        with their name and address for access to the ticket sale.
      </p>
      <br />
      <br />
      <br />
      <br />
      <a
        className="ticket-button button-hover"
        href="https://ticket.livebackend.com/tietgen-festival/api/heyticket/v1/member"
      >
        Buy tickets
      </a>
      <br />
      <br />
      <br />
      <div className="logo-container">
        <a href="https://www.facebook.com/TietgenFestival/">
          <i className="fa fa-facebook-square button-hover" />
        </a>
        <a href="https://www.instagram.com/Tietgen_Festival/">
          <i className="fa fa-instagram button-hover" />
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      
      <p className="disclaimer">
        Tietgen Festival is for residents of the dorm, friends of residents and
        neighbors.
      </p>
      <p className="legal">
      Special terms and conditions for Tietgen Festival
      </p>
      <p className="legal">Tietgen Festival requires all attendants to be above the age of 18 after 16:00 every day and reserves the right to refuse entrance for anyone under the age of 18.
      </p>
      <p className="legal">Tietgen Festival has a zero-tolerance policy towards any kind of illegal drugs.
      </p>
      <p className="legal">Tietgen Festival reserves the right to refuse entrance to customers if they are evaluated as threatening for their own or others' safety by our professional security staff.
      </p>
      <p className="legal">Tietgen Festival does not allow attendants to bring their own alcoholic beverages to the festival site and reserves the right to confiscate alcoholic products.
      </p>
      <p className="legal">Tietgen Festival makes use of strobe lights and other powerful stage lighting.
      </p>
      <p className="legal">Tietgen Festival reserves the right to use pictures of guests who have purchased a ticket if they are taken by official Tietgen Festival photographers.
      </p>



    </Section>
    <style jsx>{`
      .ticket-button {
        padding: 1em;
        padding-top: 0.9em;
        padding-bottom: 0.7em;
        font-family: 'TypoPRO Bebas Neue', 'Roboto', sans-serif;
        font-size: 2em;
        color: ${colors.white};
        background-image: ${colors.gradientdown} !important;
        border: none;
        border-radius: 0.5em;
      }

      .button-hover {
        position: relative;
        top: 0;
        transition: top ease 200ms;
      }

      .button-hover:hover {
        top: -3px;
      }

      p {
        margin-top: 0em;
        margin-bottom: 1em;
        font-size: calc(1em + 0.3vw);
        width: 100%;
        max-width: 700px;
        text-align: center;
      }
      h2 {
        font-size: calc(1.8em + 1.4vw);
        margin-top: 1.2em;
        margin-bottom: 1em;
        text-align: center;
        background: linear-gradient(to right,#FF008C, #FFE600);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .logo-container {
        display: flex;
        flex-direction: row;
        margin-top: 2.5rem;
      }
      .fa,
      .fa:link,
      .fa:hover,
      .fa:active {
        font-size: 3rem;
        margin: 0.3rem;
        background: linear-gradient(#FF008C, #FFE600);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .disclaimer {
        padding-top: 0.9em;
        opacity: 0.5;
        font-style: italic;
        padding-bottom: 4em;
      }
      .legal {
        font-size: calc(0.2em + 0.5vw);
        opacity: 0.5;
        font-style: italic;
      }
    `}</style>
  </>
);
