import { Fragment, Component } from 'react';
import colors from '../../colors';

export default class Artist extends Component {
  handleOnClick = () => {
    this.props.setModalData({
      title: this.props.artist.name,
      imageUrl: this.props.artist.imageUrl,
      content: this.props.artist.description,
    });
  };

  render() {
    return (
      <Fragment>
        <a
          onClick={this.handleOnClick}
          onMouseOver={() => this.props.onMouseOver()}
          onMouseOut={() => this.props.onMouseOut()}
        >
          {this.props.artist.name}
        </a>
        <style jsx>{`
          a {
            background-color: ${this.props.backgroundColor};
          }
        `}</style>
        <style jsx>{`
          a,
          a:link,
          a:visited {
            display: inline-block;
            margin: 0.5rem;
            margin-left: 0;
            margin-right: 0;
            padding: 4rem;
            padding-bottom: 1rem;
            padding-top: 0.25rem;
            overflow-y: hidden;
            font-family: 'TypoPRO Bebas Neue', sans-serif;
            font-weight: bold;
            font-size: 4rem;
            line-height: 0.8em;
            text-align: center;
            word-break: break-word;
            transition: transform 0.1s ease;
            transform: skew(-20deg) scale(0.9);
            user-select: none;
            cursor: pointer;
          }
          a:hover,
          a:active {
            transform: skew(-20deg) scale(1);
          }
        `}</style>
      </Fragment>
    );
  }
}
