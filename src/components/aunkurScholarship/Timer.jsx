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
    <section className="bg-green-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Heading */}
        <h2 className="flex items-center justify-center gap-3 text-xl sm:text-2xl md:text-3xl font-bold text-[#0AA76B] bg-white bg-opacity-50 backdrop-blur-xl rounded-xl shadow-inner p-4 mb-8 text-center">
          <GiTrophyCup className="text-2xl sm:text-3xl" />
          Become an Aunkur Scholarship Holder!
        </h2>

        {/* Countdown */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Start Info */}
          <div className="text-center md:flex-1">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1">
              Enrollment Starts
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
              July 10, 2025
            </p>
          </div>

          {/* Countdown Box */}
          <div className="text-center md:flex-1">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-800 mb-1">
              Enrollment Ends
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mb-4">
              September 30, 2025
            </p>
            <div className="flex justify-center flex-wrap gap-3">
              {[
                { label: "d", value: endTimeDiff.days },
                { label: "h", value: endTimeDiff.hours },
                { label: "m", value: endTimeDiff.minutes },
                { label: "s", value: endTimeDiff.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="px-4 py-2 sm:px-5 sm:py-3 bg-white bg-opacity-50 backdrop-blur-xl rounded-xl shadow-inner text-2xl sm:text-3xl font-bold text-green-800"
                >
                  {item.value}
                  <span className="ml-1 text-sm text-gray-600 font-medium">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8">
          <p className="text-center flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base text-gray-700">
            <PiWarningCircleBold className="text-base sm:text-lg md:text-xl text-red-500" />
            রেজিস্ট্রেশন শেষের সময়: সেপ্টেম্বর ৩০, ২০২৫ রাত ১১:৫৯। এরপর কোনও
            রেজিস্ট্রেশন গ্রহণ করা হবে না।
          </p>
        </div>

        {/* Fee Info */}
        <p className="text-center text-green-600 mt-4 text-sm sm:text-base md:text-lg font-semibold">
          রেজিস্ট্রেশন ফি: ২০০ টাকা
        </p>

        {/* Button */}
        <div className="text-center mt-6">
          <button className="bg-gradient-to-r from-green-400 to-green-600 hover:scale-105 transition-transform duration-300 text-white px-6 py-3 rounded-xl text-sm sm:text-base md:text-lg font-semibold shadow-md">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timer;
