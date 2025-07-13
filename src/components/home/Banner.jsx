import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Slide from "./Slide";
import imageOne from "../../assets/5.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="bg-green-100/40 ">
      <div className="flex flex-col md:h-[calc(100vh-200px)] md:flex-row items-center justify-between gap-8 px-4 py-4 md:py-8  lg:w-10/12 mx-auto">
        {/* text div */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-green-700 font-bold mb-4 text-center">
            শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়
          </h1>
          <p className="text-gray-600 md:text-center text-justify">
            একবিংশ শতাব্দীর চ্যালেঞ্জ মোকাবেলায় নৈতিকতা বিবর্জিত শিক্ষা
            ব্যবস্থার অসারতার প্রতিকূলে অনুপম চরিত্র, মেধার সুনিপুন বিকাশ ও
            স্বপ্নছোঁয়ার সুনিবিড় তত্ত্বাবধানে
          </p>
        </div>
        {/* slide div */}
        <div className="md:w-1/2 w-full">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="mySwiper custom-swiper"
          >
            <SwiperSlide>
              <Slide image={imageOne}></Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide image={imageOne}></Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide image={imageOne}></Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide image={imageOne}></Slide>
            </SwiperSlide>
            <SwiperSlide>
              <Slide image={imageOne}></Slide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
