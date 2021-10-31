import React from "react";
import { Button, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  updateData,
  updateImage,
} from "../../../../redux/features/ClassicTemplate/infoSlice";
import FormControllContainer from "./FormControllContainer";
const PersonalInfoForm = () => {
  const personalInfo = useAppSelector((state) => state.classic.personalInfo);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateData({ key: e.target.name, text: e.target.value }));
  };
  const handleFile = (e: any) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.addEventListener("load", () => {
      dispatch(updateImage(reader.result));
    });
  };

  const renderTextField = () => {
    return Object.keys(personalInfo).map((key, i) => (
      <TextField
        key={i}
        onChange={handleChange}
        name={key}
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label={key}
      />
    ));
  };

  return (
    <FormControllContainer>
      {renderTextField()}
      <input
        type="file"
        name="picture"
        id="picture"
        placeholder="Picture"
        accept="image/*"
        onChange={handleFile}
      />
    </FormControllContainer>
  );
};

export default PersonalInfoForm;
