import Image from "next/image";

const Contact = () => {
  return (
    <div id="meetus" className="p-8 sm:p-20">
      <div className="sm:flex  justify-center">
        <div className="sm:mr-20">
          <div className="text-amber-500 text-4xl sm:text-[90px] font-semibold">
            Meet Us
          </div>
          <div className="text-teal-500 text-3xl sm:text-[49px] font-normal sm:leading-7 mt-4 sm:mt-14">
            We are at GITEX 2023
            <div className="mt-2 sm:mt-8">(Expand NorthStar) </div>
          </div>
          {/* <div className="mt-10 text-amber-500 text-[25px] font-normal font-['Outfit'] capitalize leading-[35px]">
            EBONA is a platform that connects
            <br />
            students with a personal AI mentor.
          </div> */}
          <div className="mt-8 sm:mt-24">
            <button
              className="text-lg sm:text-2xl mr-5 p-2  bg-[#FF8F00]  text-white rounded-[10px] xl:h-[60px]"
              type="button"
            >
              <div className="flex items-center">
                <div className="mx-4 flex-1 justify-center">Set a Meeting</div>
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
            src="/images/contact.png"
            width={545}
            height={414}
            priority={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
