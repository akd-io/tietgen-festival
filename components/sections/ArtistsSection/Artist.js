import { Fragment } from "react";

export const Artist = props => (
  <Fragment>
    <div>
      <h2>{props.artist.name}</h2>
    </div>
    <style jsx>{`
      div {
        background-color: ${props.backgroundColor};
      }
    `}</style>
    <style jsx>{`
      h2 {
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 1.5em;
        line-height: 0.6em;
      }
      div {
        display: inline-block;
        padding: 1em;
        margin: 0.5em;
      }
    `}</style>
  </Fragment>
);
