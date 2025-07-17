import React from "react";

const ApplicationCalendar = () => {
  return (
    <section className="bg-green-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
          <span className="text-green-600">এপ্লিকেশন</span> ক্যালেন্ডার
        </h2>

        <div className=" bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-lg overflow-x-auto">
          <table className="w-full border-collapse min-w-max">
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  Application Period
                </td>
                <td className="py-4 px-4 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  July 10 – September 30
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  Evaluation Test
                </td>
                <td className="py-4 px-4 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  October
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  Evaluation Process
                </td>
                <td className="py-4 px-4 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  November 01 – 15
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-4 px-4 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  Announcement of Results
                </td>
                <td className="py-4 px-4 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  November 16 – 30
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 sm:px-6 text-gray-700 font-medium whitespace-nowrap">
                  Scholarship Reception Programme
                </td>
                <td className="py-4 px-4 sm:px-6 text-green-600 font-semibold text-right whitespace-nowrap">
                  December
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
