import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import FormContainer from "./components/FormContainer";
import CvContainer from "./components/CvContainer";

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
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Selector} />
          <Route path="/form" component={() => <FormContainer isDesigner />} />
          <Route exact path="/preview" component={CvContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routs;
