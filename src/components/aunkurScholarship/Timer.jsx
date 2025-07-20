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
    <section className="bg-green-100 px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        {/* Heading */}
        <h2 className="flex justify-center items-center gap-2 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-green-700 bg-green-200 bg-opacity-60 backdrop-blur-md p-4 rounded-xl shadow-inner">
          <GiTrophyCup className="text-xl hidden lg:block sm:text-2xl" />
          এখনই অংকুর স্কলারশিপ অংশগ্রহণ করুন!
        </h2>

        {/* Countdown */}
        <div className="flex flex-col items-center gap-5 md:gap-10 md:flex-row md:justify-center">
          {/* Countdown Box */}
          <div className="text-center">
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-1">
              রেজিস্ট্রেশন শেষ হচ্ছে
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium mb-3">
              ৩০ সেপ্টেম্বর ২০২৫
            </p>
            <div className="flex justify-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap">
              {[
                { label: "দিন", value: endTimeDiff.days },
                { label: "ঘণ্টা", value: endTimeDiff.hours },
                { label: "মিনিট", value: endTimeDiff.minutes },
                { label: "সেকেন্ড", value: endTimeDiff.seconds },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col items-center">
                  <span className="bg-green-200 bg-opacity-30 backdrop-blur-xl text-black font-bold text-xl sm:text-2xl md:text-4xl px-4 sm:px-5 py-2 rounded-lg shadow-inner">
                    {String(value)
                      .padStart(2, "0")
                      .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d])}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-6 text-gray-700 text-sm sm:text-base flex items-center justify-center gap-2">
          <PiWarningCircleBold className="text-red-500 text-lg hidden lg:block sm:text-xl" />
          রেজিস্ট্রেশন শেষ সময়: ৩০ সেপ্টেম্বর ২০২৫, রাত ১১:৫৯। এর পরে কোনো আবেদন
          গ্রহণ করা হবে না।
        </div>

        {/* Fee Info */}
        <p className="text-green-700 font-semibold text-sm sm:text-base md:text-lg">
          রেজিস্ট্রেশন ফি: ২০০ টাকা
        </p>

        {/* Button */}
        <div className="mt-4">
          <button className="bg-gradient-to-r from-green-500 to-green-700 hover:scale-105 transition-transform duration-300 text-white px-6 py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold shadow-lg">
            এখনই রেজিস্ট্রেশন করুন
          </button>
        </div>
      </div>
    </section>
  );
};

export default Timer;
