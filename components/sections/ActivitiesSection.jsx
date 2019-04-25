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
          <p>
            Start your friday night with CLUB 60, where you get the chance to
            enjoy a shot of beer every minute for one hour, while our DJ’s is
            playing different songs 🍻🍻🍻
          </p>
          <p>
            The DJ’s comments: "D’Joan is heating up the night with everything
            that you have wished for and everything you forgot to wish for. In
            60 minutes we will introduce you to: 60 different lives, 60
            emotions, 60 dimensions, 60 million, 60 eyebrows, 60 plums, 60 Kay
            Bojesen monkeys, 60 teflon pans, 60 feet, 60 olive oils, 60
            evisu-pants, 60 Monet paintings, 60 time zones, 60 mood rings, 60
            commercial banks, 60 religions, 60 different boogers and 60.000
            beers"
          </p>
        </>
      ),
      imageUrl: '/static/activities/Club60.jpeg',
    },
    {
      name: 'TIETGEN RACE',
      description: (
        <p>
          Friday afternoon, you have the opportunity to participate in the the
          ultimate Tietgen Race. You will (with a partner) be tested at sea, on
          land and in the air on both speed, balance, craftiness, concentration
          and courage. It is a relay race, where you participate in teams of two
          - preferably with a theme and accompanying costumes. There is room for
          a total of 10 teams; first come, first served. The two best teams
          compete in a final round, where they have the opportunity to win a
          great prize and eternal honor.
        </p>
      ),
      imageUrl: '/static/activities/TietgenRace.jpeg',
    },
    {
      name: 'SCIENCE SLAM',
      description: (
        <>
          <p>
            Saturday afternoon we invite you to watch a battle of science! Three
            cool residents of Tietgen will do a 5-7 minutes presentation
            inspired by a project they have worked on. They will each try to
            convince you that just their project is the most exciting.
          </p>
          <p>
            The brave participants are: <br />
            Mats, who will present the project: "Earlier signs of disease in the
            heart - new weapons in the fight against heart failure" <br />
            Yas, who will present: "The rules of war" <br />
            Andreas, who will present: "Career pressure and the
            contract-year-phenomenon among professional basketball players"
          </p>
          <p>
            When the participants have presented, the audience will, at the show
            of hands, decide who has the best project. Come and hear about some
            exciting projects from residents and support your favorite
            candidate!
          </p>
        </>
      ),
      imageUrl: '/static/activities/ScienceSlam.jpeg',
    },
    {
      name: 'BINGO',
      description: (
        <>
          <p>
            There are great prices on the table when we invite you to Tietgen
            Festival's answer to Bingo: TRASH OR TREASURE. You just need to show
            up in the circle, get a free bingo ticket and then you have the
            chance to win prizes with a total value of 10.000 kr. But of course
            there will be some obstacles to get the great prices. If you get
            bingo, the wheel of fortune will decide if you are going away with
            trash or treasure.
          </p>
          <p>
            If lucky you are able to win prices from: Helena Hjortshøj Studio,
            Grillens Burgerbar, La Glace, Bezzervizzer, Academic Books, SMUK,
            Homemate, La’ Belle Clinique, Redbull, Stylist Britt Kehler and many
            more.
          </p>
        </>
      ),
      imageUrl: '/static/activities/Bingo.png',
    },
    {
      name: 'STUDENT REVUES',
      description: (
        <>
          <p>
            Student Revues is a great tradition at Danish universities and
            Saturday afternoon we have invited two of the biggest: the revues of
            medicines and political science. They will each entertain for 30
            minutes with their best sketches. Join and get an insight into
            medical and political student humor - there is guarantee for
            laughing.
          </p>
        </>
      ),
      imageUrl: null,
    },
    {
      name: 'GIN & TONIC YOGA',
      description: (
        <p>
          Hungover and groggy from a crazy Friday night? Get your body back into
          it and quench your thirst at the same time when we host Gin&Tonic Yoga
          in the circle after the breakfast on Saturday. You will get a G&T
          which will be refilled as the Yoga teacher Ida will guide you through
          some great exercises. Yoga experience or just basic balance is not a
          requirement!
        </p>
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
