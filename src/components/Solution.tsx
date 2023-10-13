import Image from "next/image";

const Solution = () => {
  return (
    <div className="bg-amber-500 p-8 sm:p-20 sm:flex">
      <div>
        <Image
          src="/images/solution.png"
          width={475}
          height={535}
          alt="solution"
        />
      </div>
      <div className="sm:ml-36">
        <div className="text-[40px] font-semibold">Solution</div>
        <div className="text-yellow-50 text-lg sm:text-[25px] font-medium capitalize mt-4">
          EBONA is an AI-powered Education
          <br />
          Mentor that personalises student <br />
          journeys, leveraging data by using a <br />
          large language model such as Falcon AI.
        </div>
        <div className="flex mt-8 sm:mt-16 items-center">
          <div className="mr-5 shrink-0">
            <Image src="/icons/check.svg" width={30} height={30} alt="check" />
          </div>
          <div>To guide and motivate students through their learning path.</div>
        </div>
        <div className="flex mt-5 items-center">
          <div className="mr-5 shrink-0">
            <Image src="/icons/check.svg" width={30} height={30} alt="check" />
          </div>
          <div>
            Help students discover their strengths, interests and goals.
          </div>
        </div>
        <div className="flex mt-5 items-center">
          <div className="mr-5 shrink-0">
            <Image src="/icons/check.svg" width={30} height={30} alt="check" />
          </div>
          <div>
            Provide them with tailored learning resources considering their
            individual learning behaviour.
          </div>
        </div>
        <div className="mt-8 sm:mt-16">
          <a href="#meetus">
            <button
              className="text-lg sm:text-2xl mr-5 p-2  bg-white  text-[#FF8F00] rounded-[10px] xl:w-[220px] xl:h-[60px]"
              type="button"
            >
              <div className="flex justify-center items-center">
                <div className="mx-4 flex-1 justify-center">Meet Us</div>
                <div className="bg-[#FF8F00] w-10 h-10 flex justify-center items-center rounded-lg">
                  <Image
                    alt="go"
                    src="/icons/right-white.svg"
                    width={7}
                    height={14}
                    priority={false}
                  />
                </div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Solution;
