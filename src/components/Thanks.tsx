import Button from "./Button";

const Thanks = () => {
  return (
    <div className="p-4 sm:p-20">
      <div className="flex flex-col items-center text-center">
        <div className="text-amber-500 text-4xl sm:text-[75px] font-semibold">
          Thank you
        </div>
        <div className="text-amber-500 text-2xl sm:text-[35px] font-medium mt-8">
          Thank you for your time and attention.
        </div>
        <div className="text-amber-500 text-xl sm:text-[25px] font-normal mt-5">
          We hope you are interested in our pitch and we look <br />
          forward to hearing from you soon.
        </div>
        <div className="flex mt-8 sm:mt-14">
          <Button
            to={"https://www.linkedin.com/company/ebonaai/"}
            target="_blank"
            text="Contact Us"
          />
          <Button to={"#meetus"} target="" text="Meet Us" />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
