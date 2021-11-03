import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { global } from "../../../styles/global";
import { TextBox } from "../../GlobalUI/GlobalUI";
import { CVText } from "../Designer/DesignerUi/DesignerUI";
import { ExperienceBox } from "./CasualUi";

const CasualTemplate = () => {
  const classes = global();
  const template = useAppSelector((state) => state.classic);
  const renderPersonalInfo = () => {
    return Object.keys(template.personalInfo).map((key) => {
      if (
        key === "Email-Address" ||
        key === "Phone Number" ||
        key === "Date of Birth" ||
        key === "Matrial Status" ||
        key === "Location"
      ) {
        return (
          <Box
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextBox>
              <b>{key}: </b>
            </TextBox>
            <TextBox width={"85%"}>{template.personalInfo[key]}</TextBox>
          </Box>
        );
      }
    });
  };
  return (
    <div className={classes.cv}>
      <div className={classes.grid}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "rgb(195,195,195)",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              mt: 9,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography sx={{ ml: 2 }} variant="h4">
              Adele Neumayer
            </Typography>
            <img
              style={{ marginTop: "2rem", width: 170, height: 180 }}
              src={template.image}
            />
          </Box>

          {renderPersonalInfo()}
        </Box>

        <Box sx={{ p: 4, mt: 6 }}>
          <ExperienceBox title="Summary">
            <TextBox>{template.description}</TextBox>
          </ExperienceBox>
          <ExperienceBox title="Experience">
            {template.professionalExperience.map((exp) => {
              return (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ alignSelf: "flex-end" }}
                    fontSize="11pt"
                  >{`${exp.From} - ${exp.Until}`}</Typography>
                  <Typography fontSize="11pt">
                    <b>
                      {exp.Position} {exp.Company} ,{exp.City}
                    </b>
                  </Typography>
                  <ul style={{ fontSize: "11pt" }}>
                    <li>{exp.Description}</li>
                  </ul>
                </Box>
              );
            })}
          </ExperienceBox>
          <ExperienceBox title="Education">
            {template.education.map((educ) => {
              return (
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{ alignSelf: "flex-end" }}
                    fontSize="11pt"
                  >{`${educ.From} - ${educ.Until}`}</Typography>
                  <Typography fontSize="11pt">
                    <b>
                      {educ["School Name"]} {educ.Diploma} ,{educ.City}
                    </b>
                  </Typography>
                </Box>
              );
            })}
          </ExperienceBox>
          <ExperienceBox title="Additional skills">
            <Box>
              <ul>
                <li>Languages</li>
              </ul>
              {template.languages.map((lang) => {
                return (
                  <Box sx={{ display: "flex" }}>
                    <Typography fontSize="11pt">
                      {lang.language} - {lang.level}
                    </Typography>
                  </Box>
                );
              })}
              <ul>
                <li>Computer Skills</li>
              </ul>
              <Typography>{template.computerSkills}</Typography>
            </Box>
          </ExperienceBox>
        </Box>
      </div>
    </div>
  );
};

export default CasualTemplate;
