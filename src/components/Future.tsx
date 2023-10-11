import Image from "next/image";

const Future = () => {
  return (
    <div className="p-8 sm:p-20">
      <div className="sm:flex">
        <div>
          <Image
            src="/images/future.png"
            width={451}
            height={509}
            priority={false}
            alt="model"
          />
        </div>
        <div className="text-xl sm:ml-40 sm:mt-20 mt-8">
          <div className="text-black text-2xl sm:text-[35px] font-semibold">
            Future Foresight
          </div>
          <div className="text-amber-500 text-xl font-light capitalize leading-7 mt-4">
            Ebona has a clear roadmap and vision for the
            <br /> future, which includes:
          </div>
          <div className="flex items-center mt-8 sm:mt-14">
            <div className="mr-5">
              <Image
                src="/icons/future-international.svg"
                width={40}
                height={40}
                priority={false}
                alt="model"
              />
            </div>
            <div className="text-amber-500 sm:text-xl font-medium capitalize sm:leading-7">
              International Expansion
            </div>
          </div>

          <div className="flex items-center mt-8 sm:mt-14">
            <div className="mr-5">
              <Image
                src="/icons/future-cater.svg"
                width={40}
                height={40}
                priority={false}
                alt="model"
              />
            </div>
            <div className="text-amber-500 sm:text-xl font-medium capitalize sm:leading-7">
              Catering to more diverse age range
            </div>
          </div>

          <div className="flex items-center mt-8 sm:mt-14">
            <div className="mr-5">
              <Image
                src="/icons/future-expand.svg"
                width={40}
                height={40}
                priority={false}
                alt="model"
              />
            </div>
            <div className="text-amber-500 sm:text-xl font-medium capitalize sm:leading-7">
              Expanding to other markets in the MENA
              <br /> region, such as Saudi Arabia, Egypt, and
              <br />
              Morocco
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
