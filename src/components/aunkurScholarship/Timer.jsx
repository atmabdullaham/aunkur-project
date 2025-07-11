import { useEffect, useState } from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";

const Timer = () => {
  const [enrollmentEnd] = useState(new Date("2025-09-30T23:59:00"));
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeDiff = (date) => {
    const diff = date - currentTime;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const endTimeDiff = timeDiff(enrollmentEnd);

  return (
    <div className="bg-green-100 px-4 py-6 sm:px-6 md:px-8 lg:px-10">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 max-w-5xl mx-auto">
        <h2 className="text-[#0AA76B] bg-[#E5FFF5] rounded-lg p-4 sm:p-6 flex items-center justify-center gap-x-2 text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          <GiTrophyCup className="text-xl sm:text-2xl md:text-3xl" />
          Become an Aunkur Scholarship Holder!
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center flex-1">
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">
              Enrollment Starts
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold">
              July 10, 2025
            </p>
          </div>

          <div className="text-center flex-1">
            <h3 className="font-bold text-sm sm:text-base md:text-lg mb-2">
              Enrollment Ends
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-semibold mb-3">
              September 30, 2025
            </p>
            <div className="flex justify-center flex-wrap gap-2 text-[#0CA96D]">
              <span className="border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base">
                {endTimeDiff.days}d
              </span>
              <span className="border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base">
                {endTimeDiff.hours}h
              </span>
              <span className="border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base">
                {endTimeDiff.minutes}m
              </span>
              <span className="bg-amber-300 text-blue-900 border-2 px-2 py-1 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm md:text-base">
                {endTimeDiff.seconds}s
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-center flex items-center justify-center gap-x-2 px-2 text-xs sm:text-sm md:text-base text-gray-800">
            <PiWarningCircleBold className="text-base sm:text-lg md:text-xl" />
            রেজিস্ট্রেশন শেষের সময় হচ্ছে সেপ্টেম্বর 30, 2025 এর রাত 11:59 ।
            এরপর কোনও রেজিস্ট্রেশন গ্রহণ করা হবে না।
          </p>
        </div>

        <p className="text-center text-green-500 mt-4 text-sm sm:text-base md:text-lg font-medium">
          রেজিস্ট্রেশন ফি ২০০ টাকা
        </p>

        <div className="text-center mt-6">
          <button className="px-5 py-2 bg-green-500 hover:bg-green-600 transition-all text-white rounded text-sm sm:text-base md:text-lg w-full sm:w-auto">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
