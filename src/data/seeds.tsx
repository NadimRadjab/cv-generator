import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";

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

export const IconsData: any = {
  ["Matrial Status"]: <PersonIcon fontSize="small"></PersonIcon>,
  ["Date of Birth"]: <PermContactCalendarIcon fontSize="small" />,
  ["Phone Number"]: <LocalPhoneIcon fontSize="small" />,
  ["Email-Address"]: <EmailIcon fontSize="small" />,
  Site: <LanguageIcon fontSize="small" />,
  Location: <LocationOnIcon fontSize="small" />,
};
