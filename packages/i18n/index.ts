import { appWithTranslation } from 'next-i18next';
import path from 'path';

const i18nConfig = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['en', 'es', 'pt'],
  },
  localePath: path.resolve('./translations'),
};

export { i18nConfig };
export default appWithTranslation;