import { Paper, TextField, Typography } from "@mui/material";
import { Box, useTheme } from "@mui/system";
import { makeStyles } from "@mui/styles";

import React from "react";
import { updateDescription } from "../../../redux/features/Info/infoSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import sizes from "../../../styles/sizes";
const ObjectiveForm = () => {
  const value = useAppSelector((state) => state.classic.description);
  const dispatch = useAppDispatch();
  const useStyles = makeStyles({
    root: {
      p: 2,
      m: 4,
      textAlign: "center",
      [sizes.down("lg")]: {
        width: "100%",
      },
    },
  });
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography fontSize={19}>Summary</Typography>
      <Paper sx={{ m: 2 }}>
        <TextField
          onChange={(e) =>
            dispatch(updateDescription({ text: e.target.value }))
          }
          name="description"
          multiline
          value={value}
          sx={{ p: 2, m: 2 }}
          variant="standard"
          label={"Summary"}
        />
      </Paper>
    </Box>
  );
};

export default ObjectiveForm;
