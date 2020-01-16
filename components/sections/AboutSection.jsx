import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';

export default () => (
  <Section
    id="about-section"
    minHeight="100vh"
    color={colors.yellow}
    backgroundColor={colors.pink}
  >
    <SectionTitle>ABOUT TIETGEN FESTIVAL</SectionTitle>
    <p>
   Tietgen Festival is the annual festival at the Tietgen Residence Hall! The dorm houses 390 students
   from different educational backgrounds and nationalities. Once a year in May, all friends and
   neighbors of the dorm are invited into the circle to experience the Tietgen Spirit. The ambition
   is to create a festival where friends and neighbors can enjoy the dorm and its unique possibility for cultural mediation.
    </p>
    <p>
      The festival distinguishes itself from other festivals by being not just another party, but by
      being a festival which promotes curiosity, learning and cultural experiences alongside the
      great party! The festival is non-profit and is entirely run by volunteers from the dorm.
      All residents are invited to pitch in and help shape the festival from the festival vision.
    </p>
    <p>
      <i>
        “The Annual Tietgen Festival strives to engage residents to come
        together in order to invite surrounding neighbors and fellow peers to
        demystify Tietgen, promote cultural curiosity and celebrate the Tietgen
        spirit.
      </i>
    </p>
    <style jsx>{`
      p {
        margin-top: 0em;
        margin-bottom: 1em;
        font-size: calc(1em + 0.3vw);
        width: 100%;
        max-width: 700px;
        text-align: center;
      }
    `}</style>
  </Section>
);
