import { makeStyles } from "@mui/styles";
import React from "react";
import { Button, Box, Typography } from "@mui/material";
import {
  addEducationData,
  addExperienceData,
} from "../../../redux/features/ClassicTemplate/infoSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import { useHistory } from "react-router";
import LocationButtons from "../../GlobalUI/LocationButtons";
import ObjectiveForm from "./ObjectiveForm";

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
  const histroy = useHistory();
  return (
    <Box>
      <LocationButtons location={"/form/awards"} />
      <Box sx={{ display: "flex" }}>
        <ObjectiveForm />
        <Box className={classes.formControl}>
          <Typography className={classes.title}>
            Professional Experience
          </Typography>
          {template.professionalExperience.map((exp) => (
            <ExperienceForm isDesigner key={exp.id} exp={exp} />
          ))}
          <Box>
            <Button onClick={handleExperience}>Add Experience</Button>
          </Box>
        </Box>
        <Box className={classes.formControl}>
          <Typography className={classes.title}>Education</Typography>
          {template.education.map((info) => (
            <EducationForm isDesigner key={info.id} info={info} />
          ))}
          <Box>
            <Button onClick={handleEducation}>Add Education</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles({
  formControl: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: "1rem",
  },
  title: {
    fontSize: "19px",
  },
});

export default Experience;
