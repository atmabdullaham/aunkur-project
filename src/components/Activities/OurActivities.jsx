import React from "react";

const OurActivities = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50  py-8 md:py-24 lg:py-30 md:px-4">
      <div className="w-10/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            আমাদের কার্যক্রম
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়….
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          {/* Recognition of Talent */}
          <div className="card bg-green-100 shadow-lg hover:shadow-xl transition-shadow duration-300 ">
            <div className="card-body p-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  অংকুর বৃত্তি প্রকল্প
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                ১৯৮৫ সাল থেকে চট্টগ্রামের সাড়া জাগানো বৃত্তি প্রকল্প, ১৯৮৫ সাল
                থেকে চট্টগ্রামের সাড়া জাগানো বৃত্তি প্রকল্প
              </p>
            </div>
          </div>

          {/* Access to Opportunities */}
          <div className="card bg-cyan-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-body p-8">
              <div className="flex  flex-col md:flex-row items-center mb-6">
                <div className="bg-cyan-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 9H7V7H17V9ZM17 13H7V11H17V13ZM14 17H7V15H14V17Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  বৃক্ষরোপণ অভিযান
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                স্কুল ক্যাম্পাসে বৃক্ষরোপণ অভিযান ও স্কুল ছাত্রদের মাঝে গাছের
                চারা বিতরণ
              </p>
            </div>
          </div>

          {/* Challenge-Taking Student */}
          <div className="card bg-pink-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-body p-8">
              <div className="flex flex-col md:flex-rowitems-center mb-6">
                <div className="bg-pink-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17L4 12L5.41 10.59L9 14.17L18.59 4.58L20 6L9 17Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  উন্নত মূল্যবোধ ও চারিত্রিক নির্মলতা সৃষ্টি
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                স্কুল ছাত্রদের মাঝে উন্নত মূল্যবোধ ও চারিত্রিক নির্মলতা সৃষ্টির
                প্রয়াস
              </p>
            </div>
          </div>

          {/* Support for Future Leaders */}
          <div className="card bg-purple-100 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-body p-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <div className="bg-purple-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13.18V4H19V13.18C19 13.18 19 13.18 19 13.18L12 20L5 13.18ZM12 7.5L10.5 9H13.5L12 7.5ZM12 15.5L13.5 14H10.5L12 15.5Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  কাউন্সেলিং ব্যবস্থা
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                মেধা ও মননের সুষ্ঠ বিকাশে কাউন্সেলিং ও বাহ্যিক জ্ঞানার্জনের
                ব্যবস্থা
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg px-8 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
