import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import MainTemplate from "@/components/frontendcomponent/templates/MainTemplate";
import { ReduxProvider } from "@/store/provider";

const louizeTrial = localFont({
  src: "../../public/font/Louizetrial.woff",
  weight: "400",
  style: "normal",
  variable: "--louize",
});
const sweetSans = localFont({
  src: [
    {
      path: "../../public/font/SweetSansPro-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/SweetSansPro-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--sweetsans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legacy of Marwar",
  description: "Legacy of Marwar website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${louizeTrial.variable} ${sweetSans.variable}`}
        cz-shortcut-listen="true"
      >
        <ReduxProvider>
          <MainTemplate>{children}</MainTemplate>
        </ReduxProvider>
      </body>
    </html>
  );
}
