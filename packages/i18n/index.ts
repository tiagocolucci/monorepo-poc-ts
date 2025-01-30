import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import path from 'path';
import Backend from 'i18next-fs-backend';

i18next
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt',
    supportedLngs: ['en', 'es', 'pt'],
    backend: {
      loadPath: path.resolve(process.cwd(), 'translations/{{lng}}.json'), // Corrige erro de busca
    },
    interpolation: {
      escapeValue: false, // React já faz a sanitização
    },
  });

export default i18next;