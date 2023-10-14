import Image from "next/image";

const DetailsBox = ({
  name,
  subtitle,
  insta,
  linkdin,
  linkedinLink,
  mail,
  icon,
}: {
  name: string;
  subtitle: string;
  insta: string;
  linkdin: string;
  linkedinLink: string;
  mail: string;
  icon: string;
}) => {
  return (
    <div>
      <div className="flex items-center">
        <div className="mr-5 w-[72px] h-[72px] items-center flex">
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
          <div className="text-neutral-800 text-xl sm:text-[25px] font-normal mt-2">
            {subtitle}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-[25px] p-8 sm:px-14 sm:py-14 mt-6">
        <a
          className="flex items-center"
          href={`https://instagram.com/${insta}`}
          target="_blank"
        >
          <Image
            className="mr-4"
            alt="instagram"
            src={`/icons/insta.svg`}
            width={39}
            height={39}
            priority={false}
          />
          <div className="text-amber-500 text-2xl sm:text-3xl font-normal">
            {insta}
          </div>
        </a>

        <a
          className="flex items-center  mt-8"
          href={linkedinLink}
          target="_blank"
        >
          <Image
            className="mr-4"
            alt="linkedin"
            src={`/icons/linkedin.svg`}
            width={39}
            height={39}
            priority={false}
          />
          <div className="text-amber-500 text-2xl sm:text-3xl font-normal">
            {linkdin}
          </div>
        </a>

        <a className="flex items-center  mt-8" href={`mailto:${mail}`}>
          <Image
            className="mr-4"
            alt="mail"
            src={`/icons/mail.svg`}
            width={39}
            height={39}
            priority={false}
          />
          <div className="text-amber-500 text-2xl sm:text-3xl font-normal">
            {mail}
          </div>
        </a>
      </div>
    </div>
  );
};

export default DetailsBox;
