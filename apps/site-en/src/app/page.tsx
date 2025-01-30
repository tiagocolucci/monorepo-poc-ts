"use client";

import { Button } from '@monorepo/ui-ts';

// import { getTranslation } from "@monorepo/i18n/getTranslation.server";
import { useTranslation } from "react-i18next";

import React from 'react';
import Link from 'next/link';

export default function Home() {
 // const t = await getTranslation('pt');
  const { t } = useTranslation();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        
        {/* <h1>{t.welcome_message}</h1>
        <Button>Teste</Button> */}

        <h1>{t("welcome_message")}</h1>
        <Button>{t("button_signup")}</Button>
        <Link href="/events">{t("button_events")} ➡️</Link>
        
      </main>
    </div>
  );
}