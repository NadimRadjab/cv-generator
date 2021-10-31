import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

import {
  EducationData,
  educationData,
  PersonalData,
  personalInfoData,
  professionalExperienceData,
} from "../../../data/seeds";
interface InfoState {
  personalInfo: PersonalData;
  professionalExperience: { [key: string]: string; id: string }[];
  education: EducationData[];
  computerSkills: string;
  languages: { id: string; language: string; level: string }[];
  image: "";
}
type PayloadData = {
  key: string;
  text: string;
  id?: string;
};
const initialState: InfoState = {
  personalInfo: personalInfoData,
  professionalExperience: [{ id: uuidv4(), ...professionalExperienceData }],
  education: [{ ...educationData, id: uuidv4() }],
  computerSkills: "",
  image: "",
  languages: [{ id: uuidv4(), language: "", level: "" }],
};

export const infoSlice = createSlice({
  name: "info",
  initialState,
  reducers: {
    updateData: (
      state,
      action: PayloadAction<{ key: string; text: string }>
    ) => {
      state.personalInfo[action.payload.key] = action.payload.text;
    },
    addExperienceData: (state) => {
      state.professionalExperience.push({
        id: uuidv4(),
        ...professionalExperienceData,
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
      action: PayloadAction<{ id: string; language: string; level: string }>
    ) => {
      state.languages = state.languages.map((info) => {
        if (info.id === action.payload.id) {
          return {
            ...info,
            language: action.payload.language,
            level: action.payload.level,
          };
        }
        return { ...info };
      });
    },
    updateImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export const {
  updateImage,
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
