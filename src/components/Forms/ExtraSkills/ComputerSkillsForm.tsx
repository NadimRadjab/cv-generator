import React from "react";
import { Paper, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { updateComputerData } from "../../../redux/features/Info/infoSlice";

const ComputerSkillsForm = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.classic.computerSkills);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateComputerData({
        text: e.target.value,
      })
    );
  };

  return (
    <Paper
      sx={{
        m: 2,
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TextField
        multiline
        fullWidth
        value={value}
        onChange={handleChange}
        name="computerSkills"
        sx={{ m: 2 }}
        variant="standard"
        label="Computer Skills"
      />
    </Paper>
  );
};

export default ComputerSkillsForm;
