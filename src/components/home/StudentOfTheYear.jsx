import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import profile1 from "../../assets/reviewer1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";
import StudentOfTheYearCard from "./StudentOfTheYearCard";

const StudentOfTheYear = () => {
  return (
    <div className="py-8 px-2 md:py-12 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Aunkur Student of the Year
      </h1>
      <div className="md:w-10/12 mx-auto">
        <Swiper
          slidesPerView={1} // Default for mobile
          spaceBetween={10} // Adjust spacing for mobile
          breakpoints={{
            // Responsive breakpoints
            640: {
              slidesPerView: 2, // Show 2 slides on screens >= 640px
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on screens >= 1024px
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000, // 3 seconds delay between slides
            disableOnInteraction: false, // Continue autoplay after user interaction
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2024}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#ECFEFF]"}
              btnColor={"bg-[#00BCC9]"}
              quoteColor={"text-[#00BCC9]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2023}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#F5F0FF]"}
              btnColor={"bg-[#9471FF]"}
              quoteColor={"text-[#9471FF]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2022}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#ECFFEC]"}
              btnColor={"bg-[#34CA26]"}
              quoteColor={"text-[#34CA26]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2021}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#FFF7E6]"}
              btnColor={"bg-[#FFA500]"}
              quoteColor={"text-[#FFA500]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2020}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#FFF0F0]"}
              btnColor={"bg-[#FF5E5E]"}
              quoteColor={"text-[#FF5E5E]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default StudentOfTheYear;
