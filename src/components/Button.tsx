import Image from "next/image";

const Button = ({
  text,
  to,
  target,
}: {
  text: string;
  to: string;
  target: string;
}) => {
  return (
    <a
      href={to}
      target={target}
      className="text-xl sm:text-2xl mr-5 p-2  bg-[#FF8F00]  text-white rounded-[10px] xl:w-[220px] xl:h-[60px]"
      type="button"
    >
      <div className="flex items-center">
        <div className="mx-1 sm:mx-4 flex-1 justify-center">{text}</div>
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
    </a>
  );
};

export default Button;
