import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
type Props = {
  title?: string;
  children?: React.ReactNode;
};
export const ExperienceBox = (props: Props) => {
  return (
    <Box sx={{ p: 1 }}>
      <Box sx={{ borderBottom: "3px solid #ccc", m: 1 }}>
        <Typography variant="h5">{props.title}</Typography>
      </Box>
      <Box>{props.children}</Box>
    </Box>
  );
};
