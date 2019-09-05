import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Intro from "./components/intro";
import Navbar from "./components/navbar";
import Tabdiv from "./components/tabs";
import Download from "./components/download";
import Wallpapers from "./components/wallpapers";
import Recents from "./components/recents";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  makeStyles
} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: "90vw",
    justifyContent: "center"
  }
}));
function App() {
  const classes = useStyles();
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
