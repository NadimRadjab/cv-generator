import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

interface Props {
  children?: React.ReactNode;
  color?: string;
  width?: string;
}
export const TextBox: React.FC<Props> = (props: Props) => {
  return (
    <Box
      width={props.width}
      sx={{ justifyContent: "center", alignItems: "center" }}
    >
      <Typography color={props.color} fontSize="11pt">
        {props.children}
      </Typography>
    </Box>
  );
};
