import React from "react";
import ComputerSkillsForm from "../Classic/Forms/ComputerSkillsForm";
import PersonalInfoForm from "../Classic/Forms/PersonalInfoForm";
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
