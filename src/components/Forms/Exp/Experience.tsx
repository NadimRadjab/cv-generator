import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import {
  addEducationData,
  addExperienceData,
} from "../../../redux/features/Info/infoSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import ExperienceForm from "./ExperienceForm";
import EducationForm from "./EducationForm";
import LocationButtons from "../../GlobalUI/LocationButtons";
import ObjectiveForm from "./ObjectiveForm";
import sizes from "../../../styles/sizes";
const Experience = () => {
  const dispatch = useAppDispatch();
  const template = useAppSelector((state) => state.classic);
  const [params, setParams] = useState("/form/awards");
  const handleExperience = () => {
    dispatch(addExperienceData());
  };
  const handleEducation = () => {
    dispatch(addEducationData());
  };
  const classes = useStyles();

  useEffect(() => {
    if (template.cvIdentifire !== "designer-01") setParams("/form/extr");
  }, []);

  return (
    <Box>
      <LocationButtons location={params} />
      <Box className={classes.root}>
        {template.cvIdentifire !== "classicCv-01" && <ObjectiveForm />}
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
      </Box>
    </Box>
  );
};
const useStyles = makeStyles({
  root: {
    display: "flex",
    [sizes.down("lg")]: {
      flexDirection: "column",
      width: "100%",
      alignItems: "center",
    },
  },
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
