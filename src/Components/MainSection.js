import { BiSolidRightArrow } from "react-icons/bi";

const MainSection = () => {
  return (
    <div className="bg-[#EBEBEB] h-[25rem] flex justify-between items-center">
      <div className="ml-20">
        <div className="text-[#12406F] text-[1.5rem] font-bold">
          Lorem ipsum
        </div>
        <p className="text-[#525252] text-[13px] mt-2 w-[360px] font-medium">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd
        </p>
        <button className="bg-[#12406F] text-white text-[13px] rounded-lg flex gap-1.5 justify-center items-center py-2 px-6 mt-3">
          Know More <BiSolidRightArrow className="text-[12px]" />
        </button>
      </div>

      <img className="h-[25rem] " src="./assets/landing-page.svg" alt="error" />
    </div>
  );
};

export default MainSection;
