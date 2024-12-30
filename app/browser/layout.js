import AppLayout from "@/layouts/AppLayout";

export default function BrowserLayout({ children }) {
  return (
    <AppLayout icon="Browser.ico" title="Browser">
        <div className="bg-white h-full w-full text-black">
            {children}
        </div>
    </AppLayout>
  )
}
