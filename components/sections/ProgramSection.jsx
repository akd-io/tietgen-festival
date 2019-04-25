import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';

export default () => (
  <Section
    id="program-section"
    minHeight="100vh"
    color={colors.pink}
    backgroundColor={colors.lightblue}
  >
    <SectionTitle>PROGRAM</SectionTitle>
    <img
      src="/static/program.png"
      alt="Program of the Tietgen Festival, showing when artists and activities are happening."
    />
    <a className="download-button" href="/static/program.png" download>
      Download
    </a>
    <style jsx>{`
      .download-button {
        margin-top: 2em;
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
      img {
        width: 100%;
        max-width: 700px;
      }
    `}</style>
  </Section>
);
