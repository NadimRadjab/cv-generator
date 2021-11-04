import React from "react";
import { Button, Paper, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  removeEducationData,
  updateEducationData,
} from "../../../redux/features/Info/infoSlice";
import { EducationData } from "../../../data/seeds";
import FormControllContainer from "../../GlobalUI/FormControllContainer";
import DeleteButton from "../../CVTemplates/Classic/UI/DeleteButton";
type Props = {
  info: EducationData;
};
const EducationForm = (props: Props) => {
  const template = useAppSelector((state) => state.classic);
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
      let field = (
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

      if (key !== "id") {
        switch (template.cvIdentifire) {
          case "designer-01":
            if (template.cvIdentifire === "designer-01" && key !== "City") {
              return field;
            }
            break;
          case "classicCv-01":
          case "casual-01":
            return field;
          default:
            return field;
        }
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
