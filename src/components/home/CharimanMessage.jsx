import React from "react";

const ChairmanMessage = () => {
  return (
    <section className="border-2 border-green-600 rounded-xl p-6 md:flex md:items-start gap-6">
      {/* Text Section */}
      <div className="md:w-2/3 space-y-3">
        <h2 className="text-xl font-bold text-green-700">চেয়ারম্যানের বাণী</h2>
        <div>
          <p className="text-lg font-semibold">সম্মানিত অভিভাবক/শিক্ষকমণ্ডলী</p>
          <p className="font-bold">আসসালামু আলাইকুম</p>
        </div>
        <p className="text-justify leading-7 text-gray-700">
          আমাদের জাতি হিসেবে বেশ সমৃদ্ধ ও আত্মমর্যাদাসম্পন্ন। আমাদের কাছে একটি
          ঐতিহাসিক ইতিহাস যা আমাদেরকে বিশ্ব দরবারে উচ্চ আসনে সমাসীন করেছে। বিশ্ব
          পরিবেশগুলো আমাদের পেছনের আন্তর্জাতিক মহত্বার দিবসের স্বীকৃতি যা আমাদের
          জাতিসত্তাকে আরো অলংকৃত ও সমৃদ্ধ করেছে...{" "}
          <span className="text-green-600 font-semibold cursor-pointer">
            Read More
          </span>
        </p>

        <div className="pt-4">
          <p className="font-bold">প্রফেসর মোহাম্মদ নূরুলনবী</p>
          <p className="text-sm">
            চেয়ারম্যান
            <br />
            সাবেক অধ্যক্ষ,
            <br />
            রামগড় সরকারি কলেজ, খাগড়াছড়ি
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/3 flex justify-center mt-6 md:mt-0">
        <div className="relative w-52 h-52 rounded-full border-4 border-green-500 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328f7d4a"
            alt="Chairman"
            className="rounded-full w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
