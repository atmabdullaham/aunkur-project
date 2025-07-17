import React from "react";

const Eligibility = () => {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-10">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 leading-snug">
          অংশগ্রহণের যোগ্যতা
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          ছাত্রদের স্বার্থে ন্যায্যতা এবং বিচক্ষণতা নিশ্চিত করার জন্য আমরা কিছু
          নীতিমালা নির্ধারণ করেছি। নিচে বিস্তারিত দেওয়া হলো।
        </p>

        {/* Two Cards - Responsive */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Eligible Groups */}
          <div className="flex-1 bg-green-100 border border-green-200 rounded-xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <h3 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2 mb-3">
              <span className="text-2xl animate-pulse">✅</span>
              যোগ্য প্রার্থীরা
            </h3>
            <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base leading-relaxed">
              <li>চট্টগ্রাম জেলার স্থায়ী বাসিন্দা</li>
              <li>৬ষ্ঠ, ৭ম, ৮ম, ৯ম ও ১০ম শ্রেণির ছাত্র-ছাত্রী</li>
              <li>চলতি শিক্ষাবর্ষের ছাত্র-ছাত্রী হতে হবে</li>
            </ul>
          </div>

          {/* Ineligible Groups */}
          <div className="flex-1 bg-red-100 border border-red-200 rounded-xl p-5 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
            <h3 className="text-lg sm:text-xl font-bold text-black flex items-center gap-2 mb-3">
              <span className="text-2xl animate-pulse">❌</span>
              অযোগ্য প্রার্থীরা
            </h3>
            <ul className="list-disc list-inside text-gray-800 text-sm sm:text-base leading-relaxed">
              <li>চট্টগ্রাম জেলার বাইরে বসবাসকারীরা</li>
              <li>৬ষ্ঠ-১০ম শ্রেণির বাইরে অন্যান্য শ্রেণির ছাত্র-ছাত্রী</li>
              <li>পূর্ববর্তী বা ভবিষ্যতের শিক্ষাবর্ষের ছাত্র-ছাত্রী</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
