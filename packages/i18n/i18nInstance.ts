"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";

// Configuração básica do i18next para uso no client
i18next.use(initReactI18next).init({
  lng: "pt", // Define o idioma padrão
  fallbackLng: "pt", // Idioma de fallback
  interpolation: { escapeValue: false },
  resources: {
    pt: {
      translation: {
        welcome_message: "Bem-vindo à nossa plataforma!"
      }
    },
    en: {
      translation: {
        welcome_message: "Welcome to our platform!"
      }
    }
  }
});

export default i18next;