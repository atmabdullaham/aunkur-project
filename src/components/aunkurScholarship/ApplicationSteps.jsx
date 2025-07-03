import React from "react";

const ApplicationSteps = () => {
  const steps = [
    {
      id: 1,
      title: "Enroll",
      description: "enroll now to start your journey.",
      icon: "📝",
    },
    {
      id: 2,
      title: "Registration",
      description: "register to secure your spot in the program.",
      icon: "🔐",
    },
    {
      id: 3,
      title: "Submit Application",
      description:
        "Submit your application to be considered for the scholarship.",
      icon: "📄",
    },
    {
      id: 4,
      title: "Payment",
      description: "Complete the payment to finalize your registration.",
      icon: "💰",
    },
    {
      id: 5,
      title: "Approve",
      description:
        "Your application will be reviewed and approved by our team.",
      icon: "✅",
    },
  ];

  return (
    <div className="bg-white text-black py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-5">
        Application in 5 Steps
      </h2>
      <p className="text-center text-gray-500 mb-12">
        এই ৪টি ধাপ ফলো করে তুমিও হতে পারো পরবর্তী বিজয়ী, তাই এখনই রেজিস্ট্রেশন
        করে ফেলো।
      </p>
      {/* Step Cards */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-4 lg:gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={step.id}
            className="relative flex flex-col items-center text-center space-y-4 w-full md:w-1/4"
          >
            {/* Curved Arrow between steps */}
            {index !== steps.length - 1 && (
              <div className="absolute top-[50px] right-[-100px] transform hidden md:block z-10">
                <svg width="130" height="30" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      id={`arrowGradient${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#0062ff" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#00a3ff"
                        stopOpacity="0.6"
                      />
                    </linearGradient>
                    <marker
                      id={`arrowhead${index}`}
                      markerWidth="10"
                      markerHeight="7"
                      refX="9.5"
                      refY="3.5"
                      orient="auto"
                      markerUnits="userSpaceOnUse"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#00a3ff" />
                    </marker>
                  </defs>
                  <path
                    d="M5,15 Q55,-15 105,15"
                    fill="none"
                    stroke={`url(#arrowGradient${index})`}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    markerEnd={`url(#arrowhead${index})`}
                  />
                </svg>
              </div>
            )}

            {/* Step Icon Container */}
            <div className="bg-white backdrop-blur-xl border border-amber-500 p-5 rounded-2xl shadow-lg w-[100px] h-[100px] flex items-center justify-center">
              <div className="text-5xl">{step.icon}</div>
            </div>

            {/* Step Number */}
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-4">
              STEP {step.id}
            </p>

            {/* Step Title */}
            <h3 className="text-xl font-bold">{step.title}</h3>

            {/* Step Description */}
            <p className="text-gray-400 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationSteps;
