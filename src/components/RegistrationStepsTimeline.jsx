import React, { useState } from "react";

const RegistrationStepsTimeline = ({ isFormSubmitted, isPaymentDone }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="bg-green-50 rounded-lg p-6 mb-8 w-full">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          আবেদনের ধাপ সমূহ
        </h2>

        {/* Timeline Steps */}

        <div className="flex justify-center items-center w-full">
          <ul className="timeline ">
            <li>
              <div
                className={`timeline-start timeline-box ${
                  true ? "bg-green-100 border-green-500" : "bg-gray-100"
                }`}
              >
                ফর্ম ফিলাপ করুন
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={isFormSubmitted ? "green" : "gray"}
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr
                className={isFormSubmitted ? "bg-green-500" : "bg-gray-300"}
              />
            </li>
            <li>
              <hr
                className={isFormSubmitted ? "bg-green-500" : "bg-gray-300"}
              />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={isFormSubmitted ? "green" : "gray"}
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div
                className={`timeline-end timeline-box ${
                  isFormSubmitted
                    ? "bg-green-100 border-green-500"
                    : "bg-gray-100"
                }`}
              >
                ফর্ম সাবমিট করুন
              </div>
              <hr className={isPaymentDone ? "bg-green-500" : "bg-gray-300"} />
            </li>
            <li>
              <hr className={isPaymentDone ? "bg-green-500" : "bg-gray-300"} />
              <div
                className={`timeline-start timeline-box ${
                  isPaymentDone
                    ? "bg-green-100 border-green-500"
                    : "bg-gray-100"
                }`}
              >
                পেমেন্ট সম্পূর্ণ করুন
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill={isPaymentDone ? "green" : "gray"}
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Application Process Details */}
      <div className="bg-white">
        <h3 className="text-xl font-bold text-gray-800 mb-4">আবেদন পদ্ধতি:</h3>

        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>নিচের ফরমটি পূরণ করুন।</span>
          </li>

          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>
              সাবমিট বাটন ক্লিক করে আপনার আবেদনটি জমা দিন। (আপনার দেওয়া সকল
              তথ্য ভালো করে চেক করুন)
            </span>
          </li>

          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>পেমেন্ট অপশন সিলেক্ট করুন এবং I agree তে টিক দিন</span>
          </li>

          <li className="flex items-start">
            <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>পেমেন্ট বাটন ক্লিক করে আপনার পেমেন্ট সম্পন্ন করুন</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegistrationStepsTimeline;
