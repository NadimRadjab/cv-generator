import { Button, Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import designerStyle from "../assets/imgs/DesignerStyle.png";
import classicCv from "../assets/imgs/Classic.png";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { makeStyles } from "@mui/styles";
import { useAppDispatch } from "../redux/hooks";
import { updateCvIdentifire } from "../redux/features/ClassicTemplate/infoSlice";
import { useHistory } from "react-router";

const Selector = () => {
  const classic = {
    id: "classicCv-01",
    image: classicCv,
  };
  const designer = {
    id: "designer-01",
    image: designerStyle,
  };
  const [imgContainer, setImgContainer] = useState<any>([classic, designer]);
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
  image: {
    width: "63%",
    opacity: 1,
    transition: "opacity 0.3s linear",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.1)",
      transition: "transform 0.5s linear",
    },
  },
});
export default Selector;
