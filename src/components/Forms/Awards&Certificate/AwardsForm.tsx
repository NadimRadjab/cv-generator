import React from "react";
import { Paper, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  removeAwardsData,
  updateAwardsData,
} from "../../../redux/features/Info/infoSlice";
import DeleteButton from "../../CVTemplates/Classic/UI/DeleteButton";
import { AwardsData } from "../../../redux/features/Info/types";
type Props = {
  info: AwardsData;
};
const AwardsForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateAwardsData({
        name: e.target.name,
        value: e.target.value,
        id: props.info.id,
      })
    );
  };

  const handleRemove = () => {
    dispatch(removeAwardsData(props.info.id));
  };
  return (
    <Paper sx={{ m: 2 }}>
      <TextField
        onChange={handleChange}
        name="year"
        sx={{ p: 2, m: 2 }}
        variant="standard"
        value={props.info.year}
        label="Award Year"
      />
      <TextField
        multiline
        value={props.info.award}
        onChange={handleChange}
        name="award"
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label="Award"
      />
      <DeleteButton onRemove={handleRemove}>Remove</DeleteButton>
    </Paper>
  );
};

export default AwardsForm;
