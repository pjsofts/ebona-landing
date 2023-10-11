import Image from "next/image";

const TeamBox = ({
  image,
  name,
  title1,
  title2,
  title3,
}: {
  image: string;
  name: string;
  title1: string;
  title2: string;
  title3: string;
}) => {
  return (
    <div className="flex flex-col items-center mr-5 mt-4 sm:mt-0">
      <div className="">
        <Image
          className="rounded-[25px]"
          src={`/images/${image}`}
          width={357}
          height={362}
          priority={false}
          alt="team member"
        />
      </div>
      <div className="text-center bg-white rounded-2xl p-4 mt-[-32px] relative w-[304px]">
        <div>{name}</div>
        <div className="text-amber-500 text-[15px] font-normal capitalize leading-tight">
          {title1} <br />
          {title2} <br />
          {title3}
        </div>
      </div>
    </div>
  );
};

export default TeamBox;
