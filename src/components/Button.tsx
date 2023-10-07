import Image from "next/image";

const Button = ({ text }:{text:string}) => {
  return (
    <button
      className="text-lg sm:text-2xl mr-5 p-2  bg-[#FF8F00]  text-white rounded-[10px] xl:w-[220px] xl:h-[60px]"
      type="button"
    >
      <div className="flex">
        <div className="mx-4 flex-1 justify-center">{text}</div>
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
  );
};

export default Button;
