import { Fragment, Component } from "react";
import { BannerSection } from "../components/sections/BannerSection";
import ArtistsSection from "../components/sections/ArtistsSection/ArtistsSection";
import { ActivitiesSection } from "../components/sections/ActivitiesSection/ActivitiesSection";
import { AboutSection } from "../components/sections/AboutSection";
import Modal from "../components/Modal";
import Menu from "../components/Menu";

export default class Index extends Component {
  state = {
    modalData: null,
    modalVisible: false
  };

  setModalData = modalData => {
    this.setState({
      modalData,
      modalVisible: true
    });
  };

  setModalVisible = modalVisible => {
    this.setState({ modalVisible });
  };

  render() {
    return (
      <Fragment>
        <Menu />

        <BannerSection />
        <ArtistsSection setModalData={this.setModalData} />
        <ActivitiesSection />
        <AboutSection />
        {/* TODO: Add DownloadSection */}

        <Modal
          visible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          modalData={this.state.modalData}
        />

        <style jsx global>{`
          /* TypoPRO Bebas Neue Regular */
          @import url("https://cdn.jsdelivr.net/npm/@typopro/web-bebas-neue@3.7.5/TypoPRO-BebasNeue-Regular.css");
          html,
          body {
            margin: 0;
          }
          body {
            font-family: sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "TypoPRO Bebas Neue", sans-serif;
            user-select: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
