import Image from "next/image";

const Problem = () => {
  return (
    <div className="p-4 sm:p-20">
      <div>
        <div className="text-teal-500 text-[40px] font-semibold">Problem</div>
        <div className="text-neutral-800 text-[28px]">
          Students Always Faced Challenges <br />
          In Their Education, Including...
        </div>
      </div>
      <div className="sm:flex justify-center">
        <div className="w-[350px] h-[370px] bg-amber-500 rounded-[15px] sm:mr-8  mt-8 sm:mt-24 p-8 sm:p-8">
          <Image
            src="/images/problem-lamp.svg"
            width={111}
            height={105}
            priority={false}
            alt="problem-lamp"
          />
          <div className="text-white text-xl font-normal capitalize leading-[30px] mt-8">
            Students often struggle to find the right learning path, motivation,
            and guidance in their education.
          </div>
        </div>
        <div className="w-[350px] h-[370px] bg-amber-500 rounded-[15px] mr-8 mt-8 sm:mt-10 p-8">
          <Image
            src="/images/problem-idea.svg"
            width={107}
            height={105}
            priority={false}
            alt="problem-idea"
          />
          <div className="text-white text-xl font-normal capitalize leading-[30px] mt-8">
            Current education systems are impersonal and inefficient for diverse
            learners.
          </div>
        </div>
        <div className="w-[350px] h-[370px] bg-amber-500 rounded-[15px] mr-8 mt-8 sm:mt-[-14px] p-8">
          <Image
            src="/images/problem-book.svg"
            width={118}
            height={105}
            priority={false}
            alt="problem-book"
          />
          <div className="text-white text-xl font-normal capitalize leading-[30px] mt-8">
            Existing Edtech platforms have failed to fulfil their mission of
            creating a proper educational pathway.
          </div>
        </div>
        <div className="w-[350px] h-[370px] bg-amber-500 rounded-[15px] mt-8 sm:mt-[-48px] p-8">
          <Image
            src="/images/problem-lamp.svg"
            width={118}
            height={105}
            priority={false}
            alt="problem-book"
          />
          <div className="text-white text-xl font-normal capitalize leading-[30px] mt-8">
            Education system must change to support all students. Current setup
            leads to low performance and disinterest.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Problem;
