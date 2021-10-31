import React from "react";
import { Paper, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  removeExperienceData,
  updateExperienceData,
} from "../../../../redux/features/ClassicTemplate/infoSlice";
import FormControllContainer from "./FormControllContainer";
import DeleteButton from "../UI/DeleteButton";
const ExperienceForm = (props: any) => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateExperienceData({
        key: e.target.name,
        text: e.target.value,
        id: props.exp.id,
      })
    );
  };
  const handleRemove = () => {
    dispatch(removeExperienceData(props.exp.id));
  };
  const renderTextField = () => {
    return Object.keys(props.exp).map((key, i) => {
      if (key !== "id") {
        return (
          <TextField
            key={i}
            onChange={handleChange}
            name={key}
            sx={{ p: 2, m: 2 }}
            variant="standard"
            label={key}
          />
        );
      }
    });
  };

  return (
    <FormControllContainer>
      {renderTextField()}
      <DeleteButton onRemove={handleRemove}>Remove</DeleteButton>
    </FormControllContainer>
  );
};

export default ExperienceForm;
