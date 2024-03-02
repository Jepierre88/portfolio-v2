"use client";
import Image from "next/image";
import tools from "@/public/tools.svg";
import itm from "@/public/itm.svg";
import school from "@/public/colegio.svg";
export const StudiesPage = () => {
  return (
    <section className="studies flex w-full flex-col mt-12 sm:mt-0 justify-center h-screen items-center text-center select-none ">
      <article className="studies-content flex flex-col  p-8 rounded-lg max-w-3xl">
        <div className=" flex flex-row w-full justify-center mb-4 text-4xl font-bold text-titleCream items-end gap-2">
          <header className="flex flex-row gap-2">
            {" "}
            <h1>Studies</h1>
            <Image src={tools} width={35} height={35} alt="icon"></Image>
          </header>
        </div>
      </article>
      <article className="studies-schools flex flex-col gap-6 px-3 py-4 rounded-xl">
        <article className="w-full flex justify-center flex-col items-center gap-6 bg-backGround px-10 py-6 rounded-xl hover:scale-105 duration-500">
          <h1 className="font-semibold text-titleBlue">
            Instituto Tecnológico Metropolitano ITM
          </h1>
          <section className="flex flex-row gap-7">
            <div className="text-end flex flex-col items-center justify-between">
              <h2 className="text-end">Software Development Tecnology</h2>
              <h2 className="justify-end">Current</h2>
            </div>
            <Image
              src={itm}
              width={75}
              height={75}
              alt="itm logo"
              className="itm-logo"
            ></Image>
          </section>
        </article>
        <article className="w-full flex justify-center flex-col items-center gap-6 bg-backGround px-10 py-6 rounded-xl hover:scale-105 duration-500">
          <h1 className="font-semibold text-titlePink">
            Institución educativa José Félix de Restrepo Vélez
          </h1>
          <section className="flex flex-row gap-7">
            <div className="text-end flex flex-col items-center justify-center">
              <h2 className="text-end">Bachelor</h2>
              <h2 className="justify-end">2010-2021</h2>
            </div>
            <Image
              src={school}
              width={75}
              height={75}
              alt="school logo"
              className="school-logo"
            ></Image>
          </section>
        </article>
      </article>
    </section>
  );
};
