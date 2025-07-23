import React from "react";

const HowToApply = () => {
  return (
    <div className=" flex flex-col md:flex-row items-center gap-10  py-10 md:py-14 w-10/12 mx-auto ">
      {/* Video Section */}
      <div className="w-full md:w-1/2  flex flex-col items-center">
        <div className="rounded-xl border-4 border-[#32DE4D] overflow-hidden shadow-lg  w-full h-52 md:h-80   bg-gray-200">
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
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
          How to apply for <span className="text-green-500">Aunkur</span>{" "}
          <span className="text-green-500 border-b-2">Scholarship?</span>
        </h2>
        <p className="mb-4 text-gray-700">
          Follow these 5 simple steps to complete your registration:
        </p>

        <ul className="list-disc ml-5 mb-6 text-gray-700 space-y-1">
          <li>Log in with your Google account.</li>
          <li>Fill out the registration form</li>
          <li>Click the Submit button</li>
          <li>Accept the terms and conditions</li>
          <li>Complete your payment</li>
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
  );
};

export default HowToApply;
