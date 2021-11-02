import { Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { updateDescription } from "../../../redux/features/ClassicTemplate/infoSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";

const ObjectiveForm = () => {
  const value = useAppSelector((state) => state.classic.description);
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ p: 2, m: 4, textAlign: "center" }}>
      <Typography fontSize={19}>Objectives</Typography>
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
          label={"Objectives"}
        />
      </Paper>
    </Box>
  );
};

export default ObjectiveForm;
