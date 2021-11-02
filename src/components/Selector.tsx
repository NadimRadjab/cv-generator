import { Button, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import designerStyle from "../assets/imgs/DesignerStyle.png";
import classicCv from "../assets/imgs/Classic.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";

const Selector = () => {
  const [imgContainer, setImgContainer] = useState<any>([
    classicCv,
    designerStyle,
  ]);
  const [imgNumber, setImgNumber] = useState<number>(0);
  const [slide, setSlide] = useState(1);
  const handleForward = () => {
    if (imgNumber === imgContainer.length - 1) return;
    setSlide(0);
    setTimeout(() => {
      setImgNumber(imgNumber + 1);
      setSlide(1);
    }, 700);
  };

  const handleBackward = () => {
    if (imgNumber === 0) return;

    setSlide(0);
    setTimeout(() => {
      setImgNumber(imgNumber - 1);
      setSlide(1);
    }, 700);
  };
  const classes = useStyles();
  return (
    <Container
      sx={{
        height: "100%",
        alignItems: "center",
        display: "flex",

        flexDirection: "column",
      }}
    >
      <Box m={2}>
        <Typography fontSize={22}>Choose a Template</Typography>
      </Box>
      <Paper
        sx={{
          height: "80%",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#D3D3D3",
        }}
      >
        <Button
          sx={{
            opacity: imgNumber === 0 ? 0 : 1,
          }}
          onClick={handleBackward}
        >
          <ArrowBackIosNewIcon fontSize="large" sx={{}} />
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "95%",
          }}
        >
          <img
            style={{ opacity: slide }}
            className={classes.image}
            src={imgContainer[imgNumber]}
          />
        </Box>
        <Button
          sx={{
            opacity: imgNumber === imgContainer.length - 1 ? 0 : 1,
          }}
          onClick={handleForward}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </Button>
      </Paper>
    </Container>
  );
};

const useStyles = makeStyles({
  image: {
    width: "63%",
    opacity: 1,
    transition: "opacity 0.5s linear",
  },
});
export default Selector;
