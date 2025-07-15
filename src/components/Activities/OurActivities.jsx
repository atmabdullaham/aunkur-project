import React from "react";

const activities = [
  {
    title: "অংকুর বৃত্তি প্রকল্প",
    description:
      "১৯৮৫ সাল থেকে চট্টগ্রামের সাড়া জাগানো বৃত্তি প্রকল্প, ১৯৮৫ সাল থেকে চট্টগ্রামের সাড়া জাগানো বৃত্তি প্রকল্প",
    bgColor: "bg-green-100",
    iconColor: "text-green-500",
    svgPath:
      "M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z",
  },
  {
    title: "বৃক্ষরোপণ অভিযান",
    description:
      "স্কুল ক্যাম্পাসে বৃক্ষরোপণ অভিযান ও স্কুল ছাত্রদের মাঝে গাছের চারা বিতরণ",
    bgColor: "bg-cyan-100",
    iconColor: "text-cyan-500",
    svgPath:
      "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 9H7V7H17V9ZM17 13H7V11H17V13ZM14 17H7V15H14V17Z",
  },
  {
    title: "উন্নত মূল্যবোধ ও চারিত্রিক নির্মলতা সৃষ্টি",
    description:
      "স্কুল ছাত্রদের মাঝে উন্নত মূল্যবোধ ও চারিত্রিক নির্মলতা সৃষ্টির প্রয়াস",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-500",
    svgPath:
      "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17L4 12L5.41 10.59L9 14.17L18.59 4.58L20 6L9 17Z",
  },
  {
    title: "কাউন্সেলিং ব্যবস্থা",
    description:
      "মেধা ও মননের সুষ্ঠ বিকাশে কাউন্সেলিং ও বাহ্যিক জ্ঞানার্জনের ব্যবস্থা",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
    svgPath:
      "M5 13.18V4H19V13.18C19 13.18 19 13.18 19 13.18L12 20L5 13.18ZM12 7.5L10.5 9H13.5L12 7.5ZM12 15.5L13.5 14H10.5L12 15.5Z",
  },
];

const OurActivities = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-blue-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            আমাদের কার্যক্রম
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়….
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className={`card ${activity.bgColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="card-body p-8">
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className={`${activity.bgColor} p-4 rounded-full mr-4`}>
                    <svg
                      className={`w-8 h-8 ${activity.iconColor}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={activity.svgPath} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {activity.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg px-8 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurActivities;
