import React from "react";

const ApplicationCalendar = () => {
  return (
    <div className="bg-gray-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        <span className="text-green-600">এপ্লিকেশন</span> ক্যালেন্ডার
      </h2>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-4 px-6 text-gray-700 font-medium">
                Application Period
              </td>
              <td className="py-4 px-6 text-green-600 font-semibold text-right">
                July 10 – September 30
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6 text-gray-700 font-medium">
                Evaluation Test
              </td>
              <td className="py-4 px-6 text-green-600 font-semibold text-right">
                October
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6 text-gray-700 font-medium">
                Evaluation Process
              </td>
              <td className="py-4 px-6 text-green-600 font-semibold text-right">
                November 01 – November 15
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6 text-gray-700 font-medium">
                Announcement of Results
              </td>
              <td className="py-4 px-6 text-green-600 font-semibold text-right">
                November 16 – November 30
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 text-gray-700 font-medium">
                Scholarship Reception Programme
              </td>
              <td className="py-4 px-6 text-green-600 font-semibold text-right">
                December
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationCalendar;
