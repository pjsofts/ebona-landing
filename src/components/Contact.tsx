import Image from "next/image";

const Contact = () => {
  return (
    <div id="meetus" className="p-8 sm:p-20">
      <div className="sm:flex  justify-center">
        <div className="sm:mr-20">
          <div className="text-amber-500 text-4xl sm:text-5xl lg:text-[90px] font-semibold">
            Meet Us
          </div>
          <div className="text-teal-500 text-4xl lg:text-[49px] mt-4 sm:mt-8 font-bold">
            We are at GITEX 2023
            <div className="mt-2 sm:mt-4">(Expand NorthStar) </div>
          </div>
          {/* <div className="mt-10 text-amber-500 text-[25px] font-normal font-['Outfit'] capitalize leading-[35px]">
            EBONA is a platform that connects
            <br />
            students with a personal AI mentor.
          </div> */}
          <div className="mt-8 sm:mt-14 ">
            <button
              className="text-lg sm:text-2xl mr-5 p-2  bg-[#FF8F00]  text-white rounded-[10px] xl:h-[60px]"
              type="button"
            >
              <div className="flex items-center">
                <a
                  className="mx-2 flex-1 justify-center"
                  href="https://gitexplus.com/newfront/exhibitor/12808"
                  target="_blank"
                >
                  Set a Meeting
                </a>
                <div className="bg-white w-10 h-10 flex justify-center items-center rounded-lg">
                  <Image
                    alt="go"
                    src="/icons/right.svg"
                    width={7}
                    height={14}
                    priority={false}
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
        <div>
          <Image
            className="rounded-[33px] mt-8 sm:mt-0"
            alt="contact us"
            src="/images/meetus.jpg"
            width={445}
            height={414}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
