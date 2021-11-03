import React from "react";
import ComputerSkillsForm from "./ComputerSkillsForm";
import LanguageForm from "./LanguageForm";
import { Button, Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addLanguageData } from "../../../redux/features/Info/infoSlice";
import LocationButtons from "../../GlobalUI/LocationButtons";

const ExtraSkills = () => {
  const template = useAppSelector((state) => state.classic);
  const dispatch = useAppDispatch();
  const handleLanguage = () => {
    dispatch(addLanguageData());
  };
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
    >
      <LocationButtons location={"/preview"} />
      <Typography fontSize={19}>Additional skills</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: 350,
        }}
      >
        <ComputerSkillsForm />
        {template.languages.map((info) => {
          return <LanguageForm key={info.id} info={info} />;
        })}

        {template.cvIdentifire !== "designer-01" && (
          <Button onClick={handleLanguage}>Add Language</Button>
        )}
      </Box>
    </Box>
  );
};
export default ExtraSkills;
