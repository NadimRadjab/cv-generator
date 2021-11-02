import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import placeholder from "../../../assets/imgs/placeholder.jpeg";
import {
  EducationData,
  educationData,
  PersonalData,
  personalInfoData,
  ProfessionalData,
  professionalExperienceData,
} from "../../../data/seeds";
import {
  AwardsData,
  CertificationData,
  LanguageData,
  PayloadDataNestedUpdate,
} from "./types";
interface InfoState {
  personalInfo: PersonalData;
  professionalExperience: ProfessionalData[];
  education: EducationData[];
  computerSkills: string;
  languages: LanguageData[];
  certifications: CertificationData[];
  awards: AwardsData[];
  image: string;
  description: string;
}
type PayloadData = {
  key: string;
  text: string;
  id?: string;
};
const initialState: InfoState = {
  personalInfo: personalInfoData,
  professionalExperience: [{ ...professionalExperienceData, id: uuidv4() }],
  education: [{ ...educationData, id: uuidv4() }],
  computerSkills: "",
  description: "",
  certifications: [{ id: uuidv4(), certification: "", year: "" }],
  awards: [{ id: uuidv4(), award: "", year: "" }],
  image: placeholder,
  languages: [{ id: uuidv4(), language: "", level: "" }],
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<PayloadData>) => {
      state.personalInfo[action.payload.key] = action.payload.text;
    },
    addExperienceData: (state) => {
      state.professionalExperience.push({
        ...professionalExperienceData,
        id: uuidv4(),
      });
    },
    removeExperienceData: (state, action) => {
      state.professionalExperience = state.professionalExperience.filter(
        (exp) => exp.id !== action.payload
      );
    },
    updateExperienceData: (state, action: PayloadAction<PayloadData>) => {
      state.professionalExperience = state.professionalExperience.map((exp) => {
        if (exp.id === action.payload.id) {
          return { ...exp, [action.payload.key]: action.payload.text };
        }
        return { ...exp };
      });
    },
    addEducationData: (state) => {
      state.education.push({
        ...educationData,
        id: uuidv4(),
      });
    },
    removeEducationData: (state, action) => {
      state.education = state.education.filter(
        (educ) => educ.id !== action.payload
      );
    },
    updateEducationData: (state, action: PayloadAction<PayloadData>) => {
      state.education = state.education.map((info) => {
        if (info.id === action.payload.id) {
          return { ...info, [action.payload.key]: action.payload.text };
        }
        return { ...info };
      });
    },
    updateComputerData: (state, action: PayloadAction<{ text: string }>) => {
      state.computerSkills = action.payload.text;
    },
    addLanguageData: (state) => {
      state.languages.push({
        id: uuidv4(),
        language: "",
        level: "",
      });
    },
    removeLanguageData: (state, action) => {
      state.languages = state.languages.filter(
        (lang) => lang.id !== action.payload
      );
    },
    updateLanguageData: (
      state,
      action: PayloadAction<PayloadDataNestedUpdate>
    ) => {
      state.languages = state.languages.map((info) => {
        if (info.id === action.payload.id) {
          return {
            ...info,
            [action.payload.name]: action.payload.value,
          };
        }
        return { ...info };
      });
    },

    addCertificationsData: (state) => {
      state.certifications.push({
        id: uuidv4(),
        certification: "",
        year: "",
      });
    },

    updateCertificationsData: (
      state,
      action: PayloadAction<PayloadDataNestedUpdate>
    ) => {
      state.certifications = state.certifications.map((info) => {
        if (info.id === action.payload.id) {
          return {
            ...info,
            [action.payload.name]: action.payload.value,
          };
        }
        return { ...info };
      });
    },
    removeCertificationsData: (state, action) => {
      state.certifications = state.certifications.filter(
        (cer) => cer.id !== action.payload
      );
    },

    addAwardsData: (state) => {
      state.awards.push({
        id: uuidv4(),
        award: "",
        year: "",
      });
    },

    updateAwardsData: (
      state,
      action: PayloadAction<PayloadDataNestedUpdate>
    ) => {
      state.awards = state.awards.map((info) => {
        if (info.id === action.payload.id) {
          return {
            ...info,
            [action.payload.name]: action.payload.value,
          };
        }
        return { ...info };
      });
    },
    removeAwardsData: (state, action) => {
      state.awards = state.awards.filter((aw) => aw.id !== action.payload);
    },
    updateImage: (state, action) => {
      state.image = action.payload;
    },
    updateDescription: (state, action: PayloadAction<{ text: string }>) => {
      state.description = action.payload.text;
    },
  },
});

export const {
  updateImage,
  updateDescription,
  updateAwardsData,
  addAwardsData,
  removeAwardsData,
  addCertificationsData,
  updateCertificationsData,
  removeCertificationsData,
  removeEducationData,
  removeExperienceData,
  removeLanguageData,
  updateComputerData,
  updateData,
  updateExperienceData,
  addExperienceData,
  addEducationData,
  updateEducationData,
  addLanguageData,
  updateLanguageData,
} = infoSlice.actions;

export default infoSlice.reducer;
