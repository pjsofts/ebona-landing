import Image from "next/image";
import DetailsBox from "./DetailsBox";

const Details = () => {
  return (
    <div className="p-8 sm:p-20 bg-[#FF8F00]">
      <div className="sm:flex  justify-center">
        <div className="sm:mr-8">
          <DetailsBox
            name="Parham Fakhri"
            subtitle="Founder"
            insta="parham.fakhri"
            linkdin="parham-fakhri"
            mail="parham@ebona.ai"
            icon="detail-1.svg"
          />
        </div>
        <div className="mt-8 sm:mt-0">
          <DetailsBox
            name="Ebona"
            subtitle="Education Technology"
            insta="ebona_ai"
            linkdin="ebona.ai"
            mail="Contact@ebona.ai"
            icon="detail-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
