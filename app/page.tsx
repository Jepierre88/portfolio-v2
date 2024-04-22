import Image from "next/image";
import { MainPage } from "./components/MainPage";
import { AboutPage } from "./components/AboutPage";
import { Separator } from "./components/Separator";
import { StudiesPage } from "./components/StudiesPage";
import ContactPage from "./components/ContactPage";

export default function Home() {
  return (
    <main className="flex flex-col justify-center w-full">
      <MainPage />
      <Separator />
      <AboutPage />
      <Separator />
      <StudiesPage />
      <Separator/>
      <ContactPage />
    </main>
  );
}
