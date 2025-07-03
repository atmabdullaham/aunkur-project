import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi"; // Premium icons for accordion

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "প্রশ্নঃ বৃত্তি কিভাবে শুরু হবে",
      answer:
        "বৃত্তি প্রক্রিয়া সাধারণত একটি নির্দিষ্ট সময়সীমার মধ্যে শুরু হয়। আবেদনকারীদের নির্ধারিত সময়সীমার মধ্যে তাদের আবেদন জমা দিতে হবে।",
    },
    {
      question: "প্রশ্নঃ বৃত্তি কিভাবে শুরু হবে",
      answer:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "প্রশ্নঃ বৃত্তি কিভাবে শুরু হবে",
      answer:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "প্রশ্নঃ বৃত্তি কিভাবে শুরু হবে",
      answer:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "প্রশ্নঃ বৃত্তি কিভাবে শুরু হবে",
      answer:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "প্রশ্নঃ বৃত্তি কিভাবে শুরু হবে",
      answer:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      question: "প্রশ্নঃ বৃত্তি কিভাবে শুরু হবে",
      answer:
        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          FAQ <span className="text-green-600">সাধারণ জিজ্ঞাসা</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* FAQ Section */}
          <div className="bg-white shadow-xl rounded-lg p-6">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b pb-4 mb-4 cursor-pointer transition-all duration-300"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-gray-800">
                    {item.question}
                  </h3>
                  <span className="text-green-600 text-xl">
                    {activeIndex === index ? <FiMinus /> : <FiPlus />}
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 mt-4">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form Section */}
          <div className="bg-white shadow-xl rounded-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              আপনার প্রশ্ন আমাদেরকে পাঠান
            </h3>
            <p className="text-gray-600 mb-6">
              আপনার কোন প্রশ্ন থাকলে আমাদেরকে বিস্তারিত লিখে পাঠান।
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
