"use client";
import { goTo } from "../libs/features";

export const HeaderMain = () => {
  return (
    <header className="header-main fixed flex items-center w-screen h-20 backdrop-blur-[2px] z-10">
      <nav className="w-full">
        <ul className="justify-around flex flex-row mx-6 text-sm sm:text-lg font-light">
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleGreen">
            <button
              onClick={() => {
                goTo("start");
              }}
            >
              Start
            </button>
          </li>
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleBlue">
            <button
              onClick={() => {
                goTo("about");
              }}
            >
              About
            </button>
          </li>
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleGreen">
            <button
              onClick={() => {
                goTo("studies");
              }}
            >
              Studies
            </button>
          </li>
          <li className="header-items border-2 border-[transparent] duration-300 hover:border-b-titleGreen">
            <button
              onClick={() => {
                goTo("contact");
              }}
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
