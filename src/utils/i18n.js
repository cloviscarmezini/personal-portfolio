import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import i18nBackend from "i18next-http-backend";

import translationEng from "./locales/en/translation.json";
import translationPt from './locales/pt/translation.json';

i18n
.use(i18nBackend)
.use(initReactI18next).init({
  lng: "en-US",
  fallbackLng: "pt-BR",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    "en-US": {
      translations: translationEng
    },
    "pt-BR": {
      translations: translationPt
    },
  },
  ns: ["translations"],
  defaultNS: "translations"
});

export default i18n;
