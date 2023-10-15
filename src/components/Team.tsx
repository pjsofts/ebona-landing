import Image from "next/image";
import TeamBox from "./TeamBox";

Image;
const Team = () => {
  return (
    <div id="team" className="p-8 sm:p-20 bg-[#FF8F00]">
      <div className="text-center text-black text-[35px] font-semibold leading-[30px]">
        Founding Team
      </div>
      <div className="flex flex-wrap justify-center sm:mt-14 mt-4">
        <TeamBox
          image="parham.png"
          name="Parham Fakhri"
          title1="Founder"
          title2="& CEO of Ebona Academy"
          title3="Blockchain Solutions Architect"
        />
        <TeamBox
          image="kimia.png"
          name="Kimia Nazari"
          title1="Social Media Marketing Expert"
          title2="YouTube SEO Specialist"
          title3="Founder of Dayere Networking Events"
        />
        <TeamBox
          image="pouria.png"
          name="Pouria Jahandideh"
          title1="Former Senior Full Stack Developer"
          title2="at Snapp! & MonetizeMore"
          title3="Former Tech Lead at ZarinPal"
        />
      </div>
      <div className="flex flex-wrap justify-center sm:mt-8 mt-0">
        <TeamBox
          image="maral.png"
          name="Maral Moradi Falah"
          title1="Business Development Manager"
          title2="Project Control Manager"
          title3="Business Process Expert"
        />
        <TeamBox
          image="saghar.png"
          name="Saghar Alizad Ghadimi"
          title1="Education Coordinator"
          title2="International Academic Olympian"
          title3="Trained Highschool and Pre-University Teacher"
        />
        <TeamBox
          image="farzad.png"
          name="Farzad Mehrdadi"
          title1="Education Production Expert"
          title2="AR/VR Producer"
          title3="Well Known Digital Creator"
        />
      </div>
    </div>
  );
};

export default Team;
