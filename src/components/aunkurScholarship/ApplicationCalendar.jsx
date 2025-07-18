import React from "react";

const ApplicationCalendar = () => {
  return (
    <section className="bg-green-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl  font-bold text-center mb-6 text-gray-800">
          <span className="text-green-600">এপ্লিকেশন</span> ক্যালেন্ডার
        </h2>

        <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full border-collapse min-w-[320px] sm:min-w-full text-sm sm:text-base">
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-3 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  আবেদন সময়কাল
                </td>
                <td className="py-3 px-3 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  ১০ জুলাই – ৩০ সেপ্টেম্বর
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-3 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  মূল্যায়ন পরীক্ষা
                </td>
                <td className="py-3 px-3 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  অক্টোবর
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-3 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  মূল্যায়ন প্রক্রিয়া
                </td>
                <td className="py-3 px-3 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  ০১ – ১৫ নভেম্বর
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-3 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  ফলাফল ঘোষণা
                </td>
                <td className="py-3 px-3 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  ১৬ – ৩০ নভেম্বর
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  বৃত্তি গ্রহণ কর্মসূচি
                </td>
                <td className="py-3 px-3 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  ডিসেম্বর
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCalendar;
