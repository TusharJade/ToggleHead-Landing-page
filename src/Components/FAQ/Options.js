import { AiFillMinusCircle } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { useState } from "react";

const Options = ({ item, id }) => {
  const [state, setState] = useState(false);
  return (
    <>
      <div
        className={`text-[15px] text-[#525252] pb-6 ${
          id < 2 ? "border-b" : state ? "border-b" : ""
        } mt-6 ${
          state ? "border-[#12406F]" : "border-[#D1D1D1]"
        } flex justify-between items-center cursor-pointer`}
        onClick={() => setState((prev) => !prev)}
      >
        {item}
        {state ? (
          <AiFillMinusCircle className="text-[26px] text-[#12406F]" />
        ) : (
          <FiPlusCircle className="text-[26px] text-[#525252]" />
        )}
      </div>
      {state && (
        <>
          <p className="text-[14px] text-[#525252] py-6 border-b border-[#D1D1D1]">
            Lorem ipsum dolor sit amet, nsectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor
            sit amet, nsectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.
          </p>
        </>
      )}
    </>
  );
};

export default Options;
