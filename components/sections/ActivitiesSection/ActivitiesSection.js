import { Fragment } from 'react';
import { Section } from '../Section';
import { Activity } from './Activity';
import { SectionTitle } from '../SectionTitle';
import colors from '../../colors';

export const ActivitiesSection = () => {
  return (
    <Fragment>
      <Section
        id="activities-section"
        color={colors.pink}
        backgroundColor={colors.lightblue}
      >
        <SectionTitle>ACTIVITIES</SectionTitle>
        <h2>TO BE ANNOUNCED!</h2>
      </Section>
      <style jsx>{`
        h2 {
          font-size: calc(1.4em + 1.4vw);
        }
      `}</style>
    </Fragment>
  );
};
