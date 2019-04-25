import { useState } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';
import ButtonCloud from '../ButtonCloud';
import ButtonCloudButton from '../ButtonCloudButton';

export default props => {
  const activities = [
    {
      name: 'CLUB 60',
      description: (
        <>
          <p>Asdf.</p>
          <p>Asdf.</p>
        </>
      ),
      imageUrl: '/static/activities/Club60.jpeg',
    },
    {
      name: 'TIETGEN RACE',
      description: (
        <>
          <p>Asdf.</p>
          <p>Asdf.</p>
        </>
      ),
      imageUrl: '/static/activities/TietgenRace.jpeg',
    },
    {
      name: 'SCIENCE SLAM',
      description: (
        <>
          <p>Asdf.</p>
          <p>Asdf.</p>
        </>
      ),
      imageUrl: '/static/activities/ScienceSlam.jpeg',
    },
    {
      name: 'BINGO',
      description: (
        <>
          <p>Asdf.</p>
          <p>Asdf.</p>
        </>
      ),
      imageUrl: '/static/activities/Bingo.png',
    },
    {
      name: 'STUDENT REVUES',
      description: (
        <>
          <p>Asdf.</p>
          <p>Asdf.</p>
        </>
      ),
      imageUrl: null,
    },
    {
      name: 'GIN & TONIC YOGA',
      description: (
        <>
          <p>Asdf.</p>
          <p>Asdf.</p>
        </>
      ),
      imageUrl: '/static/activities/GinTonicYoga.jpeg',
    },
  ];
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleButtonOnClick = activity => {
    props.updateModalData({
      title: activity.name,
      imageUrl: activity.imageUrl,
      content: activity.description,
    });
  };

  const handleButtonMouseOut = index =>
    setSelectedActivity(prevIndex => (prevIndex === index ? null : index));

  return (
    <>
      <Section
        id="activities-section"
        color={colors.yellow}
        backgroundColor={colors.pink}
      >
        {activities.map((activity, index, array) =>
          activity.name && activity.description && activity.imageUrl ? (
            <img
              className={selectedActivity == index ? 'visible' : ''}
              key={activity.imageUrl}
              src={activity.imageUrl}
            />
          ) : null
        )}
        <SectionTitle>ACTIVITIES</SectionTitle>
        <ButtonCloud>
          {activities.map((activity, index, array) => (
            <ButtonCloudButton
              key={activity.name}
              color={colors.pink}
              backgroundColor={colors.yellow}
              onClick={() => handleButtonOnClick(activity)}
              onMouseOver={() => setSelectedActivity(index)}
              onMouseOut={() => handleButtonMouseOut(index)}
            >
              {activity.name}
            </ButtonCloudButton>
          ))}
        </ButtonCloud>
      </Section>
      <style jsx>{`
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: opacity 0.1s ease;
          opacity: 0;
          object-fit: cover;
        }
        .visible {
          opacity: 1;
        }
      `}</style>
    </>
  );
};
