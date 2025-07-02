import React from "react";

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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="text-gray-900">অঙ্কুর</span>{" "}
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
            {/* Headphones */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-lg p-2">
              <svg
                className="w-10 h-10 text-emerald-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 17v-3a8 8 0 0116 0v3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="2"
                  y="17"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                  className="text-emerald-200"
                />
                <rect
                  x="18"
                  y="17"
                  width="4"
                  height="4"
                  rx="2"
                  fill="currentColor"
                  className="text-emerald-200"
                />
              </svg>
            </div>
            {/* Gear */}
            <div className="absolute top-8 right-2 bg-white rounded-full shadow-lg p-2">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h.09a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51h.09a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v.09a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
              </svg>
            </div>
            {/* Bulb */}
            <div className="absolute top-2 left-8 bg-white rounded-full shadow p-2">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M12 2a7 7 0 00-4 12.9V18a2 2 0 002 2h4a2 2 0 002-2v-3.1A7 7 0 0012 2z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M9 22h6" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            {/* Document */}
            <div className="absolute top-24 right-12 bg-white rounded-full shadow p-2">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="6"
                  y="4"
                  width="12"
                  height="16"
                  rx="2"
                  strokeWidth="1.5"
                />
                <path
                  d="M9 8h6M9 12h6M9 16h2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* Candle */}
            <div className="absolute top-20 left-2 bg-white rounded-full shadow p-2">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="10"
                  y="10"
                  width="4"
                  height="8"
                  rx="2"
                  fill="currentColor"
                  className="text-emerald-200"
                />
                <path
                  d="M12 6v2m0 0a2 2 0 110-4 2 2 0 010 4z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Pen */}
            <div className="absolute bottom-8 right-0 bg-white rounded-full shadow p-2">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M16.862 3.487a2.5 2.5 0 113.535 3.535L7.5 19.92l-4 1 1-4 12.362-13.433z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Books */}
            <div className="absolute bottom-0 left-6 bg-white rounded-full shadow p-2">
              <svg
                className="w-8 h-8 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="3"
                  y="6"
                  width="18"
                  height="4"
                  rx="2"
                  fill="currentColor"
                  className="text-emerald-200"
                />
                <rect
                  x="3"
                  y="14"
                  width="18"
                  height="4"
                  rx="2"
                  fill="currentColor"
                  className="text-emerald-300"
                />
              </svg>
            </div>
            {/* Cup */}
            <div className="absolute bottom-0 right-16 bg-white rounded-full shadow p-2">
              <svg
                className="w-7 h-7 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <rect
                  x="6"
                  y="8"
                  width="8"
                  height="8"
                  rx="4"
                  fill="currentColor"
                  className="text-emerald-200"
                />
                <path
                  d="M14 12h2a2 2 0 110 4h-2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Checkmark */}
            <div className="absolute bottom-16 left-2 bg-white rounded-full shadow p-2">
              <svg
                className="w-6 h-6 text-emerald-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M5 13l4 4L19 7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            {/* Play button on illustration */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow p-3">
              <svg
                className="w-8 h-8 text-emerald-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="12" fill="#10B981" opacity="0.15" />
                <polygon points="10,8 16,12 10,16" fill="#10B981" />
              </svg>
            </div>
            {/* Main illustration: Laptop with graduation cap and certificate */}
            <svg className="w-full h-auto" viewBox="0 0 400 300" fill="none">
              {/* ...existing SVG illustration... */}
              <rect
                x="60"
                y="120"
                width="280"
                height="100"
                rx="16"
                fill="#fff"
                stroke="#10B981"
                strokeWidth="2"
              />
              <rect
                x="80"
                y="140"
                width="240"
                height="60"
                rx="8"
                fill="#ECFDF5"
              />
              <polygon
                points="200,150 260,170 200,190 140,170"
                fill="#059669"
              />
              <rect
                x="195"
                y="170"
                width="10"
                height="20"
                rx="3"
                fill="#FBBF24"
              />
              <rect
                x="110"
                y="180"
                width="60"
                height="18"
                rx="6"
                fill="#fff"
                stroke="#FBBF24"
                strokeWidth="2"
              />
              <circle cx="170" cy="189" r="5" fill="#FBBF24" />
              <rect
                x="270"
                y="200"
                width="60"
                height="12"
                rx="3"
                fill="#FBBF24"
              />
              <rect
                x="270"
                y="214"
                width="60"
                height="12"
                rx="3"
                fill="#10B981"
                opacity="0.2"
              />
              <rect
                x="320"
                y="160"
                width="40"
                height="6"
                rx="2"
                fill="#10B981"
              />
              <ellipse
                cx="90"
                cy="220"
                rx="14"
                ry="8"
                fill="#10B981"
                opacity="0.2"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
