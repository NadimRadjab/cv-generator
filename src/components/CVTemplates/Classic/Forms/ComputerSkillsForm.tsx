import React from "react";
import { Paper, TextField } from "@mui/material";
import { useAppDispatch } from "../../../../redux/hooks";
import { updateComputerData } from "../../../../redux/features/ClassicTemplate/infoSlice";

const ComputerSkillsForm = () => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateComputerData({
        text: e.target.value,
      })
    );
  };

  return (
    <Paper sx={{}}>
      <TextField
        multiline
        fullWidth
        onChange={handleChange}
        name="computerSkills"
        sx={{ p: 2, m: 2, width: "80%" }}
        variant="standard"
        label="Computer Skills"
      />
    </Paper>
  );
};

export default ComputerSkillsForm;
