import { Fragment, Component } from "react";
import colors from "./colors";
export default class Modal extends Component {
  render() {
    var contents;
    if (this.props.artist) {
      const artist = this.props.artist;
      contents = (
        <Fragment>
          <h1>{artist.name}</h1>
          <h2>
            {artist.startTime} - {artist.endTime}
          </h2>
        </Fragment>
      );
    } else if (this.props.activity) {
      const activity = this.props.activity;
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
        <div className="modal-background" onClick={() => console.log("clicked")}>
          <div
            className="modal"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {contents}
          </div>
        </div>
        <style jsx>{`
          .modal-background {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 200;
            background-color: rgba(0, 0, 0, 0.5);
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
            background-color: black;
            color: ${colors.pink};
            box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
          }
        `}</style>
      </Fragment>
    );
  }
}
