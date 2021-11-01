import { makeStyles } from "@mui/styles";
import React from "react";
import { Button, Paper, Box, Typography } from "@mui/material";
import {
  addEducationData,
  addExperienceData,
} from "../../../redux/features/ClassicTemplate/infoSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";

const Experience = () => {
  const dispatch = useAppDispatch();
  const template = useAppSelector((state) => state.classic);
  const handleExperience = () => {
    dispatch(addExperienceData());
  };
  const handleEducation = () => {
    dispatch(addEducationData());
  };
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.formControl}>
        <Typography className={classes.title}>
          Professional Experience
        </Typography>
        {template.professionalExperience.map((exp) => (
          <ExperienceForm key={exp.id} exp={exp} />
        ))}
        <Box>
          <Button onClick={handleExperience}>Add Experience</Button>
        </Box>
      </Box>
      <Box className={classes.formControl}>
        <Typography className={classes.title}>Education</Typography>
        {template.education.map((info) => (
          <EducationForm key={info.id} info={info} />
        ))}
        <Box>
          <Button onClick={handleEducation}>Add Education</Button>
        </Box>
      </Box>
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

export default Experience;
