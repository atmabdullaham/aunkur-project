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
    <div className="py-8 md:py-12 lg:py-20">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center">
        Aunkur Student of the Year
      </h1>
      <div className="md:w-10/12 mx-auto">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
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
            {/* 1st */}
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
          {/* 2nd */}
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
          {/* 3rd */}
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
          {/* 4th */}
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
          {/* 5th */}
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
          {/* 6th */}
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2019}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#F0F9FF]"}
              btnColor={"bg-[#3BA9FF]"}
              quoteColor={"text-[#3BA9FF]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          {/* 7th */}
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2019}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#FFF3F6]"}
              btnColor={"bg-[#FF4081]"}
              quoteColor={"text-[#FF4081]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          {/* 8th */}
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2019}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#F9F9EC]"}
              btnColor={"bg-[#D1C800]"}
              quoteColor={"text-[#D1C800]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          {/* 9th */}
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2019}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#F0FFF4]"}
              btnColor={"bg-[#00C178]"}
              quoteColor={"text-[#00C178]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
          {/* 10th */}
          <SwiperSlide>
            <StudentOfTheYearCard
              year={2019}
              studentName={"Abdullah"}
              profile={profile1}
              school={"Bangladesh School Limited"}
              className={8}
              rollNumber={10}
              bgColor={"bg-[#F4F4FF]"}
              btnColor={"bg-[#5960FF]"}
              quoteColor={"text-[#5960FF]"}
            ></StudentOfTheYearCard>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default StudentOfTheYear;
