import { Fragment } from "react";

export const Artist = props => (
  <Fragment>
    <a>{props.artist.name}</a>
    <style jsx>{`
      a {
        background-color: ${props.backgroundColor};
      }
    `}</style>
    <style jsx>{`
      a {
        display: inline-block;
        padding: 1rem;
        margin: 0.5rem;
        font-family: "TypoPRO Bebas Neue", sans-serif;
        text-align: center;
        font-size: 1.5em;
        line-height: 0.6em;
        transition: transform 0.1s ease;
        transform: scale(0.9);
        user-select: none;
        cursor: pointer;
      }
      a:hover {
        transform: scale(1);
      }
    `}</style>
  </Fragment>
);
