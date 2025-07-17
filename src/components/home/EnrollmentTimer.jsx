import { useEffect, useState } from "react";
import aunkurTimerCardGif from "../../assets/aunkur-timer-card-animation.gif";
import { FaRegCalendarAlt } from "react-icons/fa";

const EnrollmentTimer = () => {
  const [enrollmentEnd] = useState(new Date("2025-09-30T23:59:00"));
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = enrollmentEnd - currentTime;
  const timeLeft = {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-6 px-4 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center max-w-6xl mx-auto bg-green-100 bg-opacity-30 backdrop-blur-lg shadow-inner rounded-2xl p-4 sm:p-6 md:p-10 gap-6">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={aunkurTimerCardGif}
            alt="Enrollment Visual"
            className="w-full rounded-xl shadow-inner transition-transform duration-300 object-cover mx-auto"
          />
        </div>

        {/* Countdown Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          {/* Timer */}
          <div className="grid grid-cols-4 gap-3 sm:gap-5 md:gap-6 text-center w-full justify-center">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => {
              const value = [
                timeLeft.days,
                timeLeft.hours,
                timeLeft.minutes,
                timeLeft.seconds,
              ][index];

              return (
                <div key={label} className="flex flex-col items-center">
                  <span className="bg-green-100 bg-opacity-30 backdrop-blur-xl text-black font-bold text-xl sm:text-2xl md:text-4xl px-4 sm:px-5 py-2 rounded-lg shadow-inner">
                    {String(value).padStart(2, "0")}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 mt-1">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Main Heading */}
          <div className="text-center md:text-left px-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-black leading-snug">
              সেরাদের সেরা হয়ে, নিজেকে
              <span className="text-green-700 font-bold">
                {" "}
                প্রমাণ করার চ্যালেঞ্জ
              </span>{" "}
              নিতে চাইলে আজই এনরুল করে ফেলো
            </h2>
          </div>

          {/* Enrollment Dates */}
          <div className="text-gray-600 text-sm sm:text-base space-y-1 px-2">
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-lg text-gray-600" />
              এনরোলমেন্ট শুরু:
              <span className="text-black font-medium"> ১ জুন, ২০২৫</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendarAlt className="text-lg text-gray-600" />
              এনরোলমেন্ট শেষ:
              <span className="text-black font-medium">
                {" "}
                ৩০ সেপ্টেম্বর, ২০২৫
              </span>
            </div>
          </div>

          {/* Button */}
          <a
            href="/registration"
            className="mt-2 sm:mt-4 w-full sm:w-auto text-center"
          >
            <button className="w-full sm:w-auto bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105 transition-all text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
              Enroll Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTimer;
