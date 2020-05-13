import React, { Component } from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="NavBar">
        <Link to="/" className="logo-container">
          <img className="logo" src={logo} alt="Mahboub logo"></img>
        </Link>
        <div className="Nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Projects</Link>
          <Link to="/">Contacts</Link>
        </div>
      </div>
    );
  }
}
export default NavBar;
