import React from "react";
import ChairmanProfile from "../../assets/Chairman.jpg";

const ChairmanMessage = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-2xl lg:text-5xl font-semibold text-gray-800 mb-4 text-center">
          চেয়ারম্যানের বাণী
        </h1>
        <div className="bg-white flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left side text */}
          <div className="lg:w-4/5">
            <p className="text-lg text-gray-700 text-justify leading-relaxed mb-4">
              সম্মানিত অভিভাবক/শিক্ষকমণ্ডলী
              <br />
              আসসালামু আলাইকুম
              <br />
              <br />
              আমরা জাতি হিসেবে বেশ সমৃদ্ধ ও আত্মমর্যাদাশীল। আমাদের কাছে একটি
              ঐতিহ্যময় ইতিহাস যা আমাদেরকে বিশ্ব দরবারে উচ্চ আসনে সমাসীন করেছে।
              বিশ্ব পরিমণ্ডলে আমরা পেয়েছি আন্তর্জাতিক মাতৃভাষা দিবসের স্বীকৃতি
              যা আমাদের জাতিস্বত্তাকে আরো অলংকৃত ও সমুজ্জ্বল করেছে। আমাদের
              জাতিসত্ত্বা ও স্বকীয়তাকে অক্ষুণ্ণ রাখতে দু-দুবার স্বাধীনতাও লাভ
              করেছি। কিন্তু বৃটিশ বেনিয়াদের বেঁধে দেওয়া শিক্ষাব্যবস্থা থেকে
              পারিনি নিজেদের স্বাধীন করতে, দু-একবার চেষ্টা অবশ্য হয়েছিল। কিন্তু
              অন্ধকার আরো প্রগাঢ় হওয়ায় তা সফলতার মুখ দেখেনি। ফলে জাতিও পায়নি
              শিক্ষার সঠিক আলো। প্রকৃতপক্ষে শিক্ষার মূল উদ্দেশ্য হল মনুষ্যত্বের
              পূর্ণ বিকাশ সাধন। কিন্তু আমাদের শিক্ষা ব্যবস্থায় তা হয়েছে
              উপেক্ষিত। আমাদের শিক্ষা ব্যবস্থা যে স্বপ্নীল মানুষ তৈরির কথা ছিল
              তা পারেনি। বিশ্ববিদ্যালয়ের সর্বোচ্চ ডিগ্রীধারী অসামান্য মেধার
              অধিকারীরাও জড়িয়ে যাচ্ছে দুর্নীতির সাথে। আর এ মেধাবীরাই যদি
              দুর্নীতি করে তাহলে দেশটাকে বাঁচাবে কারা? এসব গাঢ় তমাসাচ্ছন্ন
              আশাহীনতার মূল কারণ হল অস্বচ্ছ সিলেবাস, বাণিজ্য নির্ভর ও নৈতিকতাহীন
              শিক্ষা ব্যবস্থা। ক্রমবর্ধমান পাশের হার সত্ত্বেও গন্তব্যহীন শিক্ষা
              ব্যবস্থা বিশ্বমানচিত্রে আমাদেরকে যোগ্যদের কাতারে দাঁড়াতে দেয়নি...।
            </p>

            <p className="mt-8">
              <strong>প্রফেসর মোহাম্মদ নূরুনবি</strong>
              <br />
              চেয়ারম্যান
              <br />
              সাবেক অধ্যক্ষ,
              <br />
              রামশ্রী সরকারি কলেজ, খাগড়াছড়ি
            </p>
          </div>

          {/* Right side image */}
          <div className="lg:w-1/5 mt-6 lg:mt-20 lg:ml-10 flex justify-center lg:justify-end">
            <img
              src={ChairmanProfile}
              alt="Chairman"
              className="rounded-full border-4 border-green-500 w-48 h-48 lg:w-56 lg:h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
