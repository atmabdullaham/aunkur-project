import React from "react";

const Eligibility = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-center mb-4">Eligibility</h2>
      <p className="text-center text-gray-600 mb-6">
        ছাত্রদের স্বার্থে ন্যায্যতা এবং বিচক্ষণতা নিশ্চিত করার জন্য নীতিমালা....
      </p>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Eligible Groups */}
        <div className="flex-1 bg-green-100 border border-green-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold text-green-700 flex items-center gap-2 mb-4">
            <span className="text-2xl animate-pulse">✅</span> Eligible Groups
          </h3>
          <ul className="list-disc list-inside text-black">
            <li>Residents of Chittagong</li>
            <li>Students of Class 6, 7, 8, 9 and 10</li>
            <li>Must be of Current Academic Year</li>
          </ul>
        </div>
        {/* Ineligible Groups */}
        <div className="flex-1 bg-red-100 border border-red-500 rounded-lg p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
          <h3 className="text-xl font-bold text-red-700 flex items-center gap-2 mb-4">
            <span className="text-2xl animate-pulse">❌</span> Ineligible Groups
          </h3>
          <ul className="list-disc list-inside text-black">
            <li>Residents Outside Chittagong</li>
            <li>Students outside of Class 6, 7, 8, 9 and 10</li>
            <li>Other Academic Year</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
