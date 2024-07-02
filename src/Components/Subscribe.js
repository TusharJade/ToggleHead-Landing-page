import { BiSolidRightArrow } from "react-icons/bi";

const Subscribe = () => {
  return (
    <section className="px-4 lg:px-20 pt-10 lg:pt-20 flex flex-col lg:flex-row gap-6 lg:gap-0 justify-center items-center">
      <div className="text-center lg:text-left">
        <div className="text-2xl lg:text-3xl text-[#12406F] font-bold mb-4">
          Subscribe
        </div>
        <p className="text-sm lg:text-base text-[#525252] my-2 lg:mb-4 max-w-[420px] lg:max-w-none font-medium">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </p>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-3">
          <input
            className="placeholder:text-[#949494] px-4 py-3 lg:py-2 w-full lg:w-[300px] border border-[#FFFFFF] drop-shadow-custom rounded-lg"
            placeholder="Enter your Email Address"
          />
          <button className="bg-[#12406F] text-white text-sm lg:text-[13px] rounded-[0.8rem] flex items-center justify-center py-3 lg:py-2 px-6">
            Subscribe Now{" "}
            <BiSolidRightArrow className="text-[12px] lg:text-[14px] ml-1 mt-0.5" />
          </button>
        </div>
      </div>
      <div className="mt-6 lg:mt-0 lg:ml-6">
        <img
          src="./assets/subscribe.svg"
          alt="Subscribe Illustration"
          className="w-full max-w-[300px] lg:max-w-none"
        />
      </div>
    </section>
  );
};

export default Subscribe;
