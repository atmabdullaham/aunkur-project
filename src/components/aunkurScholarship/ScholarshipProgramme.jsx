import React from "react";

const ScholarshipProgramme = () => {
  const scholarshipData = [
    {
      title: "A Grade: ",
      button: "See details",
      features: [
        "Up to 50 patient records",
        "Scheduling and appointment",
        "Analytics & Reporting",
        "Limited reporting and analytics",
        "Email support",
      ],
      badge: "3",
    },
    {
      title: "Student of The Year",
      button: "See details",
      features: [
        "Up to 5,000 patient records",
        "Comprehensive analytics",
        "Data portal for self-service scheduling",
        "Integration with third-party tools",
        "Phone and email support",
      ],
      badge: "1",
      highlight: true,
    },
    {
      title: "Talentpul",
      button: "See details",
      features: [
        "Unlimited patient records",
        "Fully customizable workflows and reports",
        "Dedicated account manager for setup and support",
        "On-site training and implementation assistance",
        "24/7 premium support",
      ],
      badge: "2",
      highlight: true,
    },
    {
      title: "B Grade: ",
      button: "See details",
      features: [
        "Custom integrations",
        "Volume-based pricing",
        "Advanced analytics suite",
        "Security compliance support",
        "24/7 enterprise support",
      ],
      badge: "4",
    },
  ];

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Scholarship <span className="text-green-300">Programme</span>
          </h2>
          <p className="mt-3 text-gray-600">
            শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়….
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scholarshipData.map((plan, index) => {
            const isMiddle = index === 1 || index === 2;

            return (
              <div
                key={index}
                className={`flex flex-col justify-between bg-green-100 rounded-2xl shadow-md p-6 transition-all duration-300 w-full
                  ${isMiddle ? "lg:scale-105" : ""}
                `}
              >
                <div>
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full mb-3 inline-block">
                    {plan.badge}
                  </span>
                  <h3 className="text-xl font-semibold mb-1">{plan.title}</h3>
                  <p className="text-3xl font-bold mb-3">
                    {plan.price}
                    <span className="text-base font-medium">
                      {plan.duration}
                    </span>
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-600 mr-2 mt-1">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-6 font-bold text-[#0AA76B] bg-white bg-opacity-50 backdrop-blur-xl shadow-inner py-2 px-4 rounded-lg hover:bg-green-100 transition">
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
