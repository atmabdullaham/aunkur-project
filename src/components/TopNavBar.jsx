import React from "react";
import { TiSocialFacebook, TiSocialYoutube } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";

const TopNavBar = () => {
  return (
    <div className="bg-[#0AA76B] text-white">
      <div className="w-10/12 mx-auto py-2 flex flex-row items-center justify-between  gap-2 sm:flex-row sm:justify-between sm:items-center">
        {/* Left Section */}
        <div className="flex flex-row sm:flex-row items-center gap-4 sm:gap-6">
          {/* Email (clickable) */}
          <a
            href="mailto:aunkurcitynorth85@gmail.com"
            className="flex items-center gap-2"
          >
            <FiMail />
            <span className="hidden sm:inline">
              aunkurcitynorth85@gmail.com
            </span>
          </a>

          {/* Phone (clickable) */}
          <a href="tel:+8801575232259" className="flex items-center gap-2">
            <FaPhoneAlt />
            <span className="hidden sm:inline">+880 1575 232 259</span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://www.facebook.com/Aunkur85"
            className="hover:text-gray-200"
          >
            <TiSocialFacebook />
          </a>
          <a
            href="https://www.youtube.com/@Aunkur_Ctg_North"
            className="hover:text-gray-200"
          >
            <TiSocialYoutube />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
