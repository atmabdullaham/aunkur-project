import React from "react";

const Eligibility = () => {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-800">
          Eligibility
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base">
          ছাত্রদের স্বার্থে ন্যায্যতা এবং বিচক্ষণতা নিশ্চিত করার জন্য
          নীতিমালা....
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Eligible Groups */}
          <div className="flex-1 bg-green-100 border border-green-200 rounded-lg p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <h3 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2 mb-3">
              <span className="text-2xl animate-pulse">✅</span>
              Eligible Groups
            </h3>
            <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base leading-relaxed">
              <li>Residents of Chittagong</li>
              <li>Students of Class 6, 7, 8, 9 and 10</li>
              <li>Must be of Current Academic Year</li>
            </ul>
          </div>

          {/* Ineligible Groups */}
          <div className="flex-1 bg-red-100 border border-red-200 rounded-lg p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <h3 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2 mb-3">
              <span className="text-2xl animate-pulse">❌</span>
              Ineligible Groups
            </h3>
            <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base leading-relaxed">
              <li>Residents Outside Chittagong</li>
              <li>Students outside of Class 6, 7, 8, 9 and 10</li>
              <li>Other Academic Year</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
