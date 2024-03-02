import type { Metadata } from "next";
import "@/app/globals.css";
import { inter } from "./styles/fonts";
import { HeaderMain } from "./components/HeaderMain";

export const metadata: Metadata = {
  title: "Jepierre's portfolio",
  description: "This is the 2.0 version of the Jean's portfolio",
  icons: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`overflow-x-hidden ${inter.className} overflow-y-auto justify-center`}
      >
        <HeaderMain />
        {children}
      </body>
    </html>
  );
}
