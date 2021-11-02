import React from "react";
import { TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  updateData,
  updateImage,
} from "../../redux/features/ClassicTemplate/infoSlice";
import FormControllContainer from "../GlobalUI/FormControllContainer";
import { Box } from "@mui/system";
import LocationButtons from "../GlobalUI/LocationButtons";
interface Props {}

const PersonalInfoForm: React.FC<Props> = () => {
  const template = useAppSelector((state) => state.classic);
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
    return Object.keys(template.personalInfo).map((key, i) => {
      let field = (
        <TextField
          key={i}
          onChange={handleChange}
          name={key}
          value={template.personalInfo[key]}
          sx={{ p: 2, m: 2 }}
          variant="standard"
          label={key}
        />
      );
      switch (template.cvIdentifire) {
        case "designer-01":
          if (key !== "Street" && key !== "Nationality" && key !== "Zip/City") {
            return field;
          }
          break;
        case "classicCv-01":
          if (key !== "Title" && key !== "Location" && key !== "Site") {
            return field;
          }
          break;

        default:
          return field;
      }
    });
  };
  const classes = useStyles();

  return (
    <Box textAlign="center">
      <LocationButtons location={"form/exp"} />
      <Typography fontSize={19}>Personal Information</Typography>
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
    </Box>
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
