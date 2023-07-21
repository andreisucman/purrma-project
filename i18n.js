import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAvatars from "./locales/Avatars/en.json";
import trAvatars from "./locales/Avatars/tr.json";
import enCheckApp from "./locales/CheckApp/en.json";
import trCheckApp from "./locales/CheckApp/tr.json";
import enFooter from "./locales/common/Footer/en.json";
import trFooter from "./locales/common/Footer/tr.json";
import enConcept from "./locales/Concept/en.json";
import trConcept from "./locales/Concept/tr.json";
import enContact from "./locales/Contact/en.json";
import trContact from "./locales/Contact/tr.json";
import enNavigation from "./locales/Header/Navigation/en.json";
import trNavigation from "./locales/Header/Navigation/tr.json";
import enHero from "./locales/Hero/en.json";
import trHero from "./locales/Hero/tr.json";
import enProject from "./locales/Project/en.json";
import trProject from "./locales/Project/tr.json";
import enRoadmap from "./locales/Roadmap/en.json";
import trRoadmap from "./locales/Roadmap/tr.json";
import enMission from "./locales/Mission/en.json";
import trMission from "./locales/Mission/tr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      Avatars: enAvatars,
      CheckApp: enCheckApp,
      Footer: enFooter,
      Concept: enConcept,
      Contact: enContact,
      Navigation: enNavigation,
      Hero: enHero,
      Project: enProject,
      Roadmap: enRoadmap,
      Mission: enMission,
    },
    tr: {
      Avatars: trAvatars,
      CheckApp: trCheckApp,
      Footer: trFooter,
      Concept: trConcept,
      Contact: trContact,
      Navigation: trNavigation,
      Hero: trHero,
      Project: trProject,
      Roadmap: trRoadmap,
      Mission: trMission,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  returnEmptyString: true,
});

export default i18n;
