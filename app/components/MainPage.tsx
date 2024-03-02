import { JumpText } from "./JumpText";

export const MainPage = () => {
  return (
    <section className="start flex w-screen h-screen items-center justify-center flex-col select-none">
      <article className="start-page flex flex-col text-center gap-3">
        <h2 className="font-medium">Jean Pierre is...</h2>
        <h1 className="text-6xl sm:text-8xl text-titleGreen font-bold">
          J3PI3RR3
        </h1>
        <h2>
          YOUR{" "}
          <span className="text-titleCream font-semibold">WEB DEVELOPER</span>
        </h2>
      </article>
      {/* <hr className="w-2/3 my-2 h-0.5 bg-[#2c3360]" /> */}
      <JumpText text="About" />
    </section>
  );
};
