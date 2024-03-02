import Image from "next/image";
import ts from "@/public/typescript.svg";
import css from "@/public/css.svg";
import html from "@/public/html-new.svg";
import rct from "@/public/react.svg";
import nest from "@/public/nestjs.svg";
import next from "@/public/nextjs.svg";
import about from "@/public/about.svg";

export const Tecnologies = () => {
  return (
    <section className="grid grid-cols-6 text-center justify-items-center gap-2 px-6">
      <Image
        src={ts}
        alt="typescript"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={html}
        alt="html"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={css}
        alt="css"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={rct}
        alt="react"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={nest}
        alt="nestjs"
        width={50}
        height={50}
        className="rounded-md grayscale-[100%] hover:grayscale-0 duration-300 hover:scale-105"
      ></Image>
      <Image
        src={next}
        alt="nextjs"
        width={50}
        height={50}
        className="hover:bg-white rounded-full hover:border-2 border-white grayscale-[100%] hover:grayscale-0 hover:scale-105 duration-300"
      ></Image>
    </section>
  );
};
