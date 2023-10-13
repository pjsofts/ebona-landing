"use client";
import Advantage from "@/components/Advantage";
import Button from "@/components/Button";
import Competition from "@/components/Competition";
import Contact from "@/components/Contact";
import Details from "@/components/Details";
import Funding from "@/components/Funding";
import Future from "@/components/Future";
import Market from "@/components/Market";
import Model from "@/components/Model";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Solution from "@/components/Solution";
import Team from "@/components/Team";
import Thanks from "@/components/Thanks";
import Video from "@/components/Video";

import Image from "next/image";
import { ReactNode, useRef } from "react";

export default function Home() {
  const menu = useRef<HTMLDivElement>(null);

  return (
    <div id="home">
      <div className="bg-[#262626] h-[55px]">
        <div ref={menu} className="hidden">
          <div className="flex text-white justify-around items-center h-[55px]">
            <a href="#home">Home</a>
            <div>About</div>
            <a href="#team">Team</a>
            <a target="_blank" href="https://www.linkedin.com/company/ebonaai/">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center sticky top-0 bg-white shadow-md z-50 p-1">
        <div className="flex">
          <Image
            className="m-4 sm:my-0 sm:mx-4 sm:ml-10 lg:ml-16 xl:ml-20"
            alt="bona"
            src="/images/bona.svg"
            width={34}
            height={34}
          />
          <div className="text-neutral-800 text-xl sm:text-2xl font-medium flex items-center">
            Ebona AI
          </div>
        </div>
        <div className="hidden sm:block sm:flex-1"></div>
        <div className="hidden sm:flex sm:space-x-5 sm:items-center sm:mr-10">
          <a href="#home" className="sm:text-lg lg:text-xl">
            Home
          </a>
          <div className="sm:text-lg lg:text-xl">About</div>
          <a href="#team" className="sm:text-lg lg:text-xl">
            Team
          </a>
          <a
            className="sm:text-lg lg:text-xl"
            target="_blank"
            href="https://www.linkedin.com/company/ebonaai/"
          >
            Contact Us
          </a>
        </div>

        <div className="sm:hidden flex-1 justify-center flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => {
              if (menu.current) {
                menu.current.classList.toggle("hidden");
                if (window.scrollY !== 0) {
                  window.location.href = "#home";
                  menu.current.classList.remove("hidden");
                }
              }
            }}
          >
            <Image src="icons/menu.svg" width={20} height={20} alt="menu" />
          </button>
        </div>

        <div className="flex items-center justify-center mr-6 sm:mr-10 lg:mr-16 xl:mr-20">
          <a
            href="#meetus"
            className="w-20 h-10 justify-center items-center flex rounded-lg sm:w-32 sm:h-10 sm:rounded-[18px] sm:text-xl  font-medium bg-[#FF8F00] text-white"
          >
            Meet Us
          </a>
        </div>
      </div>

      <div id="home" className="sm:flex sm:mt-[120px]">
        <div className="font-medium grow justify-center flex ml-2">
          <div>
            <div className="mt-10 text-6xl sm:text-[95px] sm:leading-[95px]">
              EBONA <br />
              Education
            </div>
            <div className="text-4xl sm:text-[33px] mt-4 sm:mt-4">
              Your Ai Powered
            </div>
            <div className="text-4xl sm:text-[33px] sm:mt-2">
              Education Mentor
            </div>
            <div className="mt-10">
              <Button
                target="_blank"
                text="Contact Us"
                to={"https://www.linkedin.com/company/ebonaai/"}
              />
              <Button text="Meet Us" to="#meetus" target="" />
            </div>
          </div>
        </div>
        <div className="px-4 mt-4 sm:mt-0 flex justify-center sm:px-0 sm:mr-10 lg:mr-16 xl:mr-20">
          <Image
            src="/images/chip.png"
            width={405}
            height={430}
            priority
            alt="chip"
          />
        </div>
      </div>
      <Video />
      <Problem />
      <Solution />
      <Competition />
      <Advantage />
      <Market />
      <Model />
      <Future />
      {/* <Funding />
      <Product /> */}
      <Team />
      <Contact />
      <Details />
      <Thanks />
    </div>
  );
}
