import { useEffect, useState } from "react";
// import aunkurVideo from "../assets/aunkur.mp4";
import aunkurTimerCardGif from "../assets/aunkur-timer-card-animation.gif";
import { FaRegCalendarAlt } from "react-icons/fa";

const EnrollmentTimer = () => {
  const [enrollmentEnd] = useState(new Date("2025-09-30T23:59:00"));
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate time left until enrollment ends
  const diff = enrollmentEnd - currentTime;
  const timeLeft = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 my-10 gap-8 items-center border border-[#23243a]">
      {/* Video (unchanged) */}
      <div>
        {/* <video
          src={aunkurVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-xl"
        /> */}
        <img src={aunkurTimerCardGif} alt="" className="w-full rounded-xl" />
      </div>
      {/* Countdown and Info */}
      <div className="flex flex-col items-center md:items-start gap-6">
        {/* Countdown */}
        <div className="flex gap-4 mb-2">
          <div className="flex flex-col items-center">
            <span className="bg-green-100 bg-opacity-30 backdrop-blur-xl text-black font-bold text-3xl md:text-4xl px-6 py-2 rounded-lg shadow-inner">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 mt-1">Days</span>
          </div>
          <span className="text-3xl text-gray-500 font-bold flex items-center">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-green-100 bg-opacity-30 backdrop-blur-md text-black font-bold text-3xl md:text-4xl px-6 py-2 rounded-lg shadow-inner">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 mt-1">Hours</span>
          </div>
          <span className="text-3xl text-gray-500 font-bold flex items-center">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-green-100 bg-opacity-30 backdrop-blur-md text-black  font-bold text-3xl md:text-4xl px-6 py-2 rounded-lg shadow-inner">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 mt-1">Minutes</span>
          </div>
          <span className="text-3xl text-gray-500 font-bold flex items-center">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-green-100 bg-opacity-30 backdrop-blur-md text-blue-500 border border-amber-300 font-bold text-3xl md:text-4xl px-6 py-2 rounded-lg shadow-inner">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 mt-1">Seconds</span>
          </div>
        </div>
        {/* Main Heading */}
        <div className="text-right md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-black leading-snug mb-2">
            অঙ্কুর স্টুডেন্ট অফ দ্য{" "}
            <span className="text-blue-500">ইয়ার ২০২৫ হতে চাও?</span> বৃত্তি
            পরীক্ষায় অংশ নিতে এখনই এনরোল করো!{" "}
          </h2>
        </div>
        {/* Dates */}
        <div className="text-gray-400 text-sm md:text-base font-medium space-y-1">
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-xl text-gray-600 mr-2" />
            এনরোলমেন্ট শুরু: <span className="text-black">১ জুন, ২০২৫</span>
          </div>
          <div className="flex items-center">
            <FaRegCalendarAlt className="text-xl text-gray-600 mr-2" />
            এনরোলমেন্ট শেষ: <span className="text-black">২৪ জুন, ২০২৫</span>
          </div>
        </div>
        {/* Button */}
        <a href="/registration" className="block">
          <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
            Enroll Now
          </button>
        </a>
      </div>
    </div>
  );
};

export default EnrollmentTimer;
