import Image from "next/image";

const Model = () => {
  return (
    <div className="bg-[#FF8A00] p-4 sm:p-20">
      <div className="sm:flex justify-center">
        <div className="text-white mr-20">
          <div className="text-3xl font-medium">Busiess Model</div>
          <div className="sm:text-[25px] font-light capitalize mt-8">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut
            <br />
            labore et dolore magna aliqua. Ut
          </div>
        </div>
        <div className="mt-4 sm:mt-0">
          <Image
            src="/images/model.png"
            width={639}
            height={380}
            priority={false}
            alt="model"
          />
        </div>
      </div>
    </div>
  );
};

export default Model;
