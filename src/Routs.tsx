import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClassicTemplate from "./components/CVTemplates/Classic/ClassicTemplate";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import DesignerForm from "./components/CVTemplates/Designer/DesignerForm";
import FormContainer from "./components/FormContainer";

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

          <Route exact path="/preview" component={ClassicTemplate} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routs;
