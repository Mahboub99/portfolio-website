import React, { Component } from "react";
import Projects from "../../DataBase/Projects";

import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      project: {}
    };
  }
  componentDidMount() {
    this.setState({ project: Projects[this.props.match.params.pId - 1] });
  }

  render() {
    console.log(this.state);
    return (
      <div className="project-current">
        <img
          src={this.state.project.photoLogo}
          className="Project-logo-current"
        ></img>
        <h1 className="Project-title-current">{this.state.project.name}</h1>
        <div className="Project-description-current">
          <p>{this.state.project.discreption}</p>
          <img
            className="project-Demo"
            alt={this.state.project.name}
            src={this.state.project.photoDemo}
          ></img>
        </div>
      </div>
    );
  }
}
export default Project;
