import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
type Props = {
  children: React.ReactNode;
  padding?: number;
};
const InfoContainer = (props: Props) => {
  return (
    <Box
      justifyContent="space-between"
      sx={{
        p: !props.padding ? 0 : props.padding,
        textAlign: "center",
        width: "90%",
      }}
      flexDirection="row"
      display="flex"
    >
      {props.children}
    </Box>
  );
};

export default InfoContainer;
