import ContactForm from "@/components/contact/ContactForm";
import AppLayout from "@/layouts/AppLayout";

export default function ContactMeApp() {
  return (
    <AppLayout title="Contact me" icon="apps/Email.ico">
      <div className="m-4">
        <h1 className="text-2xl text-holo font-bold my-3">Contact me</h1>
        <p className="mb-4">Want to reach out to me directly? You can fill the form down below or send me an e-mail
           at <a href="mailto:itshichabk@gmail.com" className="font-bold underline">itshichabk@gmail.com</a>.
        </p>

        <ContactForm/>
      </div>
    </AppLayout>
  )
}
