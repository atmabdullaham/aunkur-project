import React from "react";

const HowToApply = () => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 max-w-5xl mx-auto my-8 shadow-md border border-gray-200">
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-6 md:p-10">
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
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
            How to apply for <span className="text-green-500">Aunkur</span>
            <br />
            <span className="text-green-500 border-b-2">Scholarship?</span>
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
            className="btn btn-primary btn-lg px-8 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500"
          >
            Watch Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
