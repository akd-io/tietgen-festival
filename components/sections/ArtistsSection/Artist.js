import { Fragment, Component } from "react";
import colors from "../../colors";

export default class Artist extends Component {
  handleOnClick = () => {
    this.props.setModalData({
      artist: this.props.artist
    });
  };

  render() {
    return (
      <Fragment>
        <a onClick={this.handleOnClick}>{this.props.artist.name}</a>
        <style jsx>{`
          a {
            background-color: ${this.props.backgroundColor};
          }
        `}</style>
        <style jsx>{`
          a {
            display: inline-block;
            margin: 0.5rem;
            margin-left: 0;
            margin-right: 0;
            padding: 4rem;
            padding-bottom: 1rem;
            padding-top: 0.5rem;
            font-family: "TypoPRO Bebas Neue", sans-serif;
            font-weight: bold;
            font-size: 4em;
            text-align: center;
            color: ${colors.yellow};
            line-height: 0.6em;
            transition: transform 0.1s ease;
            transform: skew(-20deg) scale(0.9);
            user-select: none;
            cursor: pointer;
          }
          a:hover {
            transform: skew(-20deg) scale(1);
          }
        `}</style>
      </Fragment>
    );
  }
}
