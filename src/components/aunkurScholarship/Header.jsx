import React from "react";
import img from "../../assets/header_icon.png";

const Header = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
              <span className="text-gray-900 font-bangla">অঙ্কুর</span>{" "}
              <span className="text-emerald-500">বৃত্তি প্রকল্প - ২০২৪</span>
            </h1>
            <p className="text-gray-700 text-base sm:text-lg mb-8 max-w-xl">
              ১৯৮৫ সাল থেকে চলমান চট্টগ্রামের সর্ববৃহৎ ৯ মাসব্যাপী জাতীয়তা
              বৃত্তি প্রকল্প, ১৯৮৫ সাল থেকে চলমান চট্টগ্রামের সর্ববৃহৎ ৯
              মাসব্যাপী জাতীয়তা বৃত্তি প্রকল্প
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-2 rounded-md font-semibold shadow transition">
                Enroll Now
              </button>
              <button className="flex items-center px-4 py-2 rounded-md border border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-600 font-semibold transition">
                <span className="bg-emerald-100 p-2 rounded-full mr-2 flex items-center justify-center shadow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="white"
                    />
                    <polygon points="10,8 16,12 10,16" fill="currentColor" />
                  </svg>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="max-w-[400px] w-full aspect-[4/3] flex items-center justify-center">
              <img
                src={img}
                alt="Aunkur Scholarship"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
