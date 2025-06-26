import { useEffect, useState } from "react";
import aunkurGif from "../assets/aunkur.gif";

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
  const counter = "Countdown timer";
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2">
        <img src={aunkurGif} alt="" className="" />
      </div>
      <div className="col-span-4">
        <div>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": timeLeft.days }} aria-label={counter}>
                  {timeLeft.days}
                </span>
              </span>
              days
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span
                  style={{ "--value": timeLeft.hours }}
                  aria-label={counter}
                >
                  {timeLeft.hours}
                </span>
              </span>
              hours
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span
                  style={{ "--value": timeLeft.minutes }}
                  aria-label={counter}
                >
                  {timeLeft.minutes}
                </span>
              </span>
              min
            </div>
            <div className="flex flex-col">
              <span className="countdown font-mono text-5xl">
                <span
                  style={{ "--value": timeLeft.seconds }}
                  aria-label={counter}
                >
                  {timeLeft.seconds}
                </span>
              </span>
              sec
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center">
            অংকুর বৃত্তি পরীক্ষায় অংশ নিয়ে অংকুর স্টুডেন্ট অফ দ্যা ইয়ার 2025
            হওয়ার চ্যালেঞ্জ নিতে চাইলে আজই এনরোল করে ফেলো
          </h2>
          <h5>Enrollment Starts</h5>
          <h3>1st January 2025</h3>
          <button className="btn btn-primary">Enroll Now</button>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTimer;
