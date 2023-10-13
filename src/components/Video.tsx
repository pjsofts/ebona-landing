import Image from "next/image";

const Video = () => {
  return (
    <div className="bg-[#ff8f00] mt-16  sm:mt-32 sm:flex p-4 sm:p-20">
      <div className="text-justify text-lg sm:text-2xl text-white sm:flex-1 justify-center flex items-center p-4">
        Discover EBONA, a cutting-edge AI marvel designed to empower students
        aged 13 and above on their academic journey! With tailored plans, expert
        advice, and AI-driven mentorship, we&apos;re revolutionizing education
        in the UAE. In a thriving AI ecosystem, EBONA is your passport to an
        exhilarating world of personalized learning and triumph!
      </div>
      <div className="m-4 sm:m-20">
        <Image
          alt="bona"
          src="/images/video.png"
          width={657}
          height={270}
          priority={false}
        />
      </div>
    </div>
  );
};

export default Video;
