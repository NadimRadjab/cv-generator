import { Container, Paper, Typography } from "@mui/material";
import { borderBottom, Box } from "@mui/system";
import React from "react";

type Props = {
  children: React.ReactNode;
};
type TextProps = {
  children: string;
};
export const PersonalInfoBox = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        ml: 2,
      }}
    >
      {props.children}
    </Box>
  );
};
export const CVText = (props: { children: string }) => {
  return (
    <Typography fontSize="11pt" color="white">
      {props.children}
    </Typography>
  );
};
export const WraperBox = (props: Props) => {
  return (
    <Box sx={{ borderBottom: "1px solid white", width: "80%", mt: 5 }}>
      {props.children}
    </Box>
  );
};

export const TitleText = (props: TextProps) => {
  return (
    <Typography fontSize="15" color="white">
      {props.children.toUpperCase()}
    </Typography>
  );
};
