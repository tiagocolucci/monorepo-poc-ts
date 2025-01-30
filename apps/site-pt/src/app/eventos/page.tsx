"use client";

import { Button } from '@monorepo/ui-ts';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

import React from 'react';

export default function Events() {
 // const t = await getTranslation('pt');
  const { t } = useTranslation();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    
        <h1>{t("events.title")}</h1>
        <p>{t("events.description")}</p>
        <Button>{t("events.event.button_register")}</Button>
        
        <Link href="/">◀️ Voltar para a Home</Link>
      </main>
    </div>
  );
}