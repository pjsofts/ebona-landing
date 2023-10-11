import Image from "next/image";
import TeamBox from "./TeamBox";

Image;
const Team = () => {
  return (
    <div className="p-8 sm:p-20 bg-[#FF8F00]">
      <div className="text-center text-black text-[35px] font-semibold leading-[30px]">
        Founding Team
      </div>
      <div className="flex flex-wrap justify-center sm:mt-14 mt-4">
        <TeamBox
          image="team1.png"
          name="Parham Fakhri"
          title1="Founder"
          title2="& CEO of Ebona Academy"
          title3="Blockchain Solutions Architect"
        />
        <TeamBox
          image="team2.png"
          name="Kimia Nazari"
          title1="Social Media Marketing Expert"
          title2="YouTube SEO Specialist"
          title3="Founder of Dayere Networking Events"
        />
        <TeamBox
          image="team3.png"
          name="Pouria Jahandideh"
          title1="Former Senior Full Stack Developer"
          title2="at Snapp! & MonetizeMore"
          title3="Former Tech Lead at ZarinPal"
        />
      </div>
      <div className="flex flex-wrap justify-center sm:mt-8 mt-0">
        <TeamBox
          image="team1.png"
          name="Maral Moradi Falah"
          title1="title1"
          title2="title2"
          title3="title3"
        />
        <TeamBox
          image="team2.png"
          name="Saghar Alizad"
          title1="title1"
          title2="title2"
          title3="title3"
        />
        <TeamBox
          image="team3.png"
          name="Farzad Jan"
          title1="title1"
          title2="title2"
          title3="title3"
        />
      </div>
    </div>
  );
};

export default Team;
