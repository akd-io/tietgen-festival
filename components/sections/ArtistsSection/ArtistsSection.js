import { Fragment, Component } from "react";
import { Section } from "../Section";
import Artist from "./Artist";
import { SectionTitle } from "../SectionTitle";
import colors from "../../colors";

export default class ArtistsSection extends Component {
  artists = [
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
