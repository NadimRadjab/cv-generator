import React from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import {
  removeLanguageData,
  updateLanguageData,
} from "../../../redux/features/ClassicTemplate/infoSlice";
import { lanuageData } from "../../../data/seeds";
import { LanguageData } from "../../../redux/features/ClassicTemplate/types";
type Props = {
  info: LanguageData;
};
const LanguageForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const template = useAppSelector((state) => state.classic);
  const handleRemove = () => {
    dispatch(removeLanguageData(props.info.id));
  };
  const handleChange = (e: any) => {
    dispatch(
      updateLanguageData({
        name: e.target.name,
        value: e.target.value,
        id: props.info.id,
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
        justifyContent: "center",
        width: "100%",
      }}
    >
      <TextField
        onChange={handleChange}
        name="language"
        fullWidth
        value={props.info.language}
        sx={{ m: 2 }}
        variant="standard"
        label="Language"
      />
      {template.cvIdentifire !== "designer-01" && (
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel>Level</InputLabel>
          <Select
            name="level"
            onChange={handleChange}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Level"
            value={props.info.level}
          >
            {Object.keys(lanuageData).map((value, i) => {
              return (
                <MenuItem value={value} key={i + value}>
                  {value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
      {template.cvIdentifire !== "designer-01" && (
        <Button color="error" onClick={handleRemove}>
          Remove
        </Button>
      )}
    </Paper>
  );
};

export default LanguageForm;
