import { useEffect, useState } from "react";
// import aunkurVideo from "../assets/aunkur.mp4";
import aunkurTimerCardGif from "../assets/aunkur-timer-card-animation.gif";

const EnrollmentTimer = () => {
  const targetDate = new Date("2025-07-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto bg-gradient-to-br from-[#565dec] via-[#191b2f] to-[#565dec] rounded-2xl shadow-2xl p-6 md:p-10 my-10 gap-8 items-center border border-[#23243a]">
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
        <img src={aunkurTimerCardGif} alt="" />
      </div>
      {/* Countdown and Info */}
      <div className="flex flex-col items-center md:items-start gap-6">
        {/* Countdown */}
        <div className="flex gap-4 mb-2">
          <div className="flex flex-col items-center">
            <span className="bg-[#23243a] text-white font-bold text-3xl md:text-4xl px-6 py-2 rounded-lg shadow-inner">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 mt-1">Hours</span>
          </div>
          <span className="text-3xl text-gray-500 font-bold flex items-center">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-[#23243a] text-white font-bold text-3xl md:text-4xl px-6 py-2 rounded-lg shadow-inner">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 mt-1">Minutes</span>
          </div>
          <span className="text-3xl text-gray-500 font-bold flex items-center">
            :
          </span>
          <div className="flex flex-col items-center">
            <span className="bg-[#7c3aed] border border-amber-300 text-white font-bold text-3xl md:text-4xl px-6 py-2 rounded-lg shadow-inner">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="text-xs text-gray-400 mt-1">Seconds</span>
          </div>
        </div>
        {/* Main Heading */}
        <div className="text-right md:text-left">
          <h2 className="text-xl md:text-2xl font-bold text-white leading-snug mb-2">
            অংকুর বৃত্তি পরীক্ষায় অংশ নিয়ে অংকুর স্টুডেন্ট অফ দ্যা ইয়ার{" "}
            <span className="text-[#ff4d4f]">
              ২০২৫ হওয়ার চ্যালেঞ্জ নিতে চাইলে
            </span>{" "}
            আজই এনরোল করে ফেলো
          </h2>
        </div>
        {/* Dates */}
        <div className="text-gray-400 text-sm md:text-base font-medium space-y-1">
          <div>
            এনরোলমেন্ট শুরু: <span className="text-white">১ জুন, ২০২৫</span>
          </div>
          <div>
            এনরোলমেন্ট শেষ: <span className="text-white">২৪ জুন, ২০২৫</span>
          </div>
        </div>
        {/* Button */}
        <button className="mt-2 btn btn-primary btn-lg px-8 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default EnrollmentTimer;
