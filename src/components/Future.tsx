import Image from "next/image";

const Future = () => {
  return (
    <div className="p-4 sm:p-20">
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
        <div className="text-xl ml-8">
          <div>Future Foresight</div>
          <div>
            Ebona has a clear roadmap and vision for the future, which includes:
          </div>
          <div>International Expansion</div>
          <div>Catering to more diverse age range</div>
          <div>
            Expanding to other markets in the MENA region, such as Saudi Arabia,
            Egypt, and Morocco
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
