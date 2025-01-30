"use client";

import { ReactNode, useEffect, useState } from "react";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

interface I18nProviderProps {
  children: ReactNode;
  locale: string; 
  initialTranslations: Record<string, string>;
}

export default function I18nProvider({ children, locale, initialTranslations }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    i18next
      .use(initReactI18next)
      .init({
        lng: locale,
        fallbackLng: "pt",
        resources: {
          [locale]: {
            translation: initialTranslations,
          },
        },
        interpolation: { escapeValue: false },
      })
      .then(() => setIsInitialized(true));
  }, [locale, initialTranslations]);

  if (!isInitialized) return null;

  return <I18nextProvider i18n={i18next}>{children}</I18nextProvider>;
}