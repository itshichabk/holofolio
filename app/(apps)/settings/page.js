import SettingsRow from "@/src/components/aboutme/SettingsRow";
import LangButton from "@/src/components/settings/LangButton";
import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/utils";

const title = "Settings";
const name = "settings";
export const metadata = makeMetadata(title, name);

export default function SettingsApp() {
  return (
    <AppLayout name={name} title={title}>
        <div className="m-4 w-full">
          <LangButton/>
        </div>
    </AppLayout>
  )
}
