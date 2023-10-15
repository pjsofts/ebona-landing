import Image from "next/image";
import YouTubeEmbed from "./Youtube";

const Model = () => {
  return (
    <div className="bg-[#FF8A00] p-4 sm:p-20">
      <div className="sm:flex justify-center">
        <div className="text-white mr-20">
          <div className="text-3xl font-medium">Busiess Model</div>
          <div className="sm:text-[25px] font-light capitalize mt-8">
            Ebona will use the latest technologies to create educational
            material that can be accessed by different platforms and in
            different forms.
          </div>
        </div>

        <div className="z-10 w-[360px]  sm:w-[580px] mt-4 flex-shrink-0">
          <YouTubeEmbed
            link="https://www.youtube.com/embed/gcmXFQR-fSg"
            width="100%"
            height="325"
          />
        </div>
      </div>
    </div>
  );
};

export default Model;
