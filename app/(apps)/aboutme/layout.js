import MainSection from "@/src/components/aboutme/MainSection";
import WelcomeSection from "@/src/components/aboutme/WelcomeSection";
import AppLayout from "@/src/layouts/AppLayout";
import { makeMetadata } from "@/src/utils/makeMetadata";

const title = "About me";
const name = "aboutme";
export const metadata = makeMetadata(title, name);

export default function AboutMeLayout({children}) {
  return (
    <AppLayout name={name} title={title} translucent>
      <WelcomeSection/>
      <MainSection>
        {children}
      </MainSection>
    </AppLayout>
  )
}
