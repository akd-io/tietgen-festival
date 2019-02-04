import { Fragment } from "react";
import { Section } from "../Section";
import { Artist } from "./Artist";
import { SectionTitle } from "../SectionTitle";
import colors from "../../colors";

export const ArtistsSection = () => {
  const artists = [
    {
      name: "MØ",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "THE JUJU EXCHANGE",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "FLUME",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "MURA MASA",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "VASSER",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "MARIBOU STATE",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "GALIMATIAS",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "NAO",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "TENNYSON",
      startTime: "13:00",
      endTime: "14:00"
    },
    {
      name: "KLLO",
      startTime: "13:00",
      endTime: "14:00"
    }
  ];

  return (
    <Fragment>
      <Section color={colors.green} backgroundColor={colors.yellow}>
        <SectionTitle>ARTISTS</SectionTitle>
        <div>
          {artists.map((artist, index) => (
            <Artist artist={artist} backgroundColor={colors.pink} key={artist.name} />
          ))}
        </div>
      </Section>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
          width: calc(100%);
          max-width: 700px;
        }
      `}</style>
    </Fragment>
  );
};
