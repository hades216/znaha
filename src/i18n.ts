import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        translation: {
          nav: {
            home: "Home",
            services: "Services",
            portfolio: "Portfolio",
            ourFirm: "Our Firm",
            insights: "Insights"
          }
        }
      },
      fr: {
        translation: {
          nav: {
            home: "Accueil",
            services: "Services",
            portfolio: "Portfolio",
            ourFirm: "Notre Entreprise",
            insights: "Insights"
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            services: "Servicios",
            portfolio: "Portafolio",
            ourFirm: "Nuestra Empresa",
            insights: "Insights"
          }
        }
      },
      de: {
        translation: {
          nav: {
            home: "Startseite",
            services: "Dienstleistungen",
            portfolio: "Portfolio",
            ourFirm: "Unser Unternehmen",
            insights: "Insights"
          }
        }
      },
      it: {
        translation: {
          nav: {
            home: "Home",
            services: "Servizi",
            portfolio: "Portfolio",
            ourFirm: "La Nostra Azienda",
            insights: "Insights"
          }
        }
      }
    }
  });

export default i18n;
