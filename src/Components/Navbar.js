import { FaSearch } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#12406F] h-[70px] flex justify-between items-center">
      <div className="text-white text-[20px] font-semibold ml-20">LOGO</div>
      <div className="flex items-center justify-center gap-6">
        <div className="flex justify-center items-center gap-7">
          {[
            "Qualifications",
            "Organizations",
            "Research & Analysis",
            "Lorem ipsum",
            "Lorem ipsum",
          ].map((item) => (
            <div className="text-white flex items-center justify-center text-[14px] gap-0.5">
              <div>{item}</div>
              <FaAngleDown className="mt-0.5" />
            </div>
          ))}
        </div>
        <FaSearch className="text-white" />
        <button className="text-[#12406F] bg-white rounded-[10px] px-4 py-1.5 text-[14px] font-semibold mr-10">
          Enrolment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
