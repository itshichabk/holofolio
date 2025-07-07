import { Roboto } from "next/font/google";
import "./globals.css";
import Desktop from "@/src/components/Desktop";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default: 'Holofolio',
    template: '%s | Holofolio',
  },
  description: "My portfolio website!",
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  return (
    <html className={roboto.className}>
      <body>
        <Desktop>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </Desktop>
      </body>
    </html>
  );
}
