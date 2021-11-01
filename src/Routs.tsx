import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClassicTemplate from "./components/CVTemplates/Classic/ClassicTemplate";
import Navbar from "./components/Navbar";
import Selector from "./components/Selector";
import PersonalInfoDesignerForm from "./components/CVTemplates/Designer/Form/PersonalInfoForm";
import DesignerForm from "./components/CVTemplates/Designer/DesignerForm";
import FormContainer from "./components/FormContainer";
import Experience from "./components/Forms/Exp/Experience";
import PersonalInfoForm from "./components/CVTemplates/Classic/Forms/PersonalInfoForm";

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
          <Route exact path="/form">
            <FormContainer isDesigner />
          </Route>
          <Route exact path="/preview" component={ClassicTemplate} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routs;
