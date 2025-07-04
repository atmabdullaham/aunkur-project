import React from "react";
import img from "../../assets/header_icon.png";

const Header = () => {
  return (
    <div className="relative bg-white overflow-hidden border border-emerald-200 rounded-lg">
      {/* Background wave pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            fill="rgba(16,185,129,0.08)"
            d="M0,64L48,80C96,96,192,128,288,133.3C384,139,480,117,576,128C672,139,768,181,864,181.3C960,181,1056,139,1152,128C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left */}
          <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8">
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
          {/* Right */}
          {/* // ...existing code... */}
          <div className="relative w-full max-w-[400px] aspect-[4/3] flex items-center justify-center">
            <img src={img} alt="Aunkur Scholarship" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
