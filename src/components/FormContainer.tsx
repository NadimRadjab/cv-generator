import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Experience from "./Forms/Exp/Experience";
import ExtraSkills from "./Forms/ExtraSkills/ExtraSkills";
import AwardsCertificate from "./Forms/Awards&Certificate/Awards&Certificate";
import ObjectiveForm from "./Forms/Exp/ObjectiveForm";

type Props = {
  isDesigner: boolean;
};
const FormContainer = (props: Props) => {
  const classic = useAppSelector((state) => state.classic);

  const dispatch = useAppDispatch();

  const { url } = useRouteMatch();

  const classes = useStyles();
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",

        p: 5,
      }}
    >
      <Switch>
        <Route exact path="/form">
          <PersonalInfoForm isDesigner />
        </Route>
        <Route exact path="/form/exp" render={() => <Experience />} />
        <Route exact path="/form/awards" render={() => <AwardsCertificate />} />
        <Route
          exact
          path="/form/extr"
          render={() => <ExtraSkills isDesigner />}
        />
      </Switch>
    </Paper>
  );
};
const useStyles = makeStyles({
  root: {},
  formControl: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: 2,
  },
  title: {
    fontSize: "19px",
  },
});

export default FormContainer;
