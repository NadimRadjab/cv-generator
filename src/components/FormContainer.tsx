import { Button, Paper, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import {
  addAwardsData,
  addCertificationsData,
  addEducationData,
  addExperienceData,
  addLanguageData,
} from "../redux/features/ClassicTemplate/infoSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import ExperienceForm from "./Forms/Exp/ExperienceForm";
import ComputerSkillsForm from "./CVTemplates/Classic/Forms/ComputerSkillsForm";
import EducationForm from "./Forms/Exp/EducationForm";
import LanguageForm from "./CVTemplates/Classic/Forms/LanguageForm";
import PersonalInfoForm from "./CVTemplates/Classic/Forms/PersonalInfoForm";
import CertificateForm from "./Forms/CertificateForm";
import AwardsForm from "./Forms/AwardsForm";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Experience from "./Forms/Exp/Experience";

type Props = {
  isDesigner: boolean;
};
const FormContainer = (props: Props) => {
  const classic = useAppSelector((state) => state.classic);

  const dispatch = useAppDispatch();
  const handleExperience = () => {
    dispatch(addExperienceData());
  };
  const handleEducation = () => {
    dispatch(addEducationData());
  };
  const handleLanguage = () => {
    dispatch(addLanguageData());
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper
        sx={{
          display: "flex",
          p: 5,
        }}
      >
        <Switch>
          <Route path="/">
            <PersonalInfoForm isDesigner />
          </Route>
          <Route path="/exp">
            <Experience />
          </Route>
        </Switch>

        {/* <Box className={classes.formControl}>
          <Typography className={classes.title}>Personal Info</Typography>
          {/* <PersonalInfoForm isDesigner /> */}

        {/* <Box
            sx={{
              alignSelf: "flex-start",
              width: "100%",
              mt: 2,
              textAlign: "center",
            }}
          >
            <Typography className={classes.title}>Additional skills</Typography>
            <ComputerSkillsForm />
            <Box>
              {classic.languages.map((info) => {
                return <LanguageForm key={info.id} info={info} />;
              })}
              <Box>
                <Button onClick={handleLanguage}>Add Language</Button>
              </Box>
            </Box>
          </Box>
        </Box> */}

        {/* <Box className={classes.formControl}>
          <Typography className={classes.title}>
            Professional Experience
          </Typography>
          {classic.professionalExperience.map((exp) => (
            <ExperienceForm key={exp.id} exp={exp} />
          ))}
          <Box>
            <Button onClick={handleExperience}>Add Experience</Button>
          </Box>
        </Box>
        <Box className={classes.formControl}>
          <Typography className={classes.title}>Education</Typography>
          {classic.education.map((info) => (
            <EducationForm key={info.id} info={info} />
          ))}
          <Box>
            <Button onClick={handleEducation}>Add Education</Button>
          </Box>
        </Box>
        {props.isDesigner && (
          <Box className={classes.formControl}>
            <Typography className={classes.title}>Certifications</Typography>
            {classic.certifications.map((info) => (
              <CertificateForm info={info} />
            ))}
            <Box>
              <Button onClick={() => dispatch(addCertificationsData())}>
                Add Certification
              </Button>
            </Box>
          </Box>
        )}
        {props.isDesigner && (
          <Box className={classes.formControl}>
            <Typography className={classes.title}>Awards</Typography>
            {classic.awards.map((info) => (
              <AwardsForm info={info} />
            ))}
            <Box>
              <Button onClick={() => dispatch(addAwardsData())}>
                Add Certification
              </Button>
            </Box>
          </Box>
        )} */}
      </Paper>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
    width: "95%",
    height: "500px",
    justifyContent: "center",
    alignItems: "center",
  },
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
