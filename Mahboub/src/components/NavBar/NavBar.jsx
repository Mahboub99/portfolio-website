import React, { Component } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.scrolToProjects = this.scrolToProjects.bind(this);
  }
  scrolToProjects(event) {}
  render() {
    return (
      <div className="NavBar">
        <Link to="/" className="logo-container">
          <img className="logo" src={logo} alt="Mahboub logo"></img>
        </Link>
        <div className="Nav-links">
          <Link to="/">Home</Link>
          <a href="/#projects">Projects</a>

          <a href="/#Contacts">Contacts</a>
        </div>
      </div>
    );
  }
}
export default NavBar;
