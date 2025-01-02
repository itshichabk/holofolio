import ContactForm from "@/src/components/contact/ContactForm";
import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/utils";

const title = "Contact me";
const name = "contact";
export const metadata = makeMetadata(title, name);

export default function ContactMeApp() {
  return (
    <AppLayout name={name} title={title}>
      <div className="m-4 lg:mx-auto">
        <h1 className="text-2xl text-holo font-bold my-3">Contact me</h1>
        <p className="mb-4">Want to reach out to me directly? You can fill the form down below or send me an e-mail
          at <a href="mailto:itshichabk@gmail.com" className="font-bold underline">itshichabk@gmail.com</a>.
        </p>
        <ContactForm/>
      </div>
    </AppLayout>
  )
}
