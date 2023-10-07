import Image from "next/image";

const Video = () => {
  return (
    <div className="bg-[#ff8f00] mt-16  sm:mt-32 sm:flex p-4 sm:p-0">
      <div className="text-5xl text-white sm:flex-1 justify-center flex items-center">
        LOREM IPSUM <br />
        DOLOR SIT <br /> AMET
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
