import Image from "next/image";

const DetailsBox = ({
  name,
  subtitle,
  insta,
  linkdin,
  mail,
  icon,
}: {
  name: string;
  subtitle: string;
  insta: string;
  linkdin: string;
  mail: string;
  icon: string;
}) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="mr-5">
          <Image
            alt="contact details"
            src={`/icons/${icon}`}
            width={72}
            height={72}
            priority={false}
          />
        </div>
        <div>
          <div className="text-neutral-800 text-2xl sm:text-[39px] font-medium">
            {name}
          </div>
          <div className="text-neutral-800 text-xl sm:text-[25px] font-normal">
            {subtitle}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[25px] p-8 sm:px-24 sm:py-14  mt-6">
        <div className="text-amber-500 text-3xl font-normal">{insta}</div>
        <div className="text-amber-500 text-3xl font-normal mt-8">
          {linkdin}
        </div>
        <div className="text-amber-500 text-3xl font-normal mt-8">{mail}</div>
      </div>
    </div>
  );
};

export default DetailsBox;
