import ContactForm from "@/src/components/contact/ContactForm";
import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/utils";
import {useTranslations} from 'next-intl';

const title = "Contact me";
const name = "contact";
export const metadata = makeMetadata(title, name);

export default function ContactMeApp() {
  const t = useTranslations('Contact');

  return (
    <AppLayout name={name} title={title}>
      <div className="m-4 lg:mx-auto">
        <h1 className="text-2xl text-holo font-bold my-3">{t("contactme")}</h1>
        <p className="mb-4">
          {t("description")}
          <a href="mailto:itshichabk@gmail.com" className="font-bold underline">itshichabk@gmail.com</a>.
        </p>
        <ContactForm/>
      </div>
    </AppLayout>
  )
}
