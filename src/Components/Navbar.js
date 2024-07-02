import { useState } from "react";
import { FaSearch, FaAngleDown } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [toggle, setToggle] = useState({
    hambergerIcn: false,
  });

  return (
    <nav className="w-full bg-[#12406F] h-[70px] flex justify-between items-center px-6 lg:px-20">
      <div className="text-white text-[20px] font-semibold">LOGO</div>
      <div className="hidden lg:flex items-center justify-center gap-6">
        <div className="flex justify-center items-center gap-7">
          {[
            "Qualifications",
            "Organizations",
            "Research & Analysis",
            "Lorem ipsum",
            "Lorem ipsum",
          ].map((item) => (
            <div
              key={item}
              className="text-white flex items-center justify-center text-[14px] gap-0.5"
            >
              <div>{item}</div>
              <FaAngleDown className="mt-0.5" />
            </div>
          ))}
        </div>
        <FaSearch className="text-white" />
        <button className="text-[#12406F] bg-white rounded-[10px] px-4 py-1.5 text-[14px] font-semibold">
          Enrolment
        </button>
      </div>
      <div className="flex lg:hidden items-center">
        <FaSearch className="text-white mr-4" />
        {toggle.hambergerIcn ? (
          <FaTimes
            className="text-white"
            onClick={() =>
              setToggle((item) => ({ ...item, hambergerIcn: false }))
            }
          />
        ) : (
          <FaBars
            className="text-white"
            onClick={() =>
              setToggle((item) => ({ ...item, hambergerIcn: true }))
            }
          />
        )}
      </div>
      {toggle.hambergerIcn && (
        <div className="absolute top-[70px] left-0 w-full bg-[#12406F] flex flex-col items-center lg:hidden z-10">
          {[
            "Qualifications",
            "Organizations",
            "Research & Analysis",
            "Lorem ipsum",
            "Lorem ipsum",
          ].map((item) => (
            <div
              key={item}
              className="text-white py-4 flex items-center justify-center text-[14px] gap-0.5 w-full border-b border-white"
            >
              <div>{item}</div>
              <FaAngleDown className="mt-0.5" />
            </div>
          ))}
          <button className="text-[#12406F] bg-white rounded-[10px] px-4 py-1.5 text-[14px] font-semibold my-4">
            Enrolment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
