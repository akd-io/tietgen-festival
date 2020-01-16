import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';

export default () => (
  <>
    <Section
      id="tickets-section"
      minHeight="100vh"
      color={colors.pink}
      backgroundColor={colors.yellow}
    >
      <SectionTitle>Tickets this year</SectionTitle>
      <p>
      Tietgen Festival is returning on the 8th and 9th of May 2020! Mark the dates in your calendar!
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
      The general ticket sale takes place between March 1st at 10:00 and May 7th at 23:59.
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
        className="ticket-button"
        href="https://ticket.livebackend.com/tietgen-festival/api/heyticket/v1/member"
      >
        Buy tickets
      </a>
      <br />
      <br />
      <br />
      <div className="logo-container">
        <a href="https://www.facebook.com/TietgenFestival/">
          <i className="fa fa-facebook-square" />
        </a>
        <a href="https://www.instagram.com/Tietgen_Festival/">
          <i className="fa fa-instagram" />
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
    </Section>
    <style jsx>{`
      .ticket-button {
        padding: 1em;
        padding-top: 0.9em;
        padding-bottom: 0.7em;
        font-family: 'TypoPRO Bebas Neue', 'Roboto', sans-serif;
        font-size: 2em;
        color: ${colors.yellow};
        background-color: ${colors.pink};
        border: none;
        border-radius: 0.5em;
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
      }
      .disclaimer {
        opacity: 0.5;
        font-style: italic;
      }
    `}</style>
  </>
);
