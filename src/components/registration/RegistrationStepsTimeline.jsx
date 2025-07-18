import React from "react";

const RegistrationStepsTimeline = ({ isFormSubmitted, isPaymentDone }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="bg-green-50 rounded-lg p-4 md:p-6 mb-6 md:mb-8 w-full">
        <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6 md:mb-8">
          আবেদনের ধাপ সমূহ
        </h2>

        {/* Timeline Steps */}
        <div className="flex  items-center justify-center w-full">
          <ul className="space-y-8 md:space-y-0 flex ">
            {/* Step 1 */}
            <li className="flex flex-col items-start justify-center">
              <div className="flex items-center">
                {/* circle div */}
                <div
                  className={`w-10  ml-6 md:ml-12 h-10 flex items-center justify-center rounded-full 
                     bg-green-500 text-white
                  `}
                >
                  1
                </div>
                {/* horizontal line */}
                <hr
                  className={`w-7 h-1 md:w-16 md:h-1 ${
                    isPaymentDone ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              </div>
              <p className="text-center  text-gray-800 font-medium">
                ফি প্রদানের তথ্য দিন
              </p>
            </li>

            {/* Step 2 */}
            <li className="flex flex-col items-center ">
              <div className="flex items-center">
                <hr
                  className={`w-7 h-1 md:w-16 md:h-1 ${
                    isPaymentDone ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full ${
                    isPaymentDone ? "bg-green-500 text-white" : "bg-gray-300"
                  }`}
                >
                  2
                </div>
                <hr
                  className={`w-7 h-1 md:w-16 md:h-1 ${
                    isFormSubmitted ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
              </div>
              <p className="text-center  text-gray-800 font-medium">
                Next এ ক্লিক করুন
              </p>
            </li>

            {/* Step 3 */}
            <li className="flex flex-col items-end">
              <div className="flex items-center">
                <hr
                  className={`w-7 h-1 md:w-16 md:h-1 ${
                    isFormSubmitted ? "bg-green-500" : "bg-gray-300"
                  }`}
                />
                <div
                  className={`w-10 mr-6 md:mr-12 h-10 flex items-center justify-center rounded-full ${
                    isFormSubmitted ? "bg-green-500 text-white" : "bg-gray-300"
                  }`}
                >
                  3
                </div>
              </div>
              <p className="text-center text-gray-800 font-medium">
                ফর্ম ফিলাপ করুন
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Application Process Details */}
      {!isFormSubmitted && !isPaymentDone && (
        <div className="bg-white p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
            আবেদন পদ্ধতি:
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                0183834377 (বিকাশ) নাম্বারে সেন্ডমানি করে ট্রানজেকশন আইডিটি কপি
                করে রাখুন
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>নিচের ফরমটি পূরণ করুন।</span>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                নেক্সট বাটনে ক্লিক করুন (আপনার দেওয়া সকল তথ্য ভালো করে চেক
                করুন)
              </span>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>
                যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই নাম্বারটি ও ট্রানজেকশন
                আইডিটি প্রদান করুন এবং I agree তে টিক দিন
              </span>
            </li>

            <li className="flex items-start">
              <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
              <span>সাবমিট বাটনে ক্লিক করে আপনার আবেদন সম্পন্ন করুন</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegistrationStepsTimeline;
