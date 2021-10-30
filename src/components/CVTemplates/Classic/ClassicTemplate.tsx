import { Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { ReactNode } from "react";
import { makeStyles } from "@mui/styles";
import InfoContainer from "./InfoContainer";
interface Props {
  children: React.ReactNode;
}
const TextBox: React.FC<Props> = (props: Props) => {
  return (
    <Box width="50%">
      <Typography fontSize="11pt">{props.children}</Typography>
    </Box>
  );
};

const TitleText: React.FC<Props> = (props: Props) => {
  return (
    <Box sx={{ alignSelf: "flex-start", ml: 10 }}>
      <Typography color="#5398be" fontSize="14pt">
        {props.children}
      </Typography>
    </Box>
  );
};
const ClassicTemplate = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        marginTop: 10,
        padding: 20,
        backgroundColor: "white",
        width: "21cm",
        height: "29.7cm",
      }}
    >
      <Box
        justifyContent="center"
        alignItems="center"
        display="flex"
        width="100%"
        borderBottom="#ccc solid 1px"
        flexDirection="column"
      >
        <Typography variant="h5">Your Name</Typography>
        <Box className={classes.girdInfo}>
          <Typography>Samir Street 42adsadsa</Typography>

          <Typography>40902 Some Placeasdsadsadsa</Typography>

          <Typography>23414343423432432</Typography>

          <Typography> emailexample@gmail.com</Typography>
        </Box>
      </Box>

      <Box className={classes.gridSecondInfo}>
        <Box className={classes.personalInfoGrid}>
          <TitleText>Personal Information</TitleText>
          <Box sx={{ p: 3 }} width="65%">
            <InfoContainer padding={0.2}>
              <TextBox>Name:</TextBox>
              <TextBox>Kiro Ivan</TextBox>
            </InfoContainer>
            <InfoContainer padding={0.2}>
              <TextBox>Date of Birth:</TextBox>
              <TextBox>12.08.1988 in Varna</TextBox>
            </InfoContainer>
            <InfoContainer padding={0.2}>
              <TextBox>Nationality:</TextBox>
              <TextBox>American</TextBox>
            </InfoContainer>
            <InfoContainer padding={0.2}>
              <TextBox>Martial status:</TextBox>
              <TextBox>single</TextBox>
            </InfoContainer>
          </Box>
        </Box>
        <Box sx={{ p: 3 }}>
          <img
            style={{ width: 180, height: 180 }}
            src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=612x612&w=0&h=EkhPspb58IrPQnchFVjZFrz5R1hnCZJTTH_l34J2EtU="
          />
        </Box>
      </Box>
      <Box className={classes.wraperContainer}>
        <TitleText>Professional Experience</TitleText>
        <Box>
          <InfoContainer padding={1.2}>
            <TextBox>04/2018 - 06/2018</TextBox>
            <TextBox>Produktions KTL Center MHK GmbH , Heilbronn</TextBox>
          </InfoContainer>
          <InfoContainer>
            <TextBox>04/2018 - 06/2018</TextBox>
            <TextBox>Produktions KTL Center MHK GmbH , Heilbronn</TextBox>
          </InfoContainer>
          <InfoContainer padding={1.2}>
            <TextBox>04/2018 - 06/2018</TextBox>
            <TextBox>Produktions KTL Center MHK GmbH , Heilbronn</TextBox>
          </InfoContainer>
          <InfoContainer padding={1.2}>
            <TextBox>04/2018 - 06/2018</TextBox>
            <TextBox>
              Beratender Chemiker in Wasserversorgnug
              -Trinkwasseraufbereitungund prüfung- Umweltingenieur-
              Laborassistent in chemischen Labor DEVEN OOD-SOLVAY SODI, Varna
              (Bulgarien)
            </TextBox>
          </InfoContainer>
        </Box>
      </Box>
      <Box className={classes.wraperContainer}>
        <TitleText>Education</TitleText>
        <InfoContainer padding={1.2}>
          <TextBox>09/2002 – 06/2005</TextBox>
          <TextBox>
            Technischeuniversität, Varna (Bulgarien) Spezialisierte Chemische
            Technologien
          </TextBox>
        </InfoContainer>
        <InfoContainer padding={1.2}>
          <TextBox>09/2002 – 06/2005</TextBox>
          <TextBox>
            Technischeuniversität, Varna (Bulgarien) Spezialisierte Chemische
            Technologien
          </TextBox>
        </InfoContainer>
      </Box>
      <Box className={classes.wraperContainer}>
        <TitleText>Other skills</TitleText>
        <InfoContainer padding={1.2}>
          <TextBox>Computer skills:</TextBox>
          <TextBox>
            MS Office, an, Windows, Ios, Android, JavaScript, Linux Git
          </TextBox>
        </InfoContainer>
        <InfoContainer padding={1.2}>
          <TextBox>Languages:</TextBox>
          <Box sx={{ p: 2 }} width="45%">
            <Box
              justifyContent="space-between"
              flexDirection="row"
              display="flex"
            >
              <TextBox>English:</TextBox>
              <TextBox>Fluent</TextBox>
            </Box>
            <Box
              justifyContent="space-between"
              flexDirection="row"
              display="flex"
            >
              <TextBox>German:</TextBox>
              <TextBox>Intermediate</TextBox>
            </Box>
            <Box
              justifyContent="space-between"
              flexDirection="row"
              display="flex"
            >
              <TextBox>Korean</TextBox>
              <TextBox>Proficient/Fluent</TextBox>
            </Box>
            <Box
              justifyContent="space-between"
              flexDirection="row"
              display="flex"
            >
              <TextBox>Very Long Long Long Languege</TextBox>
              <TextBox>Advanced</TextBox>
            </Box>
          </Box>
        </InfoContainer>
      </Box>
    </div>
  );
};
const useStyles = makeStyles({
  girdInfo: {
    display: "grid",
    gridTemplateColumns: "repeat(2,60%)",
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
  personalInfoGrid: {
    width: "75%",
  },
  wraperContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});
export default ClassicTemplate;
