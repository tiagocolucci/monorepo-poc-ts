import { ReactNode } from "react";
import I18nProvider from "@monorepo/i18n/I18nProvider";
import { getTranslation } from "@monorepo/i18n/getTranslation.server";
import "./globals.css";

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = "en"; 
  const initialTranslations = await getTranslation(locale);

  return (
    <html lang={locale}>
      <body>
        <I18nProvider locale={locale} initialTranslations={initialTranslations}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}