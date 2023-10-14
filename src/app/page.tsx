"use client";
import Advantage from "@/components/Advantage";
import Button from "@/components/Button";
import Competition from "@/components/Competition";
import Contact from "@/components/Contact";
import Details from "@/components/Details";
import Funding from "@/components/Funding";
import Future from "@/components/Future";
import Header from "@/components/Header";
import Market from "@/components/Market";
import Model from "@/components/Model";
import Problem from "@/components/Problem";
import Product from "@/components/Product";
import Solution from "@/components/Solution";
import Team from "@/components/Team";
import Thanks from "@/components/Thanks";
import Video from "@/components/Video";
import YouTubeEmbed from "@/components/Youtube";
import Image from "next/image";
import { ReactNode, useEffect, useRef } from "react";

export default function Home() {
  return (
    <div id="home">
      <Header />

      <div id="home" className="sm:flex sm:mt-[120px] sm:pb-20 pb-8">
        <div className="font-medium flex-1 flex">
          <div className="w-full">
            <div className="mt-10 text-6xl sm:text-[95px] sm:leading-[95px] justify-center flex">
              EBONA <br />
              Education
            </div>
            <div className="sm:flex">
              <div className="mr-20 hidden sm:block">
                <Image
                  alt="brain"
                  src="/images/brain.png"
                  width={194}
                  height={235}
                />
              </div>
              <div className="sm:pl-12 flex sm:block flex-col items-center justify-center mt-8">
                <div className="border-l-[4px] pl-5 border-solid border-black">
                  <div className="text-4xl sm:text-[33px]">Your Ai Powered</div>
                  <div className="text-4xl sm:text-[33px] sm:mt-2">
                    Education Mentor
                  </div>
                </div>
                <div className="flex">
                  <div className="mt-10">
                    <Button
                      target="_blank"
                      text="Contact Us"
                      to={"https://www.linkedin.com/company/ebonaai/"}
                    />
                  </div>
                  <div className="mt-10">
                    <Button text="Meet Us" to="#meetus" target="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 mt-4 sm:mt-0 flex justify-center sm:px-0 sm:mr-10 lg:mr-16 xl:mr-20 relative">
          <Image
            className="hidden sm:block absolute top-[-50px] left-[-200px] z-0"
            src="/images/banner_shape.png"
            width={267}
            height={142}
            priority={false}
            alt="chip"
          />
          <div className="z-10 w-[390px]  sm:w-[580px]">
            <YouTubeEmbed
              link="https://www.youtube.com/embed/-KURXzFcjuo?si=LECg7FF6Zal0g0vl"
              width="100%"
              height="325"
            />
          </div>
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
