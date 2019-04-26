import { useState } from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';
import colors from '../colors';
import ButtonCloud from '../ButtonCloud';
import ButtonCloudButton from '../ButtonCloudButton';

const artists = [
  {
    name: 'BENAL',
    description: (
      <>
        <p>
          Ever since the hip hop duo from Copenhagen won the prestigious “P3
          Guld” award in 2017, things have been moving fast. Several sold out
          concerts, raving reviews and their incredible concert at Roskilde
          Festival 2018 was awarded 6 out of 6 stars by ‘Gaffa’ and quoted as
          “The best hip hop concerts to this date”.
        </p>
        <p>
          Benal surprise released their third studio album ‘Benjamin og Albert’
          on November 2nd 2018, which debuted straight onto the number 2 spot on
          the danish top album chart.
        </p>
        <p>
          You never quite know there you have them, but rumour has it that 2019
          will be the year where Benal french kisses your nose wanting to please
          and pleasure you. As Benjamin Hav, the rapper from Benal, puts it:
          “It’ll be the the best summer in your life, if you don’t mess it up
          again”. “I promise not to mess up, if you promise not to”, says
          Benjamin before before he gently caresses the producer of the duo,
          Albert’s, shoulder. “Now, this is gonna be a great summer, you
          bastard”.
        </p>
      </>
    ),
    imageUrl: '/static/artists/Benal.jpg',
  },
  {
    name: 'TOOMANYLEFTHANDS',
    description: (
      <>
        <p>
          With more than 600 shows in 28 countries, TooManyLeftHands has proven
          themselves as an impressive international club act. Their hard work
          has resulted in a number of awards including “DJ of the year” at
          Danish Deejay Awards and Club Awards, as well as a DMA for “Danish
          Club Act of the year”. Besides their awards, TooManyLeftHands received
          Gold for their mega-hit “Too Young To Die” and their songs have been
          streamed more than 40.000.000 times on Spotify.
        </p>
        <p>
          In other words, we guarantee you a party unlike anything you’ve seen
          before when TMLH takes the stage. Are you ready to dance the night
          away under the open sky? Contact a friend at Tietgen to secure your
          ticket.
        </p>
      </>
    ),
    imageUrl: '/static/artists/TooManyLeftHands.jpg',
  },
  {
    name: 'Johnny Deluxe',
    description: (
      <>
        <p>
          JOHNNY DELUXE are in the middle of their comeback. The generation who
          were still young when they first reigned the top charts are making
          them explode once more. More than 70 concerts around Denmark speaks
          for itself. In other words: JOHNNY DELUXE are back - with more hits
          and more party than ever before!
        </p>
        <p>
          If you have ever been to a party where someone played the songs
          “Drenge som mig” or “Elskovspony” you will know why the dancefloor is
          suddenly full of people. Now, imagine how it is going to look when
          JOHNNY DELUXE plays at this years Tietgen Festival. We can guarantee
          lots of dancing and a huge party, when the boys are playing Saturday
          night in the circle!
        </p>
      </>
    ),
    imageUrl: '/static/artists/JohnnyDeluxe.jpg',
  },
  {
    name: 'Clara',
    description: (
      <>
        <p>
          You know CLARA from the P3 Gold awards, where she was nominated in the
          P3 Talent category. Now you get to experience her live at Tietgen when
          she plays Saturday night!
        </p>
        <p>
          CLARA first started producing music all the way back in middle school
          when she was contacted by a producer. Since she has been dedicated to
          her music resulting in her first record deal. On her debut album
          'August Eighteen' are songs like 'Stop Pretending', 'Forgive Me' and
          'What They Say' which originate from her early teenage years, but also
          new material like the opening song 'Slippin'.
        </p>
      </>
    ),
    imageUrl: '/static/artists/Clara.jpg',
  },
  {
    name: 'Hedegaard',
    description: (
      <>
        <p>
          It was a wild party when HEDEGAARD took the stage at Tietgen Festival
          last year! Therefore expectations are sky high as we proudly present
          his return to the 2019 festival with an even bigger show!
        </p>
        <p>
          The award winning DJ and producer began his career remixing tracks on
          YouTube for night clubs. Since then it's been full speed ahead, and
          with hits like 'Ready to love you' and 'Need you right now' he has
          passed more than 20 million Spotify streams.
        </p>
      </>
    ),
    imageUrl: '/static/artists/Hedegaard.jpg',
  },
  {
    name: 'ASKLING',
    description: (
      <p>
        You don’t have to listen long to realize the 18 year old Emma ASKLING is
        a huge talent. You will surely recognize her voice when you hear her
        silky voice on songs like “So Precious” and the hit single “It’s You”,
        which recently surpassed 4.3 million streams on Spotify. Look forward to
        magical music when ASKLING takes the stages to enchant you in the warm
        summer night.
      </p>
    ),
    imageUrl: '/static/artists/Askling.jpg',
  },
  {
    name: 'Vava Voom',
    description: (
      <>
        <p>
          Look forward to VAVA VOOM and their playful lyrics, exciting rhythms
          and challenging tunes, delivered with a sexy and energetic attitude!
        </p>
        <p>
          VAVA VOOM is a 6-man orchestra consisting of 5 instrumentalists and a
          female singer who lives a youthful spirit through their jazzy licks
          and musical story telling. The band delivers a complete story through
          an immersive live performance. The groove is a fusion of 00's neo-soul
          references, which is complimented by their text universe inspired by a
          modern, urban attitude, taking you into the street life of graffiti,
          asphalt and 6 young spirits’ version of reality.
        </p>
      </>
    ),
    imageUrl: '/static/artists/VavaVoom.jpeg',
  },
  {
    name: 'Amanita',
    description: (
      <>
        <p>
          Grab a refreshing drink in the bar, find yourself a spot in the grass
          and experience completely new music when AMANITA takes the stage
          Saturday afternoon.
        </p>
        <p>
          You'll know Mille from from the trio "Place on Earth who won X Factor
          in 2018. She has now started the band AMANITA with a group of high
          school friends. The band consists of Mille Hassenkam on vocals, Rasmus
          Torp on guitar, Alex Stark on drums and Asmus Døssing on bass. With
          AMANITA Mille has been given an entirely new venue for her singing and
          songwriting. When her passion and focus on text and ambience is
          combined with David, Rasmus and Alex' musical talent, the music truly
          finds its' balance. Together the band finds a sound inspired by
          everything from Billie Eilish to Stevie Wonder, and are slowly
          developing their own sound.
        </p>
      </>
    ),
    imageUrl: '/static/artists/Amanita.jpeg',
  },
  {
    name: 'Aufori',
    description: (
      <>
        <p>
          Imagine the perfect morning. How about sitting in the sun, on a carpet
          in the soft grass with your friends, while enjoying a freshly baked
          bun and a cup of newly brewed coffee? Then try adding the wonderful
          tones of AUFORI in the background.
        </p>
        <p>
          Tietgen Festival is thrilled to present AUFORI. Their songs create a
          safe space to reflect over the world instead of worrying about it -
          and we would love to invite you guys to join us in that space. Moving
          within the genres of Indie / Singer-Songwriter, the songs embody a
          musical peace and tenderness. Listening to AUFORI is all about closing
          your eyes and let time stand still for a moment.
        </p>
      </>
    ),
    imageUrl: '/static/artists/Aufori.jpg',
  },
  {
    name: 'SIAMESE',
    description: (
      <p>
        Copenhagen based SIAMESE is back with the new album "Super Human". A
        successor to their successful release "Shameless" that appeared through
        American Artery Recordings, and streamed over 8 million times worldwide,
        along with sold out shows in Japan, UK and Germany. The upcoming LP
        "Super Human" is a style exercise in genre-rejecting songwriting. "Super
        Human”, like its predecessor, tries to advance the balance of the
        acceptable within the cramped walls of heavy music, while keeping the
        compositions extremely conservative. Max Martin would be proud. We look
        forward to their grandiose tunes and hard-hitting riffs adorning our
        beautiful scenery.
      </p>
    ),
    imageUrl: '/static/artists/Siamese.jpg',
  },
  {
    name: 'PARLÉ',
    description: (
      <>
        <p>
          With soul, pop, disco and everything in between, PARLÉ sets the stage
          for a musical universe of highlights from several decades boiled down
          to a catchy sound. The 5 members have since January 2016 composed
          songs which through their live sound and performance creates a soulful
          and vibrant relationship with their audience.
        </p>
        <p>
          Look forward to experiencing PARLÉ when they fire up the dance floor,
          kickstart your festival Friday night, and set you up for an amazing
          weekend with lots of music and party!
        </p>
      </>
    ),
    imageUrl: '/static/artists/Parle.jpg',
  },
  {
    name: 'COLD CAN FACTORY',
    description: (
      <p>
        In the jumble of new and experimenting music, there’s a need for bands
        brave enough to play all the music that already peaked the billboards.
        Cold Can Factory is luckily one of those bands! The band plays modern
        radio-hits, spiced up with old time favorites we’ve all been singing
        along to. In short, with Cold Can Factory on stage, you’re guaranteed a
        dance floor on fire!
      </p>
    ),
    imageUrl: '/static/artists/ColdCanFactory.jpg',
  },
  {
    name: 'RAP BATTLE',
    description: (
      <>
        <p>
          As tradition has it, we can once again present four incredible rappers
          for this year’s freestyle rap battle at Tietgen Festival! They are all
          among the danish battle rap elite, and has among others competed in
          the national championships on Freestyle Rap. They’ve proved time and
          again how they manage to fire up the festival and start a huge part
          with their creative minds, flawless technique and hilarious word play!
        </p>
        <p>
          Look forward to experience:{' '}
          <a href="https://www.facebook.com/Doctor.T.rap/">Dr. T</a>,{' '}
          <a href="https://www.facebook.com/mclillebror/">MC Lillebror</a>,{' '}
          <a href="https://www.facebook.com/HazziOfficial/">Hazzi</a> and last
          but not least, the reigning danish freestyle rap champion,{' '}
          <a href="https://www.facebook.com/denlettegade/">Den Lette Gade</a>!
        </p>
      </>
    ),
    imageUrl: '/static/artists/RapBattle.jpg',
  },
];

export default props => {
  const [selectedArtist, setSelectedArtist] = useState(null);

  const handleButtonOnClick = artist => {
    props.updateModalData({
      title: artist.name,
      imageUrl: artist.imageUrl,
      content: artist.description,
    });
  };

  const handleButtonMouseOut = index =>
    setSelectedArtist(prevIndex => (prevIndex === index ? null : index));

  return (
    <>
      <Section
        id="artists-section"
        color={colors.pink}
        backgroundColor={colors.yellow}
      >
        {artists.map((artist, index, array) =>
          artist.name && artist.description && artist.imageUrl ? (
            <img
              className={selectedArtist == index ? 'visible' : ''}
              key={artist.imageUrl}
              src={artist.imageUrl}
            />
          ) : null
        )}
        <SectionTitle>ARTISTS</SectionTitle>
        <ButtonCloud>
          {artists.map((artist, index, array) => (
            <ButtonCloudButton
              key={artist.name}
              color={colors.yellow}
              backgroundColor={colors.pink}
              onClick={() => handleButtonOnClick(artist)}
              onMouseOver={() => setSelectedArtist(index)}
              onMouseOut={() => handleButtonMouseOut(index)}
            >
              {artist.name}
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
