"use client";
import Button from "@/components/Button";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Video from "@/components/Video";
import Image from "next/image";
import { ReactNode, useRef } from "react";

export default function Home() {
  const menu = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="bg-[#262626] h-[55px]"></div>
      <div className="sm:mt-14 flex items-center">
        <div className="flex">
          <Image
            className="m-4 sm:my-0 sm:mx-4 sm:ml-10 lg:ml-16 xl:ml-20"
            alt="bona"
            src="/images/bona.svg"
            width={74}
            height={74}
          />
          <div className="text-neutral-800 text-xl sm:text-2xl lg:text-4xl font-medium flex items-center">
            Ebona AI
          </div>
        </div>
        <div className="hidden sm:block sm:flex-1"></div>
        <div
          className="hidden sm:flex sm:space-x-5 sm:items-center sm:mr-10"
          ref={menu}
        >
          <div className="sm:text-lg lg:text-xl">Home</div>
          <div className="sm:text-lg lg:text-xl">About Us</div>
          <div className="sm:text-lg lg:text-xl">Services</div>
          <div className="sm:text-lg lg:text-xl">Our Features</div>
          <div className="sm:text-lg lg:text-xl ">Contact Us</div>
        </div>

        <div className="sm:hidden flex-1 justify-center flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => {
              if (menu.current) {
                menu.current.classList.toggle("hidden");
              }
            }}
          >
            <Image src="icons/menu.svg" width={20} height={20} alt="menu" />
          </button>
        </div>

        <div className="flex items-center justify-center mr-6 sm:mr-10 lg:mr-16 xl:mr-20">
          <button
            type="button"
            className="w-20 h-10 rounded-lg sm:w-30 lg:w-48 sm:h-15 lg:h-20 sm:rounded-[18px] sm:text-lg lg:text-3xl font-medium bg-[#FF8F00] text-white"
          >
            Call Us
          </button>
        </div>
      </div>

      <div className="sm:flex sm:mt-[120px]">
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
              <Button text="Contact Us" />
              <Button text="About Us" />
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
    </div>
  );
}
