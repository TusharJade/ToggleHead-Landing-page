import { useEffect, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const MainSection = () => {
  const [imageSrc, setImageSrc] = useState(
    window.innerWidth > 1024
      ? "./assets/landing-page.svg"
      : "https://img.freepik.com/premium-vector/businessman-looking-oppotunity_36994-23.jpg?w=900"
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setImageSrc("./assets/landing-page.svg");
      } else {
        setImageSrc(
          "https://img.freepik.com/premium-vector/businessman-looking-oppotunity_36994-23.jpg?w=900"
        );
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="lg:bg-[#EBEBEB] lg:h-[23rem] flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
      <div className="lg:ml-20 mt-6 mb-0 mx-auto text-center lg:text-start lg:mx-0">
        <div className="text-[#12406F] text-[1.5rem] font-bold">
          Lorem ipsum
        </div>
        <p className="text-[#525252] text-[13px] mt-2 sm:w-[360px] font-medium mx-4">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd
        </p>
        <button className="bg-[#12406F] text-white text-[13px] mx-auto lg:mx-0 rounded-lg flex gap-1.5 justify-center items-center py-2 px-6 mt-3">
          Know More <BiSolidRightArrow className="text-[12px]" />
        </button>
      </div>

      <img
        className="w-full h-[30rem] lg:w-auto lg:h-[23rem]"
        src={imageSrc}
        alt="error"
      />
    </section>
  );
};

export default MainSection;
