import React, { useState } from "react";

const EvaluationAndSelection = () => {
  const steps = [
    {
      title: "প্রাথমিক মূল্যায়ন",
      description:
        "আবেদনপত্রগুলো প্রাথমিকভাবে যোগ্যতার জন্য পর্যালোচনা করা হয়।",
    },
    {
      title: "পরীক্ষাসমূহ",
      description: "একাডেমিক ও দক্ষতা যাচাইয়ের পরীক্ষা নেওয়া হয়।",
    },
    {
      title: "বিশেষজ্ঞ মূল্যায়ন",
      description: "ক্ষেত্রভিত্তিক বিশেষজ্ঞ দ্বারা মূল্যায়ন করা হয়।",
    },
    {
      title: "চূড়ান্ত মূল্যায়ন",
      description: "সর্বশেষ সিদ্ধান্ত ও অনুমোদন প্রদান করা হয়।",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-green-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6 py-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 text-gray-800">
          মূল্যায়ন ও <span className="text-green-600">বাছাই</span> প্রক্রিয়া
        </h2>
        <p className="text-center text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
          অঙ্কুর স্কলারশিপের আবেদনসমূহ আবেদনকারীর <br className="sm:hidden" />
          একাডেমিক সাফল্য, সামাজিক অংশগ্রহণ ও বাছাইকৃত বিষয়ে আগ্রহের ভিত্তিতে
          বিবেচনা করা হয়।
        </p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center bg-white px-4 py-3 text-left font-semibold text-gray-800 hover:bg-gray-100 transition-colors duration-300"
                aria-expanded={activeIndex === index}
                aria-controls={`accordion-content-${index}`}
              >
                <span className="text-sm sm:text-base">{step.title}</span>
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              <div
                id={`accordion-content-${index}`}
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="bg-gray-50 px-4 py-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EvaluationAndSelection;
