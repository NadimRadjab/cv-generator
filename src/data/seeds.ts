export type PersonalData = {
  ["Full Name"]: string;
  [Street: string]: string;
  ["Zip/City"]: string;
  ["Date of Birth"]: string;
  ["Email-Address"]: string;
  ["Phone Number"]: string;
  ["Matrial Status"]: string;
  Site: string;
  Nationality: string;
};
export type EducationData = {
  id: string;
  [Degree: string]: string;
  ["School Name"]: string;
  City: string;
  From: string;
  Until: string;
};
export type ProfessionalData = {
  Position: string;
  Company: string;
  [id: string]: any;
  City: string;
  From: string;
  Until: string;
  Description: string;
};
export const personalInfoData: PersonalData = {
  ["Full Name"]: "",
  Street: "",
  Location: "",
  ["Zip/City"]: "",
  ["Date of Birth"]: "",
  ["Email-Address"]: "",
  ["Phone Number"]: "",
  ["Matrial Status"]: "",
  Title: "",
  Site: "",
  Nationality: "",
};
export const professionalExperienceData: ProfessionalData = {
  Position: "",
  Company: "",
  City: "",
  From: "",
  Description: "",
  Until: "",
};
export const educationData: EducationData = {
  id: "",
  Degree: "",
  ["School Name"]: "",
  City: "",
  From: "",
  Until: "",
};
export const lanuageData = {
  Beginner: "Beginner",
  Intermediate: "Intermediate",
  Advanced: "Advanced",
  ["Proficient/Fluent"]: "Proficient/Fluent",
  Native: "Native",
};
