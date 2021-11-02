import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import FormContainer from "./components/FormContainer";
import CvContainer from "./components/CvContainer";
import { useAppSelector } from "./redux/hooks";

const Routs = () => {
  const template = useAppSelector((state) => state.classic);
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
          {template.cvIdentifire.length && (
            <Route path="/form">
              <FormContainer />
            </Route>
          )}
          <Route exact path="/preview">
            <CvContainer />
          </Route>

          <Route path="/">
            <Selector />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Routs;
