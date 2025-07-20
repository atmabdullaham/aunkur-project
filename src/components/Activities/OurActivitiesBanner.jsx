import React from "react";
import Image_1 from "../../assets/activities_1.png";
import Image_2 from "../../assets/activities_2.png";
import Image_4 from "../../assets/activities_4.png";
import Image_5 from "../../assets/activities_5.png";
import Image_6 from "../../assets/activities_6.png";
import Image_7 from "../../assets/activities_7.png";

const OurActivitiesBanner = () => {
  return (
    <div className="bg-[#fdf1e8] px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row justify-between items-center gap-12">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black leading-snug">
            শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়।
          </h1>
          <p className="text-base sm:text-lg text-justify text-gray-800 leading-relaxed">
            অংকুর শিশু-কিশোর সাহিত্য সাংস্কৃতিক সংসদ, চট্টগ্রাম মহানগর দক্ষিণ-এর
            ওয়েবসাইটে আপনাকে স্বাগতম। আমাদের উদ্দেশ্য হলো শিশু-কিশোরদের সাহিত্য
            ও সংস্কৃতির প্রতি আগ্রহ সৃষ্টি করা এবং তাদের সৃজনশীলতা বিকাশে
            সহায়তা করা। আমাদের কার্যক্রমের মধ্যে রয়েছে সাহিত্য প্রতিযোগিতা,
            সাংস্কৃতিক অনুষ্ঠান, কর্মশালা এবং বিভিন্ন সৃজনশীল কার্যক্রম।
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
        <div className="grid grid-cols-2 gap-4 max-w-sm sm:max-w-md w-full">
          {/* Top Row */}
          <div className="col-span-2 flex justify-center gap-4">
            <img
              src={Image_1}
              alt="Team"
              className="w-1/2 h-auto object-cover rounded-full border border-amber-400 shadow-2xl"
            />
            <img
              src={Image_5}
              alt="Person"
              className="w-1/4 h-auto object-cover rounded-2xl border border-amber-400 shadow-2xl"
            />
          </div>

          {/* Middle Row */}
          <div className="col-span-2 flex justify-center gap-4">
            <img
              src={Image_4}
              alt="Person"
              className="w-1/4 h-auto object-cover rounded-full border border-amber-400 shadow-2xl"
            />
            <img
              src={Image_2}
              alt="Collab"
              className="w-1/2 h-auto object-cover rounded-2xl border border-amber-400 shadow-2xl"
            />
          </div>

          {/* Bottom Row */}
          <div className="col-span-2 flex justify-center gap-4">
            {/* <img
              src={Image_3}
              alt="Session"
              className="w-1/4 h-auto object-cover rounded-full border border-white shadow"
            /> */}
            <img
              src={Image_7}
              alt="Team"
              className="w-1/2 h-auto object-cover rounded-full border border-amber-400 shadow-2xl"
            />
            <img
              src={Image_6}
              alt="Person"
              className="w-1/4 h-auto object-cover rounded-2xl border border-amber-400 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurActivitiesBanner;
