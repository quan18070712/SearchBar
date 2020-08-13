import React, { Component } from "react";
import ImageCard from "./ImageCard";

import { connect } from "react-redux";

class ImageList extends Component {
  render() {
    // console.log(this.props.images);
    let html = this.props.images.map((item) => {
      return <ImageCard image={item} />;
    });

    console.log(html);
    return <div className="image-list">{html}</div>;
  }
}

const mapStateToProps = (state) => {
  return { images: state.image };
};

export default connect(mapStateToProps)(ImageList);
