import React, { Component } from "react";
import Hero from "../../images/hero.svg";
import Mahboub from "../../images/Mahboub.jpg";
import Programming from "../../images/Programming.png";
import { Element } from "react-scroll";
import NavBar from "../NavBar/NavBar";
import Tech from "../../images/Tech.png";

import "./Home.css";

function ProjectElement() {
  return <div className="Home-Project"></div>;
}
function Projects() {
  return (
    <div className="Home-Projects">
      <Element id="projects">
        <h1>Projects</h1>
      </Element>
      <div className="Projects-container">
        <ProjectElement />
      </div>
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill">
      <img src={props.image} alt={props.name}></img>
      <h4 style={{ marginTop: "0", color: "black" }}>{props.name} </h4>
      {props.name !== "Technologies" && (
        <div>
          <ul className="MySkillsList">
            <li>C++ / C / C# / Assemblyx86</li>
            <li>Java Script / TypeScript</li>
            <li>Python</li>
            <li>Matlab</li>
          </ul>
        </div>
      )}
      {props.name === "Technologies" && (
        <div>
          <ul className="MySkillsList">
            <li>React </li>
            <li>HTML5 / CSS</li>
            <li>ASP.net</li>
            <li>SQL Server</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <div className="About">
      <h1 className="Home-Title">Problem Solver & Front-end Developer</h1>
      <p className="oo">To infinity and beyond.... </p>
      <img className="avatar" src={Mahboub} alt="avatar"></img>
      <img className="hero" src={Hero} alt="hero"></img>
      <div className="skills-section">
        <h1 className="skill-section-title">
          Hi , I'm Ahmed Mahboub. Nice to meet you.
        </h1>
        <p className="About-me">
          I am a seconed year computer Enginerring student interested in problem
          solveing and front end development.I am a highly motivated student who
          is willing to learn, seek to achieve a high standard in whatever work
          I undertake and able to adapt quickly to any environment I am placed
          in.
        </p>
        <div className="skills">
          <Skill name="Programming Languages" image={Programming} />
          <Skill name="Technologies" image={Tech} />
        </div>
      </div>
    </div>
  );
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <About />
        <Projects />
      </div>
    );
  }
}
export default Home;
