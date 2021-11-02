import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import InfoContainer from "./UI/InfoContainer";

import { useAppSelector } from "../../../redux/hooks";
import DesignerTemplate from "../Designer/DesignerTemplate";
interface Props {
  children?: React.ReactNode;
  color?: string;
}
const TextBox: React.FC<Props> = (props: Props) => {
  return (
    <Box width="50%" sx={{ justifyContent: "center", alignItems: "center" }}>
      <Typography color={props.color} fontSize="11pt">
        {props.children}
      </Typography>
    </Box>
  );
};

const TitleText: React.FC<Props> = (props: Props) => {
  return (
    <Box sx={{ alignSelf: "flex-start", ml: 10, mb: 2 }}>
      <Typography color="#5398be" fontSize="14pt">
        {props.children}
      </Typography>
    </Box>
  );
};

const ClassicTemplate = () => {
  const classes = useStyles();
  const classic = useAppSelector((state) => state.classic);
  let arr = [] as any;

  const renderPersonalInfoText = () => {
    return Object.keys(classic.personalInfo).map((key, i) => {
      if (
        key === "Full Name" ||
        key === "Date of Birth" ||
        key === "Matrial Status" ||
        key === "Nationality"
      ) {
        arr.push(key);
        if (arr.includes(key)) {
          return (
            <InfoContainer key={i} padding={0.2}>
              <TextBox>{key}:</TextBox>
              <TextBox>{classic.personalInfo[key]}</TextBox>
            </InfoContainer>
          );
        }
      }
    });
  };
  const renderHeader = () => {
    return Object.keys(classic.personalInfo).map((key, i) => {
      if (
        key === "Street" ||
        key === "Zip/City" ||
        key === "Phone Number" ||
        key === "Email-Address"
      ) {
        return <Typography key={i}>{classic.personalInfo[key]}</Typography>;
      }
    });
  };
  const renderExperience = () => {
    return classic.professionalExperience.map((exp, i) => {
      return (
        <InfoContainer key={i} padding={1.2}>
          <TextBox>{`${exp.From} - ${exp.Until}`}</TextBox>
          <TextBox>
            <b>{exp.Position}</b>
            <br />
            {exp.Company}, {exp.City}
          </TextBox>
        </InfoContainer>
      );
    });
  };

  const renderEducation = () => {
    return classic.education.map((exp, i) => {
      return (
        <InfoContainer key={i} padding={1.2}>
          <TextBox>{`${exp.From} - ${exp.Until}`}</TextBox>
          <TextBox>
            <b>{exp["School Name"]}</b>
            <br />
            {exp.Degree}, {exp.City}
          </TextBox>
        </InfoContainer>
      );
    });
  };
  const renderLanguage = () => {
    return classic.languages.map((lang, i) => (
      <InfoContainer key={i}>
        <TextBox>{lang.language}:</TextBox>
        <TextBox>{lang.level}</TextBox>
      </InfoContainer>
    ));
  };

  return (
    <Container
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <Pdf targetRef={ref} filename="cv.pdf">
        {({ toPdf }: any) => {
          return (
            <Button variant="contained" sx={{ mb: 4 }} onClick={toPdf}>
              Download Pdf
            </Button>
          );
        }}
      </Pdf> */}

      {/* <DesignerTemplate handleRef={handleRef} /> */}

      {/* <div ref={ref} className={classes.cv}>

        <Box
          justifyContent="center"
          alignItems="center"
          display="flex"
          width="100%"
          borderBottom="#ccc solid 1px"
          flexDirection="column"
          marginTop="0.5rem"
        >
          <Typography variant="h5">
            {classic.personalInfo["Full Name"]}
          </Typography>
          <Box className={classes.girdInfo}>{renderHeader()}</Box>
        </Box>

        <Box className={classes.gridSecondInfo}>
          <Box sx={{ width: "75%" }}>
            <TitleText>Personal Information</TitleText>
            <Box sx={{ p: 2 }} width="65%">
              {renderPersonalInfoText()}
            </Box>
          </Box>
          <Box sx={{ p: 3, mr: 10 }}>
            <img
              src={
                !classic.image
                  ? "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=612x612&w=0&h=EkhPspb58IrPQnchFVjZFrz5R1hnCZJTTH_l34J2EtU="
                  : classic.image
              }
              style={{ width: 180, height: 180 }}
            />
          </Box>
        </Box>
        <Box className={classes.wraperContainer}
          <TitleText>Professional Experience</TitleText>

          {renderExperience()}
        </Box>
        <Box className={classes.wraperContainer}>
          <TitleText>Education</TitleText>
          {renderEducation()}
        </Box>
        <Box className={classes.wraperContainer}>
          <TitleText>Additional skills</TitleText>
          <InfoContainer padding={1.2}>
            <TextBox>Computer skills:</TextBox>
            <TextBox>{classic.computerSkills}</TextBox>
          </InfoContainer>
          <InfoContainer padding={1.2}>
            <TextBox>Languages:</TextBox>
            <Box sx={{ p: 2 }} width="45%">
              {renderLanguage()}
            </Box>
          </InfoContainer>
        </Box>

        <InfoContainer>
          <TextBox>Driving Licence:</TextBox>
          <TextBox>C & B</TextBox>
        </InfoContainer>
      </div> */}
    </Container>
  );
};

const useStyles = makeStyles({
  cv: {
    background: "white",
    width: "21cm",
    height: "29.7cm",
    display: "block",
    marginBottom: "0.5cm ",
    boxShadow: "0 0 0.5cm rgba(0,0,0,0.5)",
  },
  girdInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(2,70%)",
    padding: 10,
  },
  gridSecondInfo: {
    marginTop: 25,
    padding: 10,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  wraperContainer: {
    width: "90%",
    marginTop: "0.5rem",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});
export default ClassicTemplate;
