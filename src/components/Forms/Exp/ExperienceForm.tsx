import React from "react";
import { Paper, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  removeExperienceData,
  updateExperienceData,
} from "../../../redux/features/Info/infoSlice";
import FormControllContainer from "../../GlobalUI/FormControllContainer";
import DeleteButton from "../../CVTemplates/Classic/UI/DeleteButton";
import { ProfessionalData } from "../../../data/seeds";
type Props = {
  exp: ProfessionalData;
};
const ExperienceForm = (props: Props) => {
  const template = useAppSelector((state) => state.classic);
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
      let field = (
        <TextField
          key={i}
          multiline={key === "Description" ? true : false}
          value={props.exp[key]}
          onChange={handleChange}
          name={key}
          sx={{ p: 2, m: 2 }}
          variant="standard"
          label={key}
        />
      );
      if (key !== "id") {
        switch (template.cvIdentifire) {
          case "deigner-01":
            if (key !== "City") return field;
            break;
          case "classicCv-01":
            if (key !== "Description") return field;
            break;
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

export default ExperienceForm;
