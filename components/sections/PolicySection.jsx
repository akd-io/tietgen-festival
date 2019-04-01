import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';

export default () => (
  <Section
    id="policy-section"
    minHeight="100vh"
    color={colors.black}
    backgroundColor={colors.lightpink}
  >
    <SectionTitle>Privacy Policy</SectionTitle>
    <p>
      <h2>Do we store information about you?</h2>
      No, we only store the your feedback that you send through the about-page
      on the app. All feedback is stored anonymously. When you send your
      feedback, a random key is generated, that only your device know. Every
      time to change your feedback your device use the same key over and over
      again. Server has no information of who has which key - So your feedback
      can’t be tracked back to you. The feedback you sent is not shared with
      anyone besides the board of Tietgen Festival.
    </p>
    <style jsx>{`
      h2 {
        font-size: calc(1.4em + 1.4vw);
        margin-top: 2.5em;
        margin-bottom: 1em;
      }
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
