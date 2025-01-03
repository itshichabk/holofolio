import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/makeMetadata";

const title = "Settings";
const name = "settings";
export const metadata = makeMetadata(title, name);

export default function SettingsApp() {
  return (
    <AppLayout name={name} title={title}>
        <div className="m-4">
          placeholder
        </div>
    </AppLayout>
  )
}
