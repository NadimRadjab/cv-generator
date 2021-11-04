import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, LegacyRef, useEffect } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { global } from "../../../styles/global";
import { TextBox } from "../../GlobalUI/GlobalUI";
import { ExperienceBox } from "./CasualUi";

const CasualTemplate = (props: any) => {
  const classes = global();
  const template = useAppSelector((state) => state.classic);
  const ref: LegacyRef<HTMLDivElement> = useRef(null);
  useEffect(() => {
    props.handleRef(ref);
  }, [props]);
  const renderPersonalInfo = () => {
    return Object.keys(template.personalInfo).map((key, i) => {
      if (
        key === "Email-Address" ||
        key === "Phone Number" ||
        key === "Date of Birth" ||
        key === "Matrial Status" ||
        key === "Location"
      ) {
        return (
          <Box
            key={i}
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              textAlign: "center",
            }}
          >
            <TextBox>
              <b>
                {key === "Location" ? key.replace(/Location/, "Address") : key}:
              </b>
            </TextBox>
            <TextBox width={"85%"}>{template.personalInfo[key]}</TextBox>
          </Box>
        );
      }
    });
  };
  return (
    <div ref={ref} className={classes.cv}>
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
              {template.personalInfo["Full Name"]}
            </Typography>
            <img
              alt="profile-img"
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
            {template.professionalExperience.map((exp, i) => {
              return (
                <Box
                  key={exp.id}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    sx={{ alignSelf: "flex-end" }}
                    fontSize="11pt"
                  >{`${exp.From} - ${exp.Until}`}</Typography>
                  <Typography fontSize="11pt">
                    <b>
                      {exp.Position} {exp.Company}, {exp.City}
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
                <Box
                  key={educ.id}
                  sx={{ display: "flex", flexDirection: "column" }}
                >
                  <Typography
                    sx={{ alignSelf: "flex-end" }}
                    fontSize="11pt"
                  >{`${educ.From} - ${educ.Until}`}</Typography>
                  <Typography fontSize="11pt">
                    <b>
                      {educ["School Name"]} {educ.Degree} {educ.City}
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
                  <Box key={lang.id} sx={{ display: "flex" }}>
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
