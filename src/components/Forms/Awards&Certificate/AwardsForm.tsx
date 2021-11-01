import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import {
  removeAwardsData,
  updateAwardsData,
} from "../../../redux/features/ClassicTemplate/infoSlice";
import DeleteButton from "../../CVTemplates/Classic/UI/DeleteButton";
import FormControllContainer from "../../GlobalUI/FormControllContainer";
type Props = {
  info: { id: string; awards: string; year: string };
};
const AwardsForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState({
    award: "",
    year: "",
  });
  const handleChange = (e: any) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(
      updateAwardsData({
        award: items.award,
        year: items.year,
        id: props.info.id,
      })
    );
  }, [dispatch, items]);
  const handleRemove = () => {
    dispatch(removeAwardsData(props.info.id));
  };
  return (
    <FormControllContainer>
      <TextField
        onChange={handleChange}
        name="year"
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label="Award Year"
      />
      <TextField
        multiline
        onChange={handleChange}
        name="award"
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label="Award"
      />
      <DeleteButton onRemove={handleRemove}>Remove</DeleteButton>
    </FormControllContainer>
  );
};

export default AwardsForm;
