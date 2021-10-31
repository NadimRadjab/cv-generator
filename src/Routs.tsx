import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClassicTemplate from "./components/CVTemplates/Classic/ClassicTemplate";
import CassicForm from "./components/CVTemplates/Classic/ClassicForm";
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
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ClassicTemplate} />
          <Route exact path="/form" component={CassicForm} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routs;
