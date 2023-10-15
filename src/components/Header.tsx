import Image from "next/image";
import { useEffect, useRef } from "react";

const Header = () => {
  const menu = useRef<HTMLDivElement>(null);
  const header = useRef<HTMLDivElement>(null);
  const visible = useRef(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        if (!visible.current) {
          visible.current = true;
          if (header.current) {
            header.current.classList.add("shadow-md");
          }
        }
      } else {
        visible.current = false;
        if (header.current) {
          header.current.classList.remove("shadow-md");
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-[#262626] h-[55px]">
        <div ref={menu} className="hidden">
          <div className="flex text-white justify-around items-center h-[55px]">
            <a href="#home">Home</a>
            <a href="#aboutus">About</a>
            <a href="#team">Team</a>
            <a target="_blank" href="https://www.linkedin.com/company/ebonaai/">
              Contact
            </a>
          </div>
        </div>
      </div>
      <div
        ref={header}
        className="flex items-center sticky top-0 bg-white z-50 p-1"
      >
        <div className="flex">
          <Image
            className="m-4 sm:my-0 sm:mx-4 sm:ml-10 lg:ml-16 xl:ml-20"
            alt="bona"
            src="/images/bona.svg"
            width={44}
            height={44}
          />
          <div className="text-neutral-800 text-xl sm:text-2xl font-medium flex items-center">
            Ebona AI
          </div>
        </div>
        <div className="hidden sm:block sm:flex-1"></div>
        <div className="hidden sm:flex sm:space-x-5 sm:items-center sm:mr-10">
          <a href="#home" className="sm:text-lg lg:text-xl">
            Home
          </a>
          <a href="#aboutus" className="sm:text-lg lg:text-xl">
            About
          </a>
          <a href="#team" className="sm:text-lg lg:text-xl">
            Team
          </a>
          <a className="sm:text-lg lg:text-xl" href="#meetus">
            Meet Us
          </a>
        </div>

        <div className="sm:hidden flex-1 justify-center flex items-center">
          <button
            id="mobile-menu-toggle"
            onClick={() => {
              if (menu.current) {
                menu.current.classList.toggle("hidden");
                if (window.scrollY !== 0) {
                  window.location.href = "#home";
                  menu.current.classList.remove("hidden");
                }
              }
            }}
          >
            <Image src="/icons/menu.svg" width={30} height={30} alt="menu" />
          </button>
        </div>

        <div className="flex items-center justify-center mr-6 sm:mr-10 lg:mr-16 xl:mr-20">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/ebonaai/"
            className="w-20 h-10 justify-center items-center flex rounded-lg sm:w-32 sm:h-10 sm:rounded-[10px] sm:text-xl  font-medium"
          >
            <Image
              src="/icons/linkedin.svg"
              width={30}
              height={30}
              alt="linkedin"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
