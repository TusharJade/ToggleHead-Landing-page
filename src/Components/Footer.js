import { IoLocationSharp } from "react-icons/io5";
import { IoMdStopwatch } from "react-icons/io";
import { BiSolidTrain } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaQuora } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="lg:relative bg-[#002F5F] lg:bg-transparent flex flex-col lg:block gap-7 px-4 pb-6 lg:p-0">
        <div className="lg:absolute lg:left-14 xl:left-20 lg:top-6 xl:top-10 text-white flex order-2">
          <div>
            <div className="text-[22px] font-semibold">Contact us</div>
            <div className="text-[14.5px] md:text-[13px] max-w-[300px] text-[#d3d3d3] mt-5 flex flex-col gap-3">
              <div> Address: amet, consetetur sadipscing elitr, sed diam </div>
              <div>Email id: eirmod tempor invidunt ut labore et dolore </div>
              <div>Phone no: 123456789</div>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:top-6 xl:top-10 lg:left-0 lg:right-0 lg:bottom-0 text-white lg:flex justify-center order-1">
          <div>
            <div className="text-[22px] font-semibold text-center lg:block hidden">
              Follow us
            </div>
            <div className="text-[22px] max-w-[300px] text-white mt-5 flex justify-center items-center gap-8">
              <FaFacebookF className="cursor-pointer " />
              <FaLinkedin className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
              <FaQuora className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:right-14 xl:right-20 lg:top-6 xl:top-10 text-white flex order-3">
          <div>
            <div className="text-[22px] font-semibold">Head Office</div>
            <div className="text-[14.5px] md:text-[13px] max-w-[350px] text-[#d3d3d3] mt-5 flex flex-col gap-3 justify-start items-start">
              <div className="flex items-center justify-center gap-2">
                <IoLocationSharp className="text-[30px]" /> Lorem ipsum dolor
                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut
              </div>
              <div className="flex items-center justify-center gap-2">
                <IoMdStopwatch className="text-[16px]" />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </div>
              <div className="flex items-center justify-center gap-2">
                <IoMdStopwatch className="text-[16px]" />
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </div>
              <div className="flex items-center justify-center gap-2">
                <BiSolidTrain className="text-[16px]" />
                Lorem ipsum asd asdsaweeq Lorem Ipsum
              </div>
            </div>
          </div>
        </div>
        <img className="lg:block hidden" src="./assets/earth.png" alt="error" />
      </footer>

      <div className="h-9 bg-[#002F5F] flex items-center justify-center">
        <div className="text-[13px] text-white">
          © 2021 All Rights Reserved. Privacy Policy
        </div>
      </div>
    </>
  );
};

export default Footer;
