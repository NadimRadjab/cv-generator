export const defaultProps = {
  personalInfoEng: [
    {
      titleEng: "Personal Information",
      nameEng: "Name",
      streetEng: "Street",
      placeEng: "Zip/City",
      birthDateEng: "Birth Date",
      emailEng: "Email",
      mobilEng: "Mobil",
      statusEng: "Status",
      nationalityEng: "Nationality",
    },
  ],
  personalInfoGerm: [
    {
      titleGerman: "Persönliche Angaben",
      nameGerman: "Name",
      streetGerman: "Strasse",
      placeGerman: "Ort/Stadt",
      birthDateGerman: "Geburtsdaten",
      emailGerman: "email",
      mobilGerman: "mobil",
      statusGerman: "Familienstand",
      nationalityGerman: "Nationalität",
    },
  ],
  ExpInfoEng: {
    titleEng: "Professional Experience ",
    positionEng: "Position",
    companyEng: "Company",
    cityEng: "City",
    dateFromEng: "From",
    dateToEng: "Until",
  },
  ExpInfoGerm: {
    titleGerman: "Berufliche Erfahrungen",
    positionGerman: "Position",
    companyGerman: "Firma",
    cityGerman: "Stadt",
    dateFromGerman: "von",
    dateToGerman: "bis",
  },

  SchoolInfoGerm: {
    titleGerman: "Schulausbildung",
    degreeGerman: "Ausbildung",
    schoolGerman: "Schulname",
    cityGerman: "Stadt",
    dateFromGerman: "von",
    dateToGerman: "bis",
  },
  SchoolInfoEng: {
    titleEng: "Education",
    degreeEng: "Degree",
    schoolEng: "School Name",
    cityEng: "City",
    dateFromEng: "From",
    dateToEng: "Until",
  },
  computerInfoGerm: {
    computerGerman: "EDV-Kenntnisse",
  },
  computerInfoEng: {
    computerEng: "Coumputer Skills",
  },
  languageInfoGerm: {
    languageGerman: "Sprachen",
    levelGerman: "Niveau",
    beginnerGerman: "Anfänger",
    intermediateGerman: "Mittlere",
    advancedGerman: "Fortgeschritten",
    fluentGerman: "Kompetent/Fließend",
    motherGerman: "Muttersprache",
  },
  languageInfoEng: {
    languageEng: "Language",
    levelEng: "Level",
    beginnerEng: "Beginner",
    intermediateEng: "Intermediate",
    advancedEng: "Advanced",
    fluentEng: "Proficient/Fluent",
    motherEng: "Native",
  },
};

const state = {
  isGerman: false,
  experience: [
    {
      position: "Position",
      company: "Company Name",
      city: "City Name",
      dateFrom: "04/2018",
      dateTo: "04/2020",
    },
  ],
  school: [
    {
      degree: "Degree",
      schoolName: "School Name,",
      city: "City",
      dateFrom: "From",
      dateTo: " To",
    },
  ],
  computerSkill: [
    {
      computerSkills: "Windows,Mac OS,MS Office",
    },
  ],
  languages: [
    {
      language: "English",
      level: "Level",
    },
  ],

  street: "Street Nr",
  place: "Zip/City",
  telephone: "Phone",
  email: "email@gmail.com",
  fullName: "Kevin Sarmp",
  birthDate: "19.02.1991",
  nationality: "nationality",
  status: "single",
  drivingLicences: "Class B",
  expTitle: "Professional Experience",
  schoolTitle: "Education",
  skillsTitle: "Extra Skills",
  drivingTitle: "Driving Licence",
  languageTitle: "Languages",
  computerTitle: "Computer Skills",
};
