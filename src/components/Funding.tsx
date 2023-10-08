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
          <div>
            Ebona is seeking $3.5 M in seed funding to scale up its operations
            and grow its user base.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;
