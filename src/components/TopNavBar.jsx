import React from "react";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
const TopNavBar = () => {
  return (
    <div className="flex justify-between bg-[#0AA76B] p-2">
      <div className="flex">
        <p className="flex items-center justify-center gap-x-2 text-white">
          <FiMail />
          aunkurctgsouth85@gmail.com
        </p>
        <div className="w-px m-2 h-5 bg-white"></div>
        <p className="flex items-center justify-center gap-x-2 text-white">
          <FaPhoneAlt />
          +880 1575 232 259
        </p>
      </div>
      <div className="flex text-white items-center justify-center gap-x-3 text-xl">
        <TiSocialFacebook />
        <TiSocialTwitter />
        <TiSocialInstagram />
        <TiSocialLinkedin />
      </div>
    </div>
  );
};

export default TopNavBar;
