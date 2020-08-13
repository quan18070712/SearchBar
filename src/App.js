import React, { Component } from "react";
import Search from "./components/Search";
import ImageList from "./components/ImageList";

import { connect } from "react-redux";
import { changeTitle } from "./action";

class App extends Component {

  handleClick = () => {
    this.props.changeTitle("Change Done!");
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search />
        <h1>{this.props.title}</h1>
        <button onClick={this.handleClick}>Change Title</button>
        <ImageList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.title,
  };
};

export default connect(mapStateToProps, { changeTitle })(App);
