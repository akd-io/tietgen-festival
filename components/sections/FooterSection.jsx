import { Fragment } from 'react';
import { Section } from '../sections/Section';

export default () => {
  const sponsorImageUrls = [
    '/static/sponsors/OrestadVandlaug.png',
    '/static/sponsors/OrestadUniversitetskvarter.png',
    '/static/sponsors/NordeaFonden.png',
    '/static/sponsors/AmagerVestLokaludvalg.jpg',
  ];
  return (
    <Fragment>
      <Section id="footer-section" color="black" backgroundColor="white">
        <h2>Thanks to our sponsors</h2>
        <div className="sponsor-images">
          {sponsorImageUrls.map(url => (
            <img src={url} key={url} />
          ))}
        </div>
      </Section>
      <style jsx>{`
        h2 {
          font-size: calc(1.4em + 1.4vw);
          margin-bottom: 1em;
          text-align: center;
        }
        .sponsor-images {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          max-width: 700px;
        }
        img {
          width: auto;
          height: auto;
          max-height: 75px;
          max-width: calc(100vw - 70px);
          margin: 35px;
        }
      `}</style>
    </Fragment>
  );
};
