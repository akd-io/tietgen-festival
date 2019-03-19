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
            background-color: rgba(0, 0, 0, 0.5);
            transition: all 0.2s ease;
            transition-property: opacity, visibility;
          }
          .modal {
            position: absolute;
            top: 40px;
            right: 40px;
            bottom: 40px;
            left: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
            background-color: ${colors.lightblue};
            color: ${colors.pink};
          }
          .close-button {
            position: absolute;
            top: 30px;
            left: 30px;
            font-family: 'TypoPRO Bebas Neue', sans-serif;
            font-size: 1.5em;
            user-select: none;
            cursor: pointer;
          }
          .scroll-view {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin: 30px;
            overflow-y: auto;
          }
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            max-width: 700px;
          }
        `}</style>
      </Fragment>
    );
  }
}
