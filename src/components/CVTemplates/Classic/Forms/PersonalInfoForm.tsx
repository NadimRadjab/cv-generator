import React from "react";
import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  updateData,
  updateImage,
} from "../../../../redux/features/ClassicTemplate/infoSlice";
import FormControllContainer from "../../../GlobalUI/FormControllContainer";
interface Props {
  isDesigner?: boolean;
}
const PersonalInfoForm: React.FC<Props> = ({ isDesigner }) => {
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
    return Object.keys(personalInfo).map((key, i) => {
      if (isDesigner) {
        if (key !== "Street" && key !== "Nationality" && key !== "Zip/City") {
          return (
            <TextField
              key={i}
              onChange={handleChange}
              name={key}
              value={personalInfo[key]}
              sx={{ p: 2, m: 2 }}
              variant="standard"
              label={key}
            />
          );
        }
      }
    });
  };
  const classes = useStyles();

  return (
    <FormControllContainer>
      {renderTextField()}
      <label className={classes.labelPic} htmlFor="picture" id="picLabel">
        Add a Photo
      </label>
      <input
        style={{ display: "none" }}
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
const useStyles = makeStyles({
  labelPic: {
    justifySelf: "center",
    padding: 5,
    marginLeft: 3,
    height: "30px",
    width: "90%",
    color: "#12824C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export default PersonalInfoForm;
