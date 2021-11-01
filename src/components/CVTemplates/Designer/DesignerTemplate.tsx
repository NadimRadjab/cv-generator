import { Box } from "@mui/system";
import React from "react";
import {
  IconsData,
  personalInfoDesignerData,
} from "../../../data/designerData";
import { personalInfoData } from "../../../data/seeds";
import { useAppSelector } from "../../../redux/hooks";
import { useStyles } from "../../../styles/DesignerTemplate";
import { TextBox } from "../../GlobalUI/GlobalUI";
import {
  CVText,
  PersonalInfoBox,
  TitleText,
  WraperBox,
} from "./DesignerUi/DesignerUI";

const DesignerTemplate = () => {
  const template = useAppSelector((state) => state.classic);

  const renderPersonalInfo = () => {
    return Object.keys(personalInfoData).map((info) => {
      if (
        info !== "Full Name" &&
        info !== "Street" &&
        info !== "Zip/City" &&
        info !== "Nationality"
      ) {
        return (
          <PersonalInfoBox>
            <Box color="white">{IconsData[info]}</Box>
            <CVText>{template.personalInfo[info]}</CVText>
          </PersonalInfoBox>
        );
      }
    });
  };
  const classes = useStyles();
  return (
    <div className={classes.cv}>
      <div className={classes.root}>
        <Box
          sx={{
            border: "1px solid black",
            backgroundColor: "rgb(34,48,58)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <WraperBox>{renderPersonalInfo()}</WraperBox>
          <WraperBox>
            <TitleText>Skills</TitleText>
            <Box sx={{ p: 1 }}>
              <ul style={{ color: "white" }}>
                <li>Computer</li>
              </ul>
              <TextBox color={"white"}>{template.computerSkills}</TextBox>
              <ul style={{ color: "white" }}>
                <li>Languages</li>
              </ul>
              <TextBox color={"white"}>- English, Japanese, German</TextBox>
            </Box>
          </WraperBox>
          <WraperBox>
            <TitleText>honors & Awards</TitleText>
            <Box sx={{ p: 1 }}>
              {template.awards.map((cer) => (
                <Box key={cer.id} sx={{ p: 1 }}>
                  <TextBox color={"white"}>
                    {`${cer.year}: ${cer.awards}`}
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
        <Box
          sx={{
            border: "1px solid black",
            backgroundColor: "rgb(235,235,235)",
          }}
        >
          ehoo
        </Box>
      </div>
    </div>
  );
};

export default DesignerTemplate;
