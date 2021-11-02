import LocationOnIcon from "@mui/icons-material/LocationOn";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import LanguageIcon from "@mui/icons-material/Language";

export interface PersonalDesignerData {
  name: {};
}

export const personalInfoDesignerData: any = {
  Name: "",

  ["Matrial Status"]: "",
  ["Date of Birth"]: "",

  ["Phone Number"]: "",

  ["Email-Address"]: "",

  ["Site"]: "",
  Location: "",
};

export const IconsData: any = {
  ["Matrial Status"]: <PersonIcon fontSize="small"></PersonIcon>,
  ["Date of Birth"]: <PermContactCalendarIcon fontSize="small" />,
  ["Phone Number"]: <LocalPhoneIcon fontSize="small" />,
  ["Email-Address"]: <EmailIcon fontSize="small" />,
  Site: <LanguageIcon fontSize="small" />,
  Location: <LocationOnIcon fontSize="small" />,
};
