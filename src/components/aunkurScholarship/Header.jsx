import React from "react";
import img from "../../assets/header_icon.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-white">
      <div className="  py-10">
        <div className="flex flex-col md:flex-row items-center gap-0 lg:gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              <span className="text-gray-900 font-bangla">অংকুর</span>{" "}
              <span className="text-emerald-500">বৃত্তি প্রকল্প</span>
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg mb-0 lg:mb-8 max-w-xl mx-auto leading-relaxed">
              ১৯৮৫ সাল থেকে চলমান চট্টগ্রামের সর্ববৃহৎ বৃত্তি প্রকল্প। প্রতিবছর
              ১,০০০+ শিক্ষার্থী এই প্রকল্পের মাধ্যমে বৃত্তি পেয়ে থাকে।
              শিক্ষার্থীদের আত্মবিশ্বাস, মূল্যবোধ ও ভবিষ্যৎ গঠনে সহায়তা করাই এই
              প্রকল্পের মূল লক্ষ্য।
            </p>

            {/* Button - only on md and up */}
            <div className="hidden md:flex">
              <Link to="/registration">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold shadow transition flex items-center gap-2 text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                    />
                  </svg>
                  রেজিস্ট্রেশন করুন
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[4/3] flex items-center justify-center">
              <img
                src={img}
                alt="অঙ্কুর বৃত্তি"
                className="w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>

            {/* Button - only on small devices */}
            <div className="block md:hidden mt-6">
              <Link to="/registration">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-semibold shadow transition flex items-center gap-2 text-sm sm:text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.8}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z"
                    />
                  </svg>
                  রেজিস্ট্রেশন করুন
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
