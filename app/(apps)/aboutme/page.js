import { useTranslations } from "next-intl";

export default function AboutMe() {
  const t = useTranslations('AboutMe');

  return (
    <div className="flex items-center justify-center h-full">
      <h1 className="text-holo text-3xl">{t("click")}</h1>
    </div>
  );
}
