import React from "react";
import { Paper, TextField } from "@mui/material";
import { useAppDispatch } from "../../../redux/hooks";
import {
  removeCertificationsData,
  updateCertificationsData,
} from "../../../redux/features/Info/infoSlice";
import DeleteButton from "../../CVTemplates/Classic/UI/DeleteButton";
type Props = {
  info: { id: string; certification?: string; year?: string };
};
const CertificateForm = (props: Props) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    dispatch(removeCertificationsData(props.info.id));
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      updateCertificationsData({
        name: e.target.name,
        value: e.target.value,
        id: props.info.id,
      })
    );
  };
  return (
    <Paper sx={{ m: 2 }}>
      <TextField
        onChange={handleChange}
        name="year"
        value={props.info.year}
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label="Certifications Year"
      />
      <TextField
        multiline
        value={props.info.certification}
        onChange={handleChange}
        name="certification"
        sx={{ p: 2, m: 2 }}
        variant="standard"
        label="Certifications"
      />
      <DeleteButton onRemove={handleRemove}>Remove</DeleteButton>
    </Paper>
  );
};

export default CertificateForm;
