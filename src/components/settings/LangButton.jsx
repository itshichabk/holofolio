"use client";

import { setUserLocale } from "@/src/services/locale";
import {useTranslations, useLocale} from 'next-intl';

export default function LangButton() {
        const t = useTranslations('Global');

  const locale = useLocale();

  return (
    <div>
        <button onClick={() => { setUserLocale("en") }}>EN</button><br/>
        <button onClick={() => { setUserLocale("fr") }}>FR</button><br/>
            <p>{t('hello')}</p>

    </div>
  )
}
