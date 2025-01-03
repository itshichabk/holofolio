import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/makeMetadata";

const title = "Gallery";
const name = "gallery";
export const metadata = makeMetadata(title, name);

export default function GalleryLayout({children}) {
  return (
    <AppLayout name={name} title={title}>
      {children}
    </AppLayout>
  )
}
