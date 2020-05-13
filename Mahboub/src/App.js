import React, { Component } from "react";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Dark from "../src/themes/Dark";
import Light from "../src/themes/Light";
import { Header } from "./styles";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themeName: Dark
    };
    this.handleTheme = this.handleTheme.bind(this);
  }
  handleTheme(event) {
    if (this.state.themeName === Dark) this.setState({ themeName: Light });
    else this.setState({ themeName: Dark });
  }
  render() {
    return (
      <ThemeProvider theme={this.state.themeName}>
        <Router>
          <div className="App">
            <Header>
              <NavBar />
              <i
                class="far fa-lightbulb fa-2x theme-icon"
                onClick={this.handleTheme}
              ></i>

              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Header>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default App;
