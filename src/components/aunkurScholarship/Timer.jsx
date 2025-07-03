import { useEffect, useState } from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import { GiTrophyCup } from "react-icons/gi";
const Timer = () => {
  const [enrollmentEnd] = useState(new Date("2025-09-30T23:59:00"));
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update current time every second
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
    <div className="p-6">
      <div className="border rounded-lg p-8 shadow-md">
        <h2 className="text-[#0AA76B] bg-[#E5FFF5] rounded-lg p-6 items-center justify-center flex gap-x-1 text-3xl font-bold mb-4 text-center">
          <GiTrophyCup /> Become an Aunkur Scholarship Holder!
        </h2>
        <div className="flex justify-around">
          <div className="text-center">
            <h3 className="font-bold mb-2">Enrollment Starts</h3>
            <p className="text-sm font-semibold text-gray-600 mt-1 mb-3">
              July 10, 2025
            </p>
            {/* <div className="flex justify-center space-x-2 text-[#0CA96D]">
            <div className="border-2 px-3 py-2 rounded-lg">
              {startTimeDiff.days}d
            </div>
            <div className="border-2 px-3 py-2 rounded-lg">
              {startTimeDiff.hours}h
            </div>
            <div className="border-2 px-3 py-2 rounded-lg">
              {startTimeDiff.minutes}m
            </div>
            <div className="border-2 px-3 py-2 rounded-lg">
              {startTimeDiff.seconds}s
            </div>
          </div> */}
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-2">Enrollment Ends</h3>
            <p className="text-sm font-semibold text-gray-600 mt-1 mb-3">
              September 30, 2025
            </p>
            <div className="flex justify-center space-x-2 text-[#0CA96D] ">
              <div className="border-2 px-3 py-2 rounded-lg">
                {endTimeDiff.days}d
              </div>
              <div className="border-2 px-3 py-2 rounded-lg">
                {endTimeDiff.hours}h
              </div>
              <div className="border-2 px-3 py-2 rounded-lg">
                {endTimeDiff.minutes}m
              </div>
              <div className="bg-amber-300 text-blue-900 border-2 px-3 py-2 rounded-lg">
                {endTimeDiff.seconds}s
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-center items-center justify-center flex gap-x-1 p-2">
            <PiWarningCircleBold />
            রেজিস্ট্রেশন শেষের সময় হচ্ছে সেপ্টেম্বর 30, 2025 এর রাত 11:59 ।
            এরপর কোনও রেজিস্ট্রেশন গ্রহণ করা হবে না।
          </p>
        </div>
        <p className="text-center text-green-500 mt-4">
          রেজিস্ট্রেশন ফি 200 টাকা
        </p>
        <div className="text-center mt-4">
          <button className="px-4 py-2 bg-green-500 text-white rounded">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
