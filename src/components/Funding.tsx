import Image from "next/image";

const Funding = () => {
  return (
    <div className="bg-[#FF8A00] p-4 sm:p-20">
      <div className="sm: flex">
        <div className="m-4">
          <Image
            src="/icons/funding.svg"
            width={74}
            height={75}
            priority={false}
            alt="model"
          />
        </div>
        <div>
          <div className="text-neutral-800 text-[35px] font-medium">
            Funding
          </div>
          <div className="text-neutral-800 text-xl">
            Ebona is seeking $3.5 M in seed funding to scale up its operations
            and grow its user base.
          </div>
        </div>
      </div>
      <div className="sm:flex">
        <div className="bg-white rounded-[25px] px-12 py-11 sm:mr-10 mt-4 sm:mt-0">
          <div className="text-center text-amber-500 text-opacity-50 text-xl font-medium capitalize leading-7">
            Angel Round:
            <br />
            Prototype & Recruiting
            <br />$ 0.75 M
          </div>
          <div className="text-center mt-11 text-neutral-800 text-opacity-50 text-xl font-normal capitalize leading-7">
            Recruiting talent to expand
            <br />
            the teamand enhance
            <br />
            product development
          </div>
        </div>
        <div className="bg-white rounded-[25px] px-12 py-11 sm:mr-10 mt-4 sm:mt-0">
          <div className="text-center text-amber-500 text-opacity-50 text-xl font-medium capitalize leading-7">
            Seed 1: <br />
            MVP Release <br />$ 1.25 M
          </div>
          <div className="text-center mt-11 text-neutral-800 text-opacity-50 text-xl font-normal capitalize leading-7">
            Recruiting talent to expand
            <br />
            the teamand enhance
            <br />
            product development
          </div>
        </div>
        <div className="bg-white rounded-[25px] px-12 py-11 mt-4 sm:mt-0">
          <div className="text-center text-[#FF8A00] text-opacity-50 text-xl font-medium capitalize leading-7">
            Seed 2: <br />
            Product Launch & Marketing <br />$ 1.5 M
          </div>
          <div className="text-center mt-11 text-neutral-800 text-opacity-50 text-xl font-normal capitalize leading-7">
            Recruiting talent to expand
            <br />
            the teamand enhance
            <br />
            product development
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
