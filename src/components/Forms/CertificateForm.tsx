import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import {
  removeCertificationsData,
  updateCertificationsData,
} from "../../redux/features/ClassicTemplate/infoSlice";
import DeleteButton from "../CVTemplates/Classic/UI/DeleteButton";
import FormControllContainer from "../GlobalUI/FormControllContainer";
type Props = {
  info: { id: string; certification: string; year: string };
};
const CertificateForm = (props: Props) => {
  const dispatch = useAppDispatch();
  const [items, setItems] = useState({
    certification: "",
    year: "",
  });
  const handleChange = (e: any) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(
      updateCertificationsData({
        award: items.certification,
        year: items.year,
        id: props.info.id,
      })
    );
  }, [dispatch, items]);
  const handleRemove = () => {
    dispatch(removeCertificationsData(props.info.id));
  };
  return (
    <FormControllContainer>
      <TextField
        onChange={handleChange}
        name="year"
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label="Certifications Year"
      />
      <TextField
        multiline
        onChange={handleChange}
        name="certification"
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label="Certifications"
      />
      <DeleteButton onRemove={handleRemove}>Remove</DeleteButton>
    </FormControllContainer>
  );
};

export default CertificateForm;
