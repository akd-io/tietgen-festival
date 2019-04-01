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
    <SectionTitle>ABOUT TIETGEN FESTIVAL</SectionTitle>
    <p>
      The Tietgen Festival is the annual festival at the Tietgen Residence Hall!
      The dorm houses 390 students from different educational backgrounds, once
      a year in May, all friends and neighbors of the dorm are invited to come
      into the circle and experience the Tietgen Spirit. The ambition is to
      create a festival where friends and neighbors can come and enjoy the dorm
      and its unique possibility for cultural mediation.
    </p>
    <p>
      The festival distinguishes itself from other festivals by being not just
      another party, but by being a festival which promotes curiosity, learning
      and cultural experiences alongside the great party! The festival is
      non-profit and is entirely run by volunteers from the dorm. All residents
      are invited to pitch in and help shape the festival from the festival
      vision:
    </p>
    <p>
      <i>
        “The Annual Tietgen Festival strives to engage residents to come
        together in order to invite surrounding neighbors and fellow peers to
        demystify Tietgen, promote cultural curiosity and celebrate the Tietgen
        spirit.
      </i>
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
      .disclaimer {
        opacity: 0.5;
        font-style: italic;
      }
    `}</style>
  </Section>
);
