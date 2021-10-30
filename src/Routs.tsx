import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CvCreator from "./components/CvCreator";
import ClassicTemplate from "./components/CVTemplates/Classic/ClassicTemplate";
import Navbar from "./components/UI/Navbar";

const Routs = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/" component={ClassicTemplate} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routs;
