import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Slide = ({ text, image }) => {
  return (
    <div className="w-full  flex flex-col md:flex-row h-[38rem] items-center justify-center">
      {/* text */}
      <div className=" flex items-center justify-center w-full md:w-1/2 h-full  ">
        <div className="text-center">
          <motion.h1
            initial={{ y: 15, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              y: { duration: 1, ease: "easeOut" }, // Entrance animation
              opacity: { duration: 1, ease: "easeOut" },
              x: {
                delay: 1, // Start bounce after appearing
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="text-xl md:text-2xl  font-semibold text-black lg:text-4xl"
          >
            {text}
          </motion.h1>
          <br />
          <Link
            to="/find-tutors"
            className=" px-5 py-2 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-red-400 rounded-md lg:w-auto hover:bg-red-500 focus:outline-none focus:bg-gray-500"
          >
            Book a Demo
          </Link>
        </div>
      </div>
      {/* image */}
      <div className="w-full md:w-1/2  h-full">
        <motion.img
          initial={{ opacity: 0.8, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 10,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className=""
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Slide;
