import React from "react";
import moment from "moment";

const MyRegistrationCard = ({ reg }) => {
  return (
    <div className="group w-full max-w-[600px] lg:max-w-[700px] mx-auto p-4 transform transition-all duration-500 cursor-pointer">
      <div className="relative rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-800 border border-white/10 text-white shadow-xl hover:shadow-2xl transition duration-700 overflow-hidden backdrop-blur-xl">
        {/* Decorative Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/20 opacity-20 group-hover:opacity-30 transition duration-500" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 animate-pulse" />
          <div className="absolute top-10 left-10 w-16 h-16 bg-white/10 rounded-full blur-xl animate-ping" />
          <div className="absolute bottom-16 right-16 w-12 h-12 bg-white/10 rounded-full blur-md animate-ping" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition duration-1000" />
        </div>

        <div className="p-6 relative z-10">
          {/* Profile Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping" />
              <div className="absolute inset-0 rounded-full border border-white/10 animate-pulse" />
              <div className="p-6 rounded-full border border-white/20 bg-green-700/60 backdrop-blur-xl shadow-lg transform group-hover:scale-105 transition duration-300">
                <div className="transition-transform duration-700">
                  {reg.gender === "male" ? (
                    // Male SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 2h3a1 1 0 110 2h-1.586l-4.793 4.793a7 7 0 11-1.414-1.414L19 2.414V2zm-7 18a5 5 0 100-10 5 5 0 000 10z" />
                    </svg>
                  ) : (
                    // Female SVG
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2a7 7 0 012 13.72V18h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H8a1 1 0 110-2h2v-2.28A7 7 0 0112 2zm0 2a5 5 0 100 10 5 5 0 000-10z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="text-center mb-4">
            <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              {reg.name_en}{" "}
              <span className="text-sm md:text-base text-green-100">
                ({reg.name_bn})
              </span>
            </h3>
          </div>

          {/* Info Section */}
          <div className="text-sm space-y-2 leading-relaxed">
            <p>
              <span className="font-semibold text-green-100">Status:</span>{" "}
              <span
                className={`px-2 py-0.5 rounded text-sm ${
                  reg.reg_status === "accepted"
                    ? "bg-white/80 text-green-700"
                    : reg.reg_status === "rejected"
                    ? "bg-red-600/90 text-white"
                    : "bg-yellow-400/90 text-green-900"
                }`}
              >
                {reg.reg_status.replace("_", " ")}
              </span>
            </p>
            <p>
              <span className="font-semibold text-green-100">Class:</span>{" "}
              {reg.student_class} &nbsp;
              <span className="font-semibold text-green-100">Roll:</span>{" "}
              {reg.student_roll}
            </p>
            <p>
              <span className="font-semibold text-green-100">School:</span>{" "}
              {reg.school_name}
            </p>
            <p>
              <span className="font-semibold text-green-100">Phone:</span>{" "}
              {reg.phone_number} &nbsp;
              <span className="font-semibold text-green-100">
                WhatsApp:
              </span>{" "}
              {reg.whatsapp_number}
            </p>
            <p>
              <span className="font-semibold text-green-100">bKash:</span>{" "}
              {reg.bkash_number} &nbsp;
              <span className="font-semibold text-green-100">Txn ID:</span>{" "}
              {reg.transaction_Id}
            </p>
            <p>
              <span className="font-semibold text-green-100">Exam Center:</span>{" "}
              {reg.exam_center}
            </p>
          </div>

          {/* Decorative Line */}
          <div className="mt-6 h-0.5 w-1/3 mx-auto bg-gradient-to-r from-transparent via-white to-transparent rounded-full group-hover:w-1/2 transition-all duration-500 animate-pulse" />

          {/* Animation Dots */}
          <div className="flex justify-center space-x-2 mt-4 opacity-70 group-hover:opacity-100 transition duration-300">
            <div className="w-2 h-2 bg-white rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-white rounded-full animate-bounce delay-200" />
          </div>

          {/* Submission Date */}
          <p className="text-xs text-green-100 text-right mt-4">
            Submitted: {moment(reg.submittedAt).format("DD MMM YYYY, h:mm A")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyRegistrationCard;
