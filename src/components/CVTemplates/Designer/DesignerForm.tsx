import React from "react";
import ComputerSkillsForm from "../../Forms/ExtraSkills/ComputerSkillsForm";
import PersonalInfoForm from "../../Forms/PersonalInfoForm";
import PersonalInfoDesignerForm from "./Form/PersonalInfoForm";

const DesignerForm = () => {
  return (
    <div>
      <PersonalInfoForm isDesigner />
      <ComputerSkillsForm />
    </div>
  );
};

export default DesignerForm;
