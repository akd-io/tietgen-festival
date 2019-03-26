import { Fragment, Component } from 'react';
import colors from './colors';

export default class Modal extends Component {
  handleModalBackgroundOnClick = () => {
    this.props.setModalVisible(false);
  };

  handleModalOnClick = e => {
    e.stopPropagation();
  };

  handleOnClickClose = () => {
    this.props.setModalVisible(false);
  };

  render() {
    const { title, imageUrl, content } = this.props.modalData
      ? this.props.modalData
      : {
          title: '',
          imageUrl: '',
          content: <Fragment />,
        };

    return (
      <Fragment>
        <div
          className="modal-background"
          onClick={this.handleModalBackgroundOnClick}
        >
          <div className="modal" onClick={this.handleModalOnClick}>
            <a className="close-button" onClick={this.handleOnClickClose}>
              CLOSE
            </a>
            <div className="scroll-view">
              <img src={imageUrl} />
              <div className="content">
                <h1>{title}</h1>
                {content}
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .modal-background {
            opacity: ${this.props.visible ? '1' : '0'};
            visibility: ${this.props.visible ? 'visible' : 'hidden'};
          }
        `}</style>
        <style jsx>{`
          .modal-background {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 200;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s ease;
            transition-property: opacity, visibility;
          }
          .modal {
            position: absolute;
            width: 800px;
            height: 100%;
            margin-top: 40px;
            max-width: calc(100vw - 80px);
            max-height: calc(100vh - 80px);
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
            background-color: ${colors.lightblue};
            color: ${colors.pink};
          }
          .scroll-view {
            overflow-y: auto;
          }
          img {
            width: 100%;
            max-height: 50%;
            object-fit: cover;
          }
          .close-button {
            position: absolute;
            top: 10px;
            left: 10px;
            padding: 5px;
            padding-bottom: 0px;
            font-family: 'TypoPRO Bebas Neue', sans-serif;
            font-size: 2em;
            user-select: none;
            cursor: pointer;
            background-color: ${colors.yellow};
          }
          .content {
            box-sizing: border-box;
            width: 100%;
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            word-break: break-word;
            font-size: calc(1em + 0.3vw);
          }
          .content h1 {
            font-size: 2em;
          }
        `}</style>
      </Fragment>
    );
  }
}
