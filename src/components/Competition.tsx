import Image from "next/image";

const Competition = () => {
  return (
    <div className="p-8 sm:px-20 sm:py-16 text-center text-neutral-800 text-[40px] font-semibold ">
      Competition
      <div className="sm:flex justify-between mt-4 sm:mt-6">
        <div className="flex flex-col items-center mt-4 sm:mt-0">
          <div className="sm:h-[262px] sm:w-[262px] sm:flex items-center">
            <Image
              alt="go"
              src="/images/alef.png"
              width={270}
              height={135}
              priority={false}
            />
          </div>
          <div className="sm:flex justify-center text-amber-500 text-3xl font-semibold">
            Alef
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 sm:mt-0">
          <div className="sm:h-[262px] sm:w-[262px] sm:flex items-center">
            <Image
              alt="go"
              src="/images/edraak.png"
              width={246}
              height={100}
              priority={false}
            />
          </div>
          <div className="flex justify-center  text-amber-500 text-3xl font-semibold">
            Edraak
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 sm:mt-0">
          <div className="sm:h-[262px] sm:w-[262px] sm:flex  items-center justify-center">
            <Image
              alt="go"
              src="/images/khan.png"
              width={150}
              height={150}
              priority={false}
            />
          </div>
          <div className="flex justify-center  text-amber-500 text-3xl font-semibold">
            Khan Academy
          </div>
        </div>
        <div className="flex flex-col items-center mt-8 sm:mt-0">
          <div className="sm:h-[262px] sm:w-[262px] sm:flex items-center">
            <Image
              alt="go"
              src="/images/duo.png"
              width={236}
              height={236}
              priority={false}
            />
          </div>
          <div className="flex justify-center  text-amber-500 text-3xl font-semibold">
            Duolingo Max
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competition;
