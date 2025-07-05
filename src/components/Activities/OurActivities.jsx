import React from "react";

const OurActivities = () => {
  return (
    <div className="bg-[#fdf1e8] flex flex-col lg:flex-row justify-between items-center px-6 lg:px-20 py-12 gap-12">
      {/* Left Section */}
      <div className="max-w-xl space-y-6 text-center lg:text-left">
        <h1 className="text-4xl font-bold text-black">
          "শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়। "
        </h1>
        <p className="text-lg text-gray-800 leading-relaxed">
          অংকুর শিশু-কিশোর সাহিত্য সাংস্কৃতিক সংসদ, চট্টগ্রাম মহানগর দক্ষিণ-এর
          ওয়েবসাইটে আপনাকে স্বাগতম। আমাদের উদ্দেশ্য হলো শিশু-কিশোরদের সাহিত্য ও
          সংস্কৃতির প্রতি আগ্রহ সৃষ্টি করা এবং তাদের সৃজনশীলতা বিকাশে সহায়তা
          করা।
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-md transition">
            Enroll Now
          </button>
          <button className="border border-black text-sm font-semibold py-3 px-6 rounded-full">
            Details
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-4 max-w-lg w-full">
        {/* Top Row */}
        <div className="col-span-2 flex gap-4 justify-center">
          <img
            src="/assets/team1.jpg"
            alt="Team"
            className="w-3/5 sm:w-2/3 lg:w-1/2 h-24 sm:h-28 lg:h-32 object-cover rounded-[20px] border border-white shadow"
          />
          <img
            src="/assets/person1.jpg"
            alt="Person"
            className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full border border-white shadow"
          />
        </div>

        {/* Middle Row */}
        <div className="col-span-2 flex gap-4 justify-center">
          <img
            src="/assets/person2.jpg"
            alt="Person"
            className="w-16 sm:w-20 h-16 sm:h-20 object-cover rounded-full border border-white shadow"
          />
          <img
            src="/assets/collab.jpg"
            alt="Collab"
            className="w-2/3 h-24 sm:h-28 lg:h-32 object-cover rounded-[30px] border border-white shadow"
          />
        </div>

        {/* Bottom Row */}
        <div className="bg-green-400 text-white rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center shadow-md mx-auto border-2">
          <span className="text-lg sm:text-2xl font-bold">Our</span>
          <span className="text-xs sm:text-sm text-center uppercase leading-tight p-3">
            Journey Starts from 1984
          </span>
        </div>
        <div className="flex gap-2 justify-center">
          <img
            src="/assets/session.jpg"
            alt="Session"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border border-white shadow"
          />
          <img
            src="/assets/person3.jpg"
            alt="Person"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border border-white shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default OurActivities;
