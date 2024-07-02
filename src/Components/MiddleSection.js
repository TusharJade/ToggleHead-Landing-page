import { FaCircleChevronRight } from "react-icons/fa6";

const MiddleSection = () => {
  return (
    <>
      <section className="ml-20 my-10 flex">
        <div className="w-[220px]">
          <div className="text-[#12406F] text-[1.5rem] font-bold leading-8">
            Upcoming Examinations
          </div>
          <div className="text-[#525252] text-[14px] mt-1">
            Enquire about the examination & register for the exams
          </div>
        </div>

        <div className="border-l border-[#D1D1D1] h-[120px] my-auto mx-[4rem]"></div>

        <div className="flex gap-16">
          {[
            { date: "02th October 2014", text: "Level 1 exam" },
            { date: "Nov-Dec 2016 Level", text: "2 Lorem Ipsum" },
            { date: "Ongoing this year", text: "Level 3 (Grad)" },
          ].map((item) => (
            <div className="font-[15px] flex items-center gap-2">
              <div className="relative">
                <img src="./assets/calendar.svg" alt="error" />
                <img
                  className="absolute bottom-3 left-[35px]"
                  src="./assets/calendar-plus.svg"
                  alt="error"
                />
              </div>
              <div>
                <div className="text-[#12406F] font-bold">{item.date}</div>
                <div className="text-[#525252]">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="scroller mt-4 mb-10 pl-20 flex overflow-x-auto space-x-4">
        {Array(7)
          .fill(0)
          .map((_, i) => (
            <div
              className="bg-[#12406F] text-white w-[325px] rounded-3xl py-8 pl-6 pr-12 flex-shrink-0"
              key={i}
            >
              <div className="font-semibold">Lorem ipsum</div>
              <div className="text-[13px] my-4">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod
              </div>
              <div className="text-[13px] flex items-center justify-normal gap-2 ">
                Know More <FaCircleChevronRight className=" text-[18px]" />
              </div>
            </div>
          ))}
      </section>

      <section className="bg-[#F6F6F6] flex flex-row py-9 gap-24 px-20">
        {[
          {
            one: "Lorem ipsum",
            two: "123+",
            three: "Lorem ipsum",
            four: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam eratz",
          },
          {
            one: "Lorem ipsum",
            two: "12+",
            three: "Lorem ipsum",
            four: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
          },
          {
            one: "Lorem ipsum",
            two: "12+",
            three: "Lorem ipsum",
            four: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et",
          },
          {
            one: "Lorem ipsum",
            two: "123+",
            three: "Lorem ipsum",
            four: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut",
          },
        ].map((item) => (
          <div className="text-[#12406F]">
            <div className="text-[14px] mb-1 font-medium">{item.one}</div>
            <div className="text-[36px] leading-10 font-semibold">
              {item.two}
            </div>
            <div className="font-semibold text-[18px]">{item.three}</div>
            <div className="text-[13px] mt-0.5">{item.four}</div>
          </div>
        ))}
      </section>
    </>
  );
};

export default MiddleSection;
