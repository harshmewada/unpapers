import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Tabdiv from "./components/tabs";
import Download from "./components/download";
import Wallpapers from "./components/wallpapers";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        {/* <Switch>
          <Route exact path="/" exact component={Intro} />

          <Route exact path="/wallpapers" component={Wallpapers} />

          <Route exact path="/download" component={Download} />
        </Switch> */}
        {/* <Intro /> */}
        <Navbar />
        <Tabdiv />
        {/* <Download /> */}
      </div>
    </Router>
  );
}

export default App;
