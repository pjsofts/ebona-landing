import Image from "next/image";
import Button from "./Button";

const Product = () => {
  return (
    <div className="p-4 sm:p-20">
      <div className="flex flex-col sm:flex-row items-center sm:items-start ">
        <div className="sm:mr-4">
          <Image
            src="/images/product-1.png"
            width={314}
            height={566}
            priority={false}
            alt="model"
          />
        </div>
        <div className="sm:mr-9">
          <Image
            src="/images/product-2.png"
            width={314}
            height={566}
            priority={false}
            alt="model"
          />
        </div>
        <div className="mt-8 sm:mt-0">
          <Image
            src="/icons/product.svg"
            width={91}
            height={80}
            priority={false}
            alt="product"
          />
          <div className="text-black text-[35px] font-semibold mt-8">
            Product / Features
          </div>
          <div className="text-amber-500 text-xl font-light capitalize leading-7 mt-5">
            Ebona also provides constant feedback,
            <br />
            encouragement, and advice to the student,
            <br />
            and adapts the study plan according to the <br />
            student&apos;s progress and feedback.
          </div>
          <div className="mt-11 text-amber-500 text-xl font-medium leading-7">
            Gamified Learning
          </div>
          <div className="mt-4 text-amber-500 text-xl font-medium leading-7">
            Motivational Mentorship
          </div>
          <div className="mt-4 text-amber-500 text-xl font-medium leading-7">
            Student-Initiated Learning Path
          </div>
          <div className="mt-4 text-amber-500 text-xl font-medium leading-7">
            Personalised Goal Setting and Planning
          </div>
          <div className="mt-4 text-amber-500 text-xl font-medium leading-7">
            Expert Recommendations and Resources
          </div>

          <div className="mt-8">
            <Button text="Meet Us" to="#meetus" target="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
