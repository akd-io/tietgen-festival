import { Fragment, Component } from 'react';
import { Section } from '../Section';
import Artist from './Artist';
import { SectionTitle } from '../SectionTitle';
import colors from '../../colors';

export default class ArtistsSection extends Component {
  artists = [
    {
      name: 'BENAL',
      description: (
        <p>
          Ever since the hip hop duo from Copenhagen won the prestigious “P3
          Guld” award in 2017, things have been moving fast. Several sold out
          concerts, raving reviews and their incredible concert at Roskilde
          Festival 2018 was awarded 6 out of 6 stars by ‘Gaffa’ and quoted as
          “The best hip hop concerts to this date”.
          <br />
          Benal surprise released their third studio album ‘Benjamin og Albert’
          on November 2nd 2018, which debuted straight onto the number 2 spot on
          the danish top album chart.
          <br />
          You never quite know there you have them, but rumour has it that 2019
          will be the year where Benal french kisses your nose wanting to please
          and pleasure you. As Benjamin Hav, the rapper from Benal, puts it:
          “It’ll be the the best summer in your life, if you don’t mess it up
          again”. “I promise not to mess up, if you promise not to”, says
          Benjamin before before he gently caresses the producer of the duo,
          Albert’s, shoulder. “Now, this is gonna be a great summer, you
          bastard”.
        </p>
      ),
      imageUrl: '/static/artists/Benal.jpg',
    },
    {
      name: 'TOOMANYLEFTHANDS',
      description: (
        <div>
          With more than 600 shows in 28 countries, TooManyLeftHands has proven
          themselves as an impressive international club act. Their hard work
          has resulted in a number of awards including “DJ of the year” at
          Danish Deejay Awards and Club Awards, as well as a DMA for “Danish
          Club Act of the year”. Besides their awards, TooManyLeftHands received
          Gold for their mega-hit “Too Young To Die” and their songs have been
          streamed more than 40.000.000 times on Spotify.
          <br />
          In other words, we guarantee you a party unlike anything you’ve seen
          before when TMLH takes the stage. Are you ready to dance the night
          away under the open sky? Contact a friend at Tietgen to secure your
          ticket.
        </div>
      ),
      imageUrl: '/static/artists/TooManyLeftHands.jpg',
    },
    {
      name: 'SIAMESE',
      description: (
        <div>
          Copenhagen based SIAMESE is back with the new album "Super Human". A
          successor to their successful release "Shameless" that appeared
          through American Artery Recordings, and streamed over 8 million times
          worldwide, along with sold out shows in Japan, UK and Germany. The
          upcoming LP "Super Human" is a style exercise in genre-rejecting
          songwriting. "Super Human”, like its predecessor, tries to advance the
          balance of the acceptable within the cramped walls of heavy music,
          while keeping the compositions extremely conservative. Max Martin
          would be proud. We look forward to their grandiose tunes and
          hard-hitting riffs adorning our beautiful scenery.
        </div>
      ),
      imageUrl: null,
    },
    {
      name: 'PERLÉ',
      description: (
        <div>
          With soul, pop, disco and everything in between, PARLÉ sets the stage
          for a musical universe of highlights from several decades boiled down
          to a catchy sound. The 5 members have since January 2016 composed
          songs which through their live sound and performance creates a soulful
          and vibrant relationship with their audience.
          <br />
          Look forward to experiencing PARLÉ when they fire up the dance floor,
          kickstart your festival Friday night, and set you up for an amazing
          weekend with lots of music and party!
        </div>
      ),
      imageUrl: '/static/artists/parle.jpg',
    },
    {
      name: 'COLD CAN FACTORY',
      description: (
        <div>
          In the jumble of new and experimenting music, there’s a need for bands
          brave enough to play all the music that already peaked the billboards.
          Cold Can Factory is luckily one of those bands! The band plays modern
          radio-hits, spiced up with old time favorites we’ve all been singing
          along to. In short, with Cold Can Factory on stage, you’re guaranteed
          a dance floor on fire!
        </div>
      ),
      imageUrl: '/static/artists/ColdCanFactory.jpg',
    },
    {
      name: 'ASKLING',
      description: (
        <div>
          You don’t have to listen long to realize the 18 year old Emma ASKLING
          is a huge talent. You will surely recognize her voice when you hear
          her silky voice on songs like “So Precious” and the hit single “It’s
          You”, which recently surpassed 4.3 million streams on Spotify. Look
          forward to magical music when ASKLING takes the stages to enchant you
          in the warm summer night.
        </div>
      ),
      imageUrl: '/static/artists/Askling.jpg',
    },
    {
      name: 'RAP BATTLE',
      description: (
        <div>
          As tradition has it, we can once again present four incredible rappers
          for this year’s freestyle rap battle at Tietgen Festival! They are all
          among the danish battle rap elite, and has among others competed in
          the national championships on Freestyle Rap. They’ve proved time and
          again how they manage to fire up the festival and start a huge part
          with their creative minds, flawless technique and hilarious word play!
          <br />
          Look forward to experience: Dr. T, MC Lillebror, Hazzi and last but
          not least, the reigning danish freestyle rap champion, Den Lette Gade!
        </div>
      ),
      imageUrl: '/static/artists/RapBattle.jpg',
    },
  ];

  render() {
    return (
      <Fragment>
        <Section
          id="artists-section"
          color={colors.pink}
          backgroundColor={colors.yellow}
        >
          <SectionTitle>ARTISTS</SectionTitle>
          <div>
            {this.artists.map(artist => (
              <Artist
                setModalData={this.props.setModalData}
                artist={artist}
                backgroundColor={colors.pink}
                key={artist.name}
              />
            ))}
          </div>
        </Section>
        <style jsx>{`
          div {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
            max-width: 1100px;
          }
        `}</style>
      </Fragment>
    );
  }
}
