import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/utils";

const title = "My travel map";
const name = "maps";
export const metadata = makeMetadata(title, name);

export default function TravelMapLayout({children}) {
  return (
    <AppLayout name={name} title={title}>
        {children}
    </AppLayout>
  )
}
