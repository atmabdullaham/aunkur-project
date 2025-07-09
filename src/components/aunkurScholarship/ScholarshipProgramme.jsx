import React from "react";

const scholarshipData = [
  {
    title: "Student of The Year",
    badge: "1",
    badgeColor: "bg-pink-300",
    description:
      "Who Score Top on the Exam will be the Aunkur Student of the Year",
    img: "https://via.placeholder.com/150", // replace with your image
  },
  {
    title: "Talentful",
    badge: "2",
    badgeColor: "bg-green-300",
    description:
      "Given to students who showcase exceptional talents in specific field.",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "A Grade",
    badge: "3",
    badgeColor: "bg-purple-300",
    description: "Awarded to students who achieve high scores on the test.",
    img: "https://via.placeholder.com/150",
  },
  {
    title: "B Grade",
    badge: "4",
    badgeColor: "bg-cyan-300",
    description: "Given to students who perform well on the test.",
    img: "https://via.placeholder.com/150",
  },
];

const ScholarshipSection = () => {
  return (
    <div className="py-12 px-4 md:px-8 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold">
          <span className="text-green-600">Scholarship</span> Programme
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          শুদ্ধতার স্পর্শে গড়ে উঠুক স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়...
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {scholarshipData.map((item, index) => (
          <div
            key={index}
            className="p-4 rounded-lg border border-gray-200 shadow bg-white flex flex-col items-center text-center hover:shadow-md transition"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mb-4 ${item.badgeColor}`}
            >
              {item.badge}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScholarshipSection;
