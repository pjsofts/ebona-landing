import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="bg-[#262626] h-[55px]"></div>
      <div className="flex items-center mr-[85px] ml-[85px] pt-[60px]">
        <Image
          className=""
          alt="bona"
          src="/images/bona.svg"
          width={74}
          height={74}
          priority
        />
        <div className="ml-[18px] text-neutral-800 text-4xl font-medium">
          Ebona AI
        </div>
        <div className="grow"></div>
        <div className="flex mr-10">
          <div className="mr-5 text-xl">Home</div>
          <div className="mr-5 text-xl">About Us</div>
          <div className="mr-5 text-xl">Services</div>
          <div className="mr-5 text-xl">Our Features</div>
          <div className="text-xl">Contact Us</div>
        </div>

        <button
          type="button"
          className="w-[190px] h-20 rounded-[18px] text-3xl font-medium bg-[#FF8F00] text-white"
        >
          Call Us
        </button>
      </div>

      <div className="mr-[85px] mt-[120px] flex">
        <div className=" font-medium grow justify-center flex">
          <div>
            <div className="text-[95px] leading-[95px]">
              EBONA <br />
              Education
            </div>

            <div className="text-[33px]">Your Ai Powered</div>
            <div className="text-[33px]">Education Mentor</div>
          </div>
        </div>
        <Image
          src="/images/chip.png"
          width={405}
          height={430}
          priority
          alt="chip"
        />
      </div>
    </div>
  );
}
