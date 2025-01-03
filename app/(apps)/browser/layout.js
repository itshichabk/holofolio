import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/makeMetadata";

const title = "Browser";
const name = "browser";
export const metadata = makeMetadata(title, name);

export default function BrowserLayout({ children }) {
  return (
    <AppLayout name={name} title={title}>
      <div className="bg-white h-full w-full text-black">
          {children}
      </div>
    </AppLayout>
  )
}
