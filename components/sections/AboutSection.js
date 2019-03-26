import { Section } from './Section';
import { SectionTitle } from './SectionTitle';
import colors from '../colors';

export const AboutSection = () => (
  <Section
    id="about-section"
    minHeight="100vh"
    color={colors.pink}
    backgroundColor={colors.lightblue}
  >
    <a
      className="ticket-button"
      href="https://ticket.livebackend.com/tietgen-festival/api/heyticket/v1/member"
    >
      Buy tickets
    </a>
    <br />
    <br />
    <br />
    <br />
    <SectionTitle>Tickets this year</SectionTitle>
    <p>
      Tietgen Festival is returning on the 3rd and 4th of May this year! Mark
      the dates in your calendar - It is going to be a blast.
    </p>
    <p>
      Stay tuned on this website for more updates about the festival, and see
      below for ticket information.
    </p>
    <p>
      Contact{' '}
      <a className="link" href="mailto:billet@tietgenfestival.dk">
        billet@tietgenfestival.dk
      </a>{' '}
      for questions about tickets.
    </p>
    <h2>Tickets for residents</h2>
    <p>
      All residents of Tietgenkollegiet can buy their own festival ticket at a
      special price, before the official ticket sale begins.
    </p>
    <p>
      The ticket sale for residents happens between February 14th at 20:00 and
      February 28th at 23:59. After this deadline, tickets can be purchased at
      normal price during the general ticket sale. Resident prices are 100 DKK
      for a one-day ticket, and 150 DKK for a two-day ticket, however you are
      more than welcome to pay the regular prices of 145 DKK/195 DKK if you want
      to support the festival.
    </p>
    <p>
      Buy your resident ticket by sending the above amount by MobilePay
      (MobilePay number available on the Tietgen Facebook Group), and write your
      room number as the message for the transfer.
    </p>
    <p>Your ticket will arrive in your physical mailbox.</p>
    <h2>Tickets for friends and neighbors</h2>
    <p>
      All friends of residents and neighbors of the Tietgen Residence Hall can
      purchase tickets for Tietgen Festival through the residents of the dorm,
      who will all receive a login for the general ticket sale in their
      mailboxes.
    </p>
    <p>
      The general ticket sale takes place between March 1st at 10:00 and April
      1st at 23:59. Prices are 145 DKK for one-day tickets, and 195 DKK for
      two-day tickets.
    </p>
    <p>
      Tickets are purchased with the login all residents have received in their
      mailbox. All residents can buy up to 10 tickets for their friends.
      However, be aware that tickets can get sold out, and residents are
      therefore not guaranteed 10 tickets.
    </p>
    <p>
      Ask your friend at the Tietgen Residence Hall to buy a ticket for you, or
      ask them for their login so you can do it yourself.
    </p>
    <p>Tickets are delivered to the email listed when you buy the tickets.</p>
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
    <p className="footer-disclaimer">
      Tietgen Festival is for residents of the dorm, friends of residents and
      neighbors.
    </p>
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
        font-size: calc(1.4em + 1.4vw);
        margin-top: 2.5em;
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
      .footer-disclaimer {
        opacity: 0.5;
        font-style: italic;
      }
    `}</style>
  </Section>
);
