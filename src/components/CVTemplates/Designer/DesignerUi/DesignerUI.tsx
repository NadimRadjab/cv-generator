import { Container, Paper, Typography } from "@mui/material";
import { borderBottom, Box } from "@mui/system";
import React from "react";
import { TextBox } from "../../../GlobalUI/GlobalUI";

type Props = {
  children?: React.ReactNode;
  items?: string;
  title?: string;
};
type TextProps = {
  children: string;
};
export const PersonalInfoBox = (props: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        p: 1,
      }}
    >
      {props.children}
    </Box>
  );
};
export const CVText = (props: { children: string }) => {
  return (
    <Typography sx={{ wordBreak: "break-word" }} fontSize="11pt" color="white">
      {props.children}
    </Typography>
  );
};
export const WraperBox = (props: Props) => {
  return (
    <Box sx={{ borderBottom: "1px solid white", mt: 5, width: "84%" }}>
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

export const ExperienceInfoBox = (props: Props) => {
  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            width: props.title === "Work Experience" ? "45%" : "",
          }}
          fontSize={17}
          color="rgb(41,41,41)"
        >
          {props.title}
        </Typography>
        <Box
          sx={{
            borderBottom: "2px solid gray",
            alignSelf: "center",
            width: "75%",
          }}
        ></Box>
      </Box>
      <Box sx={{ p: 2 }}>{props.children}</Box>
    </Box>
  );
};
