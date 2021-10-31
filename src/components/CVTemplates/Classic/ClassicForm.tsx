import { Button, Paper, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import {
  addEducationData,
  addExperienceData,
  addLanguageData,
} from "../../../redux/features/ClassicTemplate/infoSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ExperienceForm from "./Forms/ExperienceForm";
import ComputerSkillsForm from "./Forms/ComputerSkillsForm";
import EducationForm from "./Forms/EducationForm";
import LanguageForm from "./Forms/LanguageForm";
import PersonalInfoForm from "./Forms/PersonalInfoForm";

const FormContainer = () => {
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
        <Box className={classes.formControl}>
          <Typography className={classes.title}>Personal Info</Typography>
          <PersonalInfoForm />
          <Box
            sx={{
              alignSelf: "flex-start",
              width: "100%",
              mt: 2,
              textAlign: "center",
            }}
          >
            <Typography className={classes.title}>Other Skills</Typography>
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
        </Box>
        <Box className={classes.formControl}>
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
      </Paper>
      <Box width="100%" m={2}></Box>
    </div>
  );
};
const useStyles = makeStyles({
  root: {
    marginTop: "2rem",
    width: "95%",
    display: "grid",
    height: "500px",
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
