import React from "react";

import "./App.css";

import Navbar from "./components/navbar";
import Tabdiv from "./components/tabs";

import { BrowserRouter as Router } from "react-router-dom";

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
