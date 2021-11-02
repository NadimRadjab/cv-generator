import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import PersonalInfoForm from "./Forms/PersonalInfoForm";
import { Switch, Route } from "react-router-dom";
import Experience from "./Forms/Exp/Experience";
import ExtraSkills from "./Forms/ExtraSkills/ExtraSkills";
import AwardsCertificate from "./Forms/Awards&Certificate/Awards&Certificate";

type Props = {};
const FormContainer = (props: Props) => {
  const classic = useAppSelector((state) => state.classic);

  const dispatch = useAppDispatch();

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
          <PersonalInfoForm />
        </Route>
        <Route exact path="/form/exp" render={() => <Experience />} />

        {classic.cvIdentifire === "designer-01" && (
          <Route
            exact
            path="/form/awards"
            render={() => <AwardsCertificate />}
          />
        )}

        <Route exact path="/form/extr" render={() => <ExtraSkills />} />
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
