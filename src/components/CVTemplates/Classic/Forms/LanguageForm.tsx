import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import { useAppDispatch } from "../../../../redux/hooks";
import {
  removeLanguageData,
  updateLanguageData,
} from "../../../../redux/features/ClassicTemplate/infoSlice";
import { lanuageData } from "../../../../data/seeds";
import DeleteButton from "../UI/DeleteButton";
type Props = {
  info: { id: string; language: string; level: string };
};
const LanguageForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState({
    language: "",
    level: "",
  });
  const handleChange = (e: any) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(
      updateLanguageData({
        language: items.language,
        level: items.level,
        id: props.info.id,
      })
    );
  }, [dispatch, items]);
  const handleRemove = () => {
    dispatch(removeLanguageData(props.info.id));
  };
  return (
    <Paper
      sx={{
        mt: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "cneter",
      }}
    >
      <TextField
        onChange={handleChange}
        name="language"
        fullWidth
        value={items.language}
        sx={{ p: 2, m: 2, width: "80%" }}
        variant="standard"
        label="Language"
      />
      <FormControl sx={{ width: "80%", m: 1 }} fullWidth>
        <InputLabel>Level</InputLabel>
        <Select
          name="level"
          onChange={handleChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Level"
          value={items.level}
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
      <DeleteButton onRemove={handleRemove}>Remove</DeleteButton>
    </Paper>
  );
};

export default LanguageForm;
