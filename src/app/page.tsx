"use client";

import Head from "next/head";
import Image from "next/image";
import { ReactNode, useRef } from "react";

export default function Home() {
  const menu = useRef<HTMLElement>(null);

  return (
    <div>
      <div className="bg-[#262626] h-[55px]"></div>
      <div className="container mx-auto sm:mt-14 flex justify-between items-center]">
        <div className="flex">
          <Image
            className="m-2 sm:mr-4"
            alt="bona"
            src="/images/bona.svg"
            width={74}
            height={74}
            sizes="(max-width: 768px) 40px, (max-width: 1200px) 74px"
            priority
          />
          <div className="text-neutral-800 text-xl sm:text-4xl font-medium flex items-center">
            Ebona AI
          </div>
        </div>
        <div className="hidden sm:flex sm:space-x-5 sm:items-center" ref={menu}>
          <div className="sm:text-xl">Home</div>
          <div className="sm:text-xl">About Us</div>
          <div className="sm:text-xl">Services</div>
          <div className="sm:text-xl">Our Features</div>
          <div className="sm:text-xl">Contact Us</div>
        </div>

        <div className="sm:hidden flex items-center">
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

        <div className="flex items-center justify-center mr-2">
          <button
            type="button"
            className="w-20 h-10 rounded-lg sm:w-48 sm:h-20 sm:rounded-[18px] sm:text-3xl font-medium bg-[#FF8F00] text-white"
          >
            Call Us
          </button>
        </div>
      </div>

      <div className="container sm:flex sm:mt-[120px]">
        <div className="font-medium grow justify-center flex ml-2">
          <div>
            <div className="text-4xl sm:text-[95px] sm:leading-[95px]">
              EBONA <br />
              Education
            </div>
            <div className="text-2xl sm:text-[33px] mt-4 sm:mt-4">
              Your Ai Powered
            </div>
            <div className="text-2xl sm:text-[33px] sm:mt-2">
              Education Mentor
            </div>
          </div>
        </div>
        <div className="px-4 mt-4 sm:mt-0 flex justify-center">
          <Image
            src="/images/chip.png"
            width={405}
            height={430}
            priority
            alt="chip"
          />
        </div>
      </div>
    </div>
  );
}
