import Image from "next/image";

const Market = () => {
  return (
    <div className="p-8 sm:pt-32 sm:pb-20 sm:px-20">
      <div className="bg-[#FF9727] rounded-[39px] sm:flex sm:px-20 pb-8">
        <div className="sm:mt-[-93px]">
          <Image
            src="/images/market.png"
            width={470}
            height={470}
            priority={false}
            alt="market"
          />
        </div>
        <div className="sm:ml-20">
          <div className="flex sm:mt-20">
            <div className="m-5">
              <Image
                src="/icons/market.svg"
                width={74}
                height={74}
                priority={false}
                alt="market"
              />
            </div>
            <div>
              <div className="text-neutral-800 text-[35px] font-light">
                Market Size
              </div>
              <div className="text-neutral-800 text-[33px] font-bold">
                500k+
              </div>
              <div className="text-white text-[22px] font-medium capitalize mt-4">
                1318- Year Old UAE Students
              </div>
              <div className="mt-8 sm:mt-16">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/ebonaai/"
                >
                  <button
                    className="text-lg sm:text-2xl mr-5 p-2  bg-white  text-[#FF8F00] rounded-[10px] xl:w-[220px] xl:h-[60px]"
                    type="button"
                  >
                    <div className="flex">
                      <div className="mx-4 flex-1 justify-center">
                        Contact Us
                      </div>
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
        </div>
      </div>
    </div>
  );
};

export default Market;
