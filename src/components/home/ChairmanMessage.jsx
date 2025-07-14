import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// Import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper/modules";

const ChairmanMessage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-4 py-8">
      {/* Swiper container */}
      <div className="w-full md:w-1/2">
        <h4 className="text-xl font-bold mb-4">Chairman's Message</h4>
        <Swiper
          direction={"vertical"} // Enable vertical scrolling
          slidesPerView={"auto"} // Adjust slides dynamically
          freeMode={true} // Enable free scrolling
          scrollbar={{
            draggable: true, // Make scrollbar draggable
          }}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            // Ensure scrolling works vertically
          }}
          modules={[FreeMode, Scrollbar, Mousewheel]} // Include required modules
          className="mySwiper"
          style={{
            height: "300px", // Set fixed height for the scrollable container
            border: "1px solid #ccc", // Add border for styling
            borderRadius: "8px", // Rounded corners
            padding: "16px", // Add padding inside the container
            backgroundColor: "#f9f9f9", // Light background color
            overflow: "auto", // Enable scrolling
          }}
        >
          <SwiperSlide>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              fuga similique tenetur provident tempora illum harum a explicabo
              corporis odio commodi, quo expedita illo recusandae aliquam culpa
              sit dolorum repellendus perspiciatis iusto! Aut vel provident,
              repellendus quibusdam, harum asperiores laudantium maiores
              commodi, omnis quisquam facilis nobis veniam optio libero tempore.
            </p>
            <p>
              Dolorem officia laborum, ea ullam soluta quibusdam facere
              reprehenderit aspernatur dicta nobis voluptates labore. Corrupti
              ea eius ipsum quo iure illum eaque sit quam, culpa facere nisi
              soluta! Quibusdam, commodi? Ea fugiat commodi, dolor vitae ut
              quaerat praesentium amet nisi! Quas nemo nulla facere obcaecati
              cupiditate laudantium veniam eveniet facilis?
            </p>
            <p>
              Harum corporis omnis ut praesentium porro dolores. In saepe
              perspiciatis sed consequatur minus odio dolorem necessitatibus,
              iste error architecto deleniti totam voluptas quam aspernatur
              cupiditate perferendis hic rem vel ipsam molestiae! Iure accusamus
              minus ullam magni ab odit quas impedit architecto! Inventore, sint
              iure quos aliquid nam necessitatibus nobis. Ipsam?
            </p>
            <p>
              Incidunt, excepturi! Fugit obcaecati culpa facilis, ex temporibus
              blanditiis quasi rem suscipit ipsum odio quod doloremque iste
              minima numquam officia atque non iusto vero. Non est ea veritatis
              iste molestiae! Consectetur iste recusandae, veniam ipsum
              excepturi sunt, sint laudantium error, obcaecati dicta ut
              distinctio laborum eius tenetur inventore nulla? Repudiandae?
            </p>
            <p>
              Harum distinctio nisi vitae deserunt maxime excepturi quos.
              Perspiciatis optio sint eum sed, quia ad sit sequi blanditiis
              veritatis ex tempora ab corrupti rem nam perferendis nemo ducimus
              inventore est distinctio obcaecati consequatur doloribus atque
              maiores eveniet? Aliquid adipisci nisi minima ipsum necessitatibus
              obcaecati sint libero nostrum, facere commodi exercitationem!
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
      {/* Placeholder for additional content */}
      <div className="w-full md:w-1/2">
        <h4 className="text-xl font-bold mb-4">Additional Content</h4>
        <p>
          This section can be used for additional content or images related to
          the Chairman's message.
        </p>
      </div>
    </div>
  );
};

export default ChairmanMessage;
