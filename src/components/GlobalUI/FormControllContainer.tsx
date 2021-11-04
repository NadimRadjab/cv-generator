import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import sizes from "../../styles/sizes";
const FormControllContainer = (props: any) => {
  const useStyles = makeStyles({
    root: {
      display: "grid",
      gridTemplateColumns: "repeat(2,50%)",
      marginTop: 2,
      [sizes.down("sm")]: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
      },
    },
  });
  const classes = useStyles();
  return <Paper className={classes.root}>{props.children}</Paper>;
};

export default FormControllContainer;
