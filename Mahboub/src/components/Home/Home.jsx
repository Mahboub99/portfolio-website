import React, { Component } from "react";
import NavBar from "../NavBar/NavBar";

import "./Home.css";

function About() {
  return <div className=""></div>;
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <NavBar />
        <div></div>
      </div>
    );
  }
}
export default Home;
