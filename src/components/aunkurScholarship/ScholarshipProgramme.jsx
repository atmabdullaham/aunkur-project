import React, { useState, useEffect } from "react";

const ScholarshipProgramme = () => {
  const scholarshipData = [
    {
      title: "এ গ্রেড শিক্ষার্থী",
      button: "বিস্তারিত দেখুন",
      description:
        "যেসব শিক্ষার্থী ধারাবাহিক ভালো ফলাফল অর্জন করেছে, তারা এই গ্রেডের আওতায় স্কলারশিপ পেতে পারে।",
      badge: "৩",
    },
    {
      title: "স্টুডেন্ট অব দ্য ইয়ার",
      button: "বিস্তারিত দেখুন",
      description:
        "একজন শিক্ষার্থীর একবছরের সামগ্রিক পারফরম্যান্স, নেতৃত্ব ও সমাজসেবামূলক কাজের ভিত্তিতে এই সম্মাননা প্রদান করা হয়।",
      badge: "১",
      highlight: true,
    },
    {
      title: "ট্যালেন্টপুল স্কলার",
      button: "বিস্তারিত দেখুন",
      description:
        "বিশেষ মেধাবী শিক্ষার্থীদের জন্য ট্যালেন্টপুল স্কলারশিপ নির্ধারিত যা তাদের সম্ভাবনাকে বিকশিত করে।",
      badge: "২",
      highlight: true,
    },
    {
      title: "বি গ্রেড শিক্ষার্থী",
      button: "বিস্তারিত দেখুন",
      description:
        "যেসব শিক্ষার্থী কিছু বিষয়ে উন্নতি প্রয়োজন, তাদের জন্য এই স্কলারশিপ প্রোগ্রাম সহায়ক ভূমিকা পালন করে।",
      badge: "৪",
    },
  ];

  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const small = window.innerWidth < 640;
      setIsSmallDevice(small);
      console.log(
        "isSmallDevice:",
        small,
        "window.innerWidth:",
        window.innerWidth
      );
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // On small device, reorder the array based on badge number ascending
  const displayedData = isSmallDevice
    ? [...scholarshipData].sort((a, b) => Number(a.badge) - Number(b.badge))
    : scholarshipData;

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            স্কলারশিপ <span className="text-green-500">প্রোগ্রাম</span>
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            প্রতিভা ও মেধার সঠিক মূল্যায়নের জন্য আমাদের স্কলারশিপ প্রোগ্রাম
            চালু হয়েছে। এই উদ্যোগ শিক্ষার্থীদের উন্নয়নে সহায়তা করবে এবং
            ভবিষ্যতের জন্য প্রস্তুত করবে।
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedData.map((plan, index) => {
            // original middle highlight logic from your code
            const originalIndex = scholarshipData.indexOf(plan);
            const isMiddle = originalIndex === 1 || originalIndex === 2;

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between bg-green-100 rounded-2xl shadow-md p-6 pt-10 transition-all duration-300 w-full ${
                  isMiddle ? "lg:scale-105" : ""
                }`}
              >
                {/* Badge at top, half outside */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-14 h-14 text-black text-center leading-[3.5rem] font-bold rounded-full  bg-white">
                    {plan.badge}
                  </div>
                </div>
                {/* Card Content */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800 mt-6 text-center">
                    {plan.title}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base text-center">
                    {plan.description}
                  </p>
                </div>

                {/* Button */}
                <button className="mt-6 font-semibold text-[#0AA76B] bg-white bg-opacity-50 backdrop-blur-xl shadow-inner py-2 px-4 rounded-lg hover:bg-green-200 transition text-sm sm:text-base">
                  {plan.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScholarshipProgramme;
