import { Paper } from "@mui/material";
import React from "react";

const FormControllContainer = (props: any) => {
  return (
    <Paper
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2,50%)",
        marginTop: 2,
      }}
    >
      {props.children}
    </Paper>
  );
};

export default FormControllContainer;
