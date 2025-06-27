import React, { useEffect, useRef, useState } from "react";

const SuccessStatistics = () => {
  const statisticsData = [
    {
      id: 1,
      targetNumber: 50000,
      suffix: "+",
      label: "Student Applied",
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
        </svg>
      ),
    },
    {
      id: 2,
      targetNumber: 4000,
      suffix: "+",
      label: "Scholarship Holder",
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
        </svg>
      ),
    },
    {
      id: 3,
      targetNumber: 70,
      suffix: "+",
      label: "Associated School",
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
    },
    {
      id: 4,
      targetNumber: 15,
      suffix: "+",
      label: "Years Of Org",
      icon: (
        <svg
          className="w-12 h-12 text-green-500"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      ),
    },
  ];

  // Function to convert English numbers to Bengali
  const convertToBengali = (number) => {
    const bengaliNumbers = {
      0: "০",
      1: "১",
      2: "২",
      3: "৩",
      4: "৪",
      5: "৫",
      6: "৬",
      7: "৭",
      8: "৮",
      9: "৯",
    };

    return number.toString().replace(/\d/g, (digit) => bengaliNumbers[digit]);
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-green-500">Success</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            এই অ্যাপ ব্যবহার করে তুমিও হতে পারো একটি মেরিটরি বিজেতা, তাই এখনই
            রেজিস্ট্রেশন কর ফেনোসায়।
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsData.map((stat) => (
            <StatisticCard
              key={stat.id}
              targetNumber={stat.targetNumber}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              convertToBengali={convertToBengali}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatisticCard = ({
  targetNumber,
  suffix,
  label,
  icon,
  convertToBengali,
}) => {
  const [currentNumber, setCurrentNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer to trigger animation when card comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Animate the number counting
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(targetNumber * easeOutQuart);

        setCurrentNumber(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [isVisible, targetNumber]);

  // Format the number for display
  const formatNumber = (num) => {
    return num; // Return the number as is, no k formatting
  };

  const displayNumber = convertToBengali(formatNumber(currentNumber));
  const displaySuffix = "+";

  return (
    <div
      ref={cardRef}
      className="bg-white border-2 border-green-200 rounded-xl p-8 text-center hover:border-green-400 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex justify-center mb-6">{icon}</div>
      <div className="mb-4">
        <h3 className="text-4xl font-bold text-green-500 mb-2">
          {displayNumber}
          {displaySuffix}
        </h3>
        <p className="text-gray-700 text-lg font-medium">{label}</p>
      </div>
    </div>
  );
};

export default SuccessStatistics;
