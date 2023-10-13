import Image from "next/image";

const Advantage = () => {
  return (
    <div className="bg-amber-500 pt-4 px-4 sm:pt-16 ">
      <div className="text-neutral-800 text-3xl sm:text-[40px] font-semibold sm:ml-20">
        Competitive Advantage
      </div>
      <div className="overflow-x-scroll sm:overflow-x-hidden pb-4 sm:pb-24">
        <div className="flex sm:flex-wrap w-[1000px] sm:w-auto mt-8 sm:mt-14 sm:justify-center">
          <div className="bg-white mr-8 rounded-[15px] p-8 w-[300px] sm:w-[400px] flex-shrink-0">
            <div className="w-[70px] h-[70px]">
              <Image
                alt="advantage - person"
                src="/images/advantage-person.svg"
                width={69}
                height={70}
                priority={false}
              />
            </div>
            <div className="mt-4 sm:mt-8 text-amber-500 text-lg font-normal capitalize ">
              Providing a personalised and adaptive learning experience that
              caters to each student&apos;s individual profile and goals
            </div>
          </div>
          <div className="bg-white mr-8 rounded-[15px] p-8 w-[300px] sm:w-[400px] flex-shrink-0">
            <div className="w-[70px] h-[70px]">
              <Image
                alt="advantage - ai"
                src="/images/advantage-ai.svg"
                width={69}
                height={32}
                priority={false}
              />
            </div>
            <div className="mt-4 sm:mt-8 text-amber-500 text-lg font-normal capitalize sm:leading-[30px]">
              Leveraging advanced AI technologies to deliver high-quality and
              engaging learning content from various sources
            </div>
          </div>
          <div className=" bg-white mr-8 rounded-[15px] p-8 w-[300px] sm:w-[400px] flex-shrink-0">
            <div className="w-[70px] h-[70px]">
              <Image
                alt="advantage - ai"
                src="/images/advantage-ai.svg"
                width={69}
                height={32}
                priority={false}
              />
            </div>
            <div className="mt-4 sm:mt-8  text-amber-500 text-lg font-normal capitalize sm:leading-[30px]">
              EBONA&apos;s gamification strategy incorporates a wide range of
              elements and techniques to engage and motivate users
            </div>
          </div>
          <div className="sm:mt-4 bg-white mr-8 rounded-[15px] p-8 w-[300px] sm:w-[400px] flex-shrink-0">
            <div className="w-[70px] h-[70px]">
              <Image
                alt="advantage - ai"
                src="/images/advantage-ai.svg"
                width={69}
                height={32}
                priority={false}
              />
            </div>
            <div className="mt-4 sm:mt-8 text-amber-500 text-lg  font-normal capitalize sm:leading-[30px]">
              Offering a comprehensive and holistic solution that covers all
              aspects of student success, from academic performance to career
              development
            </div>
          </div>
          <div className=" sm:mt-4 bg-white rounded-[15px] p-8 w-[300px] sm:w-[400px] flex-shrink-0">
            <div className="w-[70px] h-[70px]">
              <Image
                alt="advantage - ai"
                src="/images/advantage-ai.svg"
                width={69}
                height={32}
                priority={false}
              />
            </div>
            <div className="mt-4 sm:mt-8 text-amber-500 text-lg font-normal capitalize sm:leading-[30px]">
              Focusing on students over 13, who have more complex and diverse
              learning needs and preferences than younger children.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantage;
