import { Section } from "./Section";
import { SectionTitle } from "./SectionTitle";
import colors from "../colors";

export const PolicySection = () => (
  <Section
    id="policy-section"
    minHeight="100vh"
    color={colors.black}
    backgroundColor={colors.lightpink}
  >
    <SectionTitle>Privacy Policy</SectionTitle>
    <p>
      <h2>Do we store information about you?</h2>
      The only information we store is feedback from our Android and iOS apps.
      <br />
      All data is stored anonymously, and is not shared with anyone besides the
      board of Tietgen Festival.
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
