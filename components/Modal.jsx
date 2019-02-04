import { Fragment, Component } from "react";
import colors from "./colors";

export default class Modal extends Component {
  handleModalBackgroundOnClick = () => {
    this.props.setModalVisible(false);
  };

  handleModalOnClick = e => {
    e.stopPropagation();
  };

  render() {
    const data = this.props.modalData;
    console.log(data);
    var contents;
    if (data && data.artist) {
      const artist = data.artist;
      contents = (
        <Fragment>
          <h1>{artist.name}</h1>
          <h2>
            {artist.startTime} - {artist.endTime}
          </h2>
        </Fragment>
      );
    } else if (data && data.activity) {
      const activity = data.activity;
      contents = (
        <Fragment>
          <h1>{activity.name}</h1>
          <h2>
            {activity.startTime} - {activity.endTime}
          </h2>
        </Fragment>
      );
    }
    return (
      <Fragment>
        <div className="modal-background" onClick={this.handleModalBackgroundOnClick}>
          <div className="modal" onClick={this.handleModalOnClick}>
            <div className="content">
              {contents}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rhoncus sem et sapien
                maximus pulvinar. Duis condimentum lacinia sem ut elementum. Sed et augue vulputate,
                lacinia mauris vitae, vestibulum eros. Aenean tincidunt ac ipsum et finibus.
                Suspendisse et volutpat ante, nec imperdiet nulla. Mauris tincidunt tempor arcu
                vitae pellentesque. Proin suscipit, mauris vitae posuere fermentum, massa tellus
                malesuada dui, nec porta sapien purus posuere elit. Praesent dictum turpis vel felis
                blandit vulputate. Donec hendrerit, sem ut eleifend ultricies, felis augue elementum
                libero, non accumsan diam lorem bibendum odio. Phasellus a dui aliquet, vestibulum
                mi quis, dictum orci. Nulla facilisi. Suspendisse potenti.
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .modal-background {
            opacity: ${this.props.visible ? "1" : "0"};
            visibility: ${this.props.visible ? "visible" : "hidden"};
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
            padding: 30px;
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
            background-color: ${colors.lightblue};
            color: ${colors.pink};
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
