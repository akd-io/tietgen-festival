import Section from '../Section';
import Activity from './Activity';
import SectionTitle from '../SectionTitle';
import colors from '../../colors';

export default () => {
  return (
    <>
      <Section
        id="activities-section"
        color={colors.yellow}
        backgroundColor={colors.pink}
      >
        <SectionTitle>ACTIVITIES</SectionTitle>
        <h2>TO BE ANNOUNCED!</h2>
      </Section>
      <style jsx>{`
        h2 {
          font-size: calc(1.4em + 1.4vw);
        }
      `}</style>
    </>
  );
};
