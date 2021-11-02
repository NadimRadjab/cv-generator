import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import {
  removeEducationData,
  updateEducationData,
} from "../../../redux/features/ClassicTemplate/infoSlice";
import { EducationData } from "../../../data/seeds";
import FormControllContainer from "../../GlobalUI/FormControllContainer";
import DeleteButton from "../../CVTemplates/Classic/UI/DeleteButton";
type Props = {
  info: EducationData;
  isDesigner: boolean;
};
const EducationForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateEducationData({
        key: e.target.name,
        text: e.target.value,
        id: props.info.id,
      })
    );
  };
  const handleRemove = () => {
    dispatch(removeEducationData(props.info.id));
  };

  const renderTextField = () => {
    return Object.keys(props.info).map((key, i) => {
      if (key !== "id") {
        if (props.isDesigner && key !== "City")
          return (
            <TextField
              key={i}
              value={props.info[key]}
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

export default EducationForm;
