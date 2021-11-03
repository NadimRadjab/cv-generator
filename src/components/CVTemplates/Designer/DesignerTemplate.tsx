import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { LegacyRef, useEffect, useRef } from "react";
import { personalInfoData } from "../../../data/seeds";
import { useAppSelector } from "../../../redux/hooks";
import { useStyles } from "../../../styles/DesignerTemplate";
import { TextBox } from "../../GlobalUI/GlobalUI";
import InfoContainer from "../Classic/UI/InfoContainer";
import {
  CVText,
  ExperienceInfoBox,
  PersonalInfoBox,
  TitleText,
  WraperBox,
} from "./DesignerUi/DesignerUI";

const DesignerTemplate = (props: any) => {
  const template = useAppSelector((state) => state.classic);

  const renderPersonalInfo = () => {
    return Object.keys(personalInfoData).map((info, i) => {
      if (
        info !== "Full Name" &&
        info !== "Street" &&
        info !== "Zip/City" &&
        info !== "Nationality" &&
        info !== "Title"
      ) {
        return (
          <PersonalInfoBox key={i + info}>
            {/* <Box sx={{ mr: 2 }} color="white">
              {IconsData[info]}
            </Box> */}
            <ul style={{ color: "white", margin: 1, padding: 5 }}>
              <li>
                <CVText>{template.personalInfo[info]}</CVText>
              </li>
            </ul>
            {/* <CVText>{template.personalInfo[info]}</CVText> */}
          </PersonalInfoBox>
        );
      }
    });
  };
  const ref: LegacyRef<HTMLDivElement> = useRef(null);

  useEffect(() => {
    props.handleRef(ref);
  }, []);
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.cv}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "rgb(97,139,165)",
          position: "absolute",
          top: 27,
          height: 120,
          width: "100%",
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            sx={{ textTransform: "uppercase" }}
            variant="h4"
            color="white"
          >
            {template.personalInfo["Full Name"]}
          </Typography>
          <Typography
            sx={{ textTransform: "uppercase" }}
            variant="h6"
            color="white"
          >
            {template.personalInfo.Title}
          </Typography>
        </Box>
        <Box
          sx={{
            alignSelf: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mr: 7,
          }}
        >
          <img
            src={template.image}
            style={{
              width: 130,
              height: 130,
              border: "4px solid white",
              borderRadius: "50%",
            }}
          />
        </Box>
      </Box>
      <div className={classes.root}>
        <Box
          sx={{
            backgroundColor: "rgb(34,48,58)",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          }}
        >
          <Box
            sx={{
              mt: 17,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <WraperBox>{renderPersonalInfo()}</WraperBox>
            <WraperBox>
              <TitleText>Skills</TitleText>
              <Box sx={{ p: 0.3 }}>
                <ul style={{ color: "white" }}>
                  <li>Computer</li>
                </ul>
                <TextBox color={"white"}>- {template.computerSkills}</TextBox>
                <ul style={{ color: "white" }}>
                  <li>Languages</li>
                </ul>
                {template.languages.map((lang, i) => (
                  <TextBox key={i + lang.id} color={"white"}>
                    - {lang.language}
                  </TextBox>
                ))}
              </Box>
            </WraperBox>
            <WraperBox>
              <TitleText>honors & Awards</TitleText>
              <Box sx={{ p: 0.3 }}>
                {template.awards.map((cer) => (
                  <Box key={cer.id} sx={{ p: 1 }}>
                    <TextBox color={"white"}>
                      {`${cer.year}: ${cer.award}`}
                    </TextBox>
                  </Box>
                ))}
              </Box>
            </WraperBox>
            <WraperBox>
              <TitleText>certifications</TitleText>
              {template.certifications.map((cer) => (
                <Box key={cer.id} sx={{ p: 1 }}>
                  <TextBox color={"white"}>
                    {`${cer.year}: ${cer.certification}`}
                  </TextBox>
                </Box>
              ))}
            </WraperBox>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgb(235,235,235)",
          }}
        >
          <Box sx={{ mt: 19 }}>
            <ExperienceInfoBox title={"Objective"}>
              <TextBox color={"rgb(141,141,141)"} width={"90%"}>
                {template.description}
              </TextBox>
            </ExperienceInfoBox>
            <ExperienceInfoBox title={"Education"}>
              {template.education.map((ed) => (
                <Box key={ed.id}>
                  <ul style={{ fontSize: "12pt", color: "rgb(41,41,41)" }}>
                    <li>
                      <b>{ed["School Name"]}</b>
                    </li>
                  </ul>
                  <InfoContainer>
                    <TextBox width={"60%"} color={"rgb(141,141,141)"}>
                      {ed.Degree}
                    </TextBox>
                    <TextBox
                      color={"rgb(141,141,141)"}
                    >{`${ed.From} - ${ed.Until}`}</TextBox>
                  </InfoContainer>
                </Box>
              ))}
            </ExperienceInfoBox>
            <ExperienceInfoBox title={"Work Experience"}>
              {template.professionalExperience.map((exp) => (
                <Box key={exp.id}>
                  <ul style={{ fontSize: "12pt", color: "rgb(41,41,41)" }}>
                    <li>
                      <b>{exp.Company}</b>
                    </li>
                  </ul>
                  <InfoContainer>
                    <TextBox color={"rgb(141,141,141)"}>{exp.Position}</TextBox>
                    <TextBox
                      color={"rgb(141,141,141)"}
                    >{`${exp.From} - ${exp.Until}`}</TextBox>
                  </InfoContainer>
                  <Box p={2}>
                    <TextBox color={"rgb(141,141,141)"}>
                      {exp.Description}
                    </TextBox>
                  </Box>
                </Box>
              ))}
            </ExperienceInfoBox>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default DesignerTemplate;
