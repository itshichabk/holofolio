import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/utils";

const title = "Camera";
const name = "camera";
export const metadata = makeMetadata(title, name);

export default function ContactMeApp() {
  return (
    <AppLayout name={name} title={title}>
        
    </AppLayout>
  )
}
