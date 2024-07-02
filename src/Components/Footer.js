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
      <footer className="relative">
        <div className="absolute left-20 top-10 text-white flex">
          <div>
            <div className="text-[22px] font-semibold">Contact us</div>
            <div className="text-[13px] w-[300px] text-[#d3d3d3] mt-5 flex flex-col gap-3">
              <div> Address: amet, consetetur sadipscing elitr, sed diam </div>
              <div>Email id: eirmod tempor invidunt ut labore et dolore </div>
              <div>Phone no: 123456789</div>
            </div>
          </div>
        </div>

        <div className="absolute top-10 left-0 right-0 bottom-0 text-white flex justify-center">
          <div>
            <div className="text-[22px] font-semibold text-center">
              Follow us
            </div>
            <div className="text-[22px] w-[300px] text-white mt-5 flex justify-center items-center gap-8">
              <FaFacebookF className="cursor-pointer" />
              <FaLinkedin className="cursor-pointer" />
              <FaInstagram className="cursor-pointer" />
              <FaTwitter className="cursor-pointer" />
              <FaYoutube className="cursor-pointer" />
              <FaQuora className="cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="absolute right-20 top-10 text-white flex">
          <div>
            <div className="text-[22px] font-semibold">Head Office</div>
            <div className="text-[13px] w-[350px] text-[#d3d3d3] mt-5 flex flex-col gap-3 justify-start items-start">
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

        <img src="./assets/earth.png" alt="error" />
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
