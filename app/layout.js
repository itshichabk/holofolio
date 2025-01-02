import { Roboto } from "next/font/google";
import "./globals.css";
import Desktop from "@/src/components/Desktop";

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

export default function RootLayout({ children }) {

  return (
    <html className={roboto.className}>
      <body>
        <Desktop>
          {children}
        </Desktop>
      </body>
    </html>
  );
}
