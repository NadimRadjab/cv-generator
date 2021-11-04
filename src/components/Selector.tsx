import { Button, Container, Paper, Typography } from "@mui/material";
import { Box, height } from "@mui/system";
import React, { useState } from "react";
import designerStyle from "../assets/imgs/DesignerStyle.png";
import classicCv from "../assets/imgs/Classic.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import { useAppDispatch } from "../redux/hooks";
import { updateCvIdentifire } from "../redux/features/Info/infoSlice";
import { useHistory } from "react-router";
import casualImg from "../assets/imgs/casual.png";
import sizes from "../styles/sizes";

const Selector = () => {
  const cvs = [
    {
      id: "classicCv-01",
      image: classicCv,
    },
    {
      id: "designer-01",
      image: designerStyle,
    },
    {
      id: "casual-01",
      image: casualImg,
    },
  ];
  const [imgContainer, setImgContainer] = useState<any>(cvs);
  const [imgNumber, setImgNumber] = useState<number>(0);
  const [slide, setSlide] = useState(1);
  const handleForward = () => {
    if (imgNumber === imgContainer.length - 1) return;
    setSlide(0);
    setTimeout(() => {
      setImgNumber(imgNumber + 1);
      setSlide(1);
    }, 500);
  };

  const handleBackward = () => {
    if (imgNumber === 0) return;

    setSlide(0);
    setTimeout(() => {
      setImgNumber(imgNumber - 1);
      setSlide(1);
    }, 500);
  };
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handleCv = () => {
    dispatch(
      updateCvIdentifire({
        id: imgContainer[imgNumber].id,
        exampleImg: imgContainer[imgNumber].image,
      })
    );
    history.push("/form");
  };
  return (
    <Container
      sx={{
        height: "85vh",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box m={2}>
        <Typography fontSize={22}>Choose a Template</Typography>
      </Box>
      <Paper className={classes.root}>
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
            p: 3,
          }}
        >
          <img
            onClick={handleCv}
            style={{ opacity: slide }}
            className={classes.image}
            src={imgContainer[imgNumber].image}
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
  root: {
    width: "90%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
    [sizes.down("sm")]: {
      height: 500,
    },
  },
  image: {
    width: "63%",
    opacity: 1,
    transition: "opacity 0.3s linear",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
      transition: "transform 0.5s linear",
    },
    [sizes.down("xs")]: {
      width: "100%",
    },
  },
});
export default Selector;
