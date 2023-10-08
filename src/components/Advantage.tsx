import Image from "next/image";

const Advantage = () => {
  return (
    <div className="bg-amber-500 p-4 sm:pt-16 sm:pb-24">
      <div className="text-neutral-800 text-3xl sm:text-[40px] font-semibold sm:ml-20">
        Competitive Advantage
      </div>
      <div className="sm:flex mt-8 sm:mt-14 justify-center ">
        <div className="bg-white sm:mr-8 rounded-[15px] p-8">
          <div className="w-[70px] h-[70px]">
            <Image
              alt="advantage - person"
              src="/images/advantage-person.svg"
              width={69}
              height={70}
              priority={false}
            />
          </div>
          <div className="mt-8 text-amber-500 text-[22px] font-normal capitalize leading-[30px]">
            Providing a personalised and adaptive
            <br />
            learning experience that caters to each
            <br />
            student&apos;s individual profile and goals
          </div>
        </div>
        <div className="bg-white rounded-[15px] p-8 mt-8 sm:mt-0">
          <div className="w-[70px] h-[70px]">
            <Image
              alt="advantage - ai"
              src="/images/advantage-ai.svg"
              width={69}
              height={32}
              priority={false}
            />
          </div>
          <div className="mt-8 text-amber-500 text-[22px] font-normal capitalize leading-[30px]">
            Leveraging advanced AI technologies
            <br />
            to deliver high-quality and engaging
            <br />
            learning content from various sources
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
