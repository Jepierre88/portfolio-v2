import Image from "next/image";
import about from "@/public/about.svg";
import { Tecnologies } from "./Tecnologies";

export const AboutPage = () => {
  return (
    <section className="about flex w-full flex-col mt-12 sm:mt-0 justify-center h-screen items-center text-center select-none gap-5">
      <article className="about-content flex flex-col  p-8 rounded-lg max-w-3xl">
        <div className=" flex flex-row w-full justify-center mb-4 text-4xl font-bold text-titleGreen items-end gap-2">
          <header className="flex flex-row">
            <h1>About me</h1>
            <Image src={about} width={35} height={35} alt="icon"></Image>
          </header>
        </div>
        <p className="text-sm">
          A passionate <span className="text-titleBlue">front-end</span> web
          developer with a dedication to design and a love for creating good
          <span className="text-titlePink"> user experiences.</span>
          <br />
          <br />
          Despite still being in the learning stage, I have experience in
          technologies such as <span className="text-orange-500">HTML</span>,
          <span className="text-titleBlue"> CSS</span>,{" "}
          <span className="text-yellow-300"> Javascript</span>
          , among others.
          <br />
          <br />I am committed to staying up-to-date with the{" "}
          <span className="text-titlePurple">latest web technologies</span> and
          trends to ensure that my work is always at the forefront of
          innovation.
        </p>
      </article>
      <article className="about-tecnologies flex flex-col gap-6 px-3 py-4 rounded-xl">
        <h1 className="text-center text-2xl font-bold text-titleCream">
          Tecnologies
        </h1>
        <Tecnologies />
      </article>
    </section>
  );
};
