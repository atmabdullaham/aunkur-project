import React from "react";

const HowToApply = () => {
  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-[#098D59] bg-white max-w-5xl mx-auto my-8">
      {/* Blue corners */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#098DDF] rounded-tl-xl z-20"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#098DDF] rounded-tr-xl z-20"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#098DDF] rounded-bl-xl z-20"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#098DDF] rounded-br-xl z-20"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-4 md:p-8">
        {/* Video Section */}
        <div className="w-full md:w-[340px] flex-shrink-0 flex flex-col items-center">
          <div className="rounded-xl border-4 border-[#32DE4D] overflow-hidden shadow-lg relative w-full h-72 aspect-video bg-gray-200">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/nr1W0jh1XWA?si=lr5ttznyylUDJD9q"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            {/* Play button overlay is not needed since iframe shows the YouTube play button */}
          </div>
          <div className="absolute left-8 top-[calc(50%+90px)] md:static md:mt-2 text-white font-medium"></div>
        </div>
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            How to apply for <span className="text-green-500">Aunkur</span>{" "}
            <br />
            <span className="text-green-500 border-b-2"> Scholarship?</span>
          </h2>
          <p className="mb-4 text-gray-700">
            এই ৪টি ধাপ ফলো করে তুমিও হতে পারো পরবর্তী বিজয়ী, তাই এখনই
            রেজিস্ট্রেশন করে ফেলো।
          </p>

          <ul className="list-disc ml-5 mb-6 text-gray-700 space-y-1">
            <li>Click on Enroll Now or the registration button.</li>
            <li>ফর্ম ফিলাপ বাটনে ক্লিক করে আপনার ফরম ফিলাপ করুন।</li>
          </ul>
          <a
            href="https://www.youtube.com/embed/nr1W0jh1XWA?si=lr5ttznyylUDJD9q"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg px-8 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            ▶ Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
