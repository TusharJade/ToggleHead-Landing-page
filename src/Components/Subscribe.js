import { BiSolidRightArrow } from "react-icons/bi";

const Subscribe = () => {
  return (
    <section className="ml-20 flex justify-between items-center">
      <div>
        <div className="text-[23px] text-[#12406F] font-bold">Subscribe</div>
        <p className="text-[#525252] text-[14px] my-2 w-[420px] font-medium">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <div className="flex gap-3">
          <input
            className="placeholder:text-[#949494] px-4 py-2 w-[300px] border border-[#FFFFFF] drop-shadow-custom rounded-lg mt-3"
            placeholder="Enter your Email Address"
          />
          <button className="bg-[#12406F] text-white text-[13px] rounded-[0.8rem] flex gap-1.5 justify-center items-center py-2 px-6 mt-3">
            Subscribe Now <BiSolidRightArrow className="text-[12px]" />
          </button>
        </div>
      </div>
      <div>
        <img src="./assets/subscribe.svg" alt="error" />
      </div>
    </section>
  );
};

export default Subscribe;
