import React from "react";
import ComputerSkillsForm from "./ComputerSkillsForm";
import LanguageForm from "./LanguageForm";
import { Button, Paper, Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addLanguageData } from "../../../redux/features/ClassicTemplate/infoSlice";
const ExtraSkills = () => {
  const template = useAppSelector((state) => state.classic);
  const dispatch = useAppDispatch();
  const handleLanguage = () => {
    dispatch(addLanguageData());
  };
  return (
    <Box
      sx={{
        alignSelf: "flex-start",
        width: "100%",
        mt: 2,
        textAlign: "center",
      }}
    >
      <Typography fontSize={19}>Additional skills</Typography>
      <ComputerSkillsForm />
      <Box>
        {template.languages.map((info) => {
          return <LanguageForm key={info.id} info={info} />;
        })}
        <Box>
          <Button onClick={handleLanguage}>Add Language</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ExtraSkills;
