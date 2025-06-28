import React, { useState, useEffect, useRef } from "react";

const OurActivities = () => {
  const activitiesData = [
    {
      id: 1,
      title: "তাহফুজ বৃত্তি প্রকল্প",
      description:
        "৯৯৭৫ সাল থেকে চট্টগ্রামের সাত্তা জামাতারা বৃত্তি প্রকল্প, ৯৯৭৫ সাল থেকে চট্টগ্রামের সাত্তা জামাতারা বৃত্তি প্রকল্প",
      bgColor: "bg-cyan-200",
      titleColor: "text-cyan-600",
      icon: (
        <svg
          className="w-16 h-16 text-blue-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "বৃক্ষরোপণ অভিযান",
      description:
        "স্কুল ক্যাম্পাসে বৃক্ষরোপণ অভিযান ও স্কুল ছাত্রদের নারায় পরিষেব সরা বিতরণ,",
      bgColor: "bg-purple-200",
      titleColor: "text-purple-600",
      icon: (
        <svg
          className="w-16 h-16 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "উন্নত মুলনায়াস ও চারিত্রিক নির্দেশনা সূচি",
      description:
        "স্কুল ছাত্রদের নারায় উন্নত মুলনায়াস ও চারিত্রিক নির্দেশনা সূচির প্রশ্রয়",
      bgColor: "bg-green-200",
      titleColor: "text-green-600",
      icon: (
        <svg
          className="w-16 h-16 text-purple-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "কার্টুনালি ব্যবস্থা",
      description:
        "যেথা ও মনবসর ১৫ দিনাসে কার্টুনালি ও বার্তিক আলোচনার ব্যবস্থা",
      bgColor: "bg-pink-200",
      titleColor: "text-pink-600",
      icon: (
        <svg
          className="w-16 h-16 text-orange-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21,16V4H3V16H12L17,21V16H21M13,14H11V12H13V14M13,10H11V6H13V10Z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            আমাদের <span className="text-green-500">কার্যক্রম</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            ইসলামী শিশু নেতৃত্ব এবং নৈতিকতার ভিত্তি সমুন্নত রাখার উদ্দেশ্যে...
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Activities List */}
        <div className="space-y-8">
          {activitiesData.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              index={index}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ActivityCard = ({ activity, index, isReversed = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  // Intersection Observer for scroll animations
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

  return (
    <div
      ref={cardRef}
      className={`
        flex flex-col md:flex-row items-center gap-8 p-6 
        transform transition-all duration-1000 ease-out
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"}
        ${isReversed ? "md:flex-row-reverse" : ""}
      `}
      style={{
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Icon Section */}
      <div
        className={`
          ${activity.bgColor} rounded-2xl p-8 flex items-center justify-center
          min-w-[200px] min-h-[200px] shadow-lg
          transform transition-all duration-700 ease-out hover:scale-105
          ${isVisible ? "scale-100 rotate-0" : "scale-75 rotate-12"}
        `}
        style={{
          transitionDelay: `${index * 300}ms`,
        }}
      >
        <div className="transform hover:scale-110 transition-transform duration-300">
          {activity.icon}
        </div>
      </div>

      {/* Content Section */}
      <div
        className={`
          flex-1 text-center md:text-left
          transform transition-all duration-800 ease-out
          ${
            isVisible
              ? "translate-x-0 opacity-100"
              : isReversed
              ? "translate-x-16 opacity-0"
              : "-translate-x-16 opacity-0"
          }
        `}
        style={{
          transitionDelay: `${index * 400}ms`,
        }}
      >
        <h3
          className={`text-2xl md:text-3xl font-bold mb-4 ${activity.titleColor}`}
        >
          {activity.title}
        </h3>
        <p className="text-gray-600 text-lg leading-relaxed">
          {activity.description}
        </p>

        {/* Animated underline */}
        <div
          className={`
            h-1 bg-gradient-to-r from-green-400 to-blue-400 mt-4 rounded-full
            transform transition-all duration-1000 ease-out
            ${isVisible ? "w-20" : "w-0"}
          `}
          style={{
            transitionDelay: `${index * 600}ms`,
          }}
        />
      </div>
    </div>
  );
};

export default OurActivities;
