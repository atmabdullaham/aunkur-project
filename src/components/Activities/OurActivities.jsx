import React from "react";
import "./style.css";
const OurActivities = () => {
  const data = [
    {
      title: "অর্থকুমার বৃত্তি প্রকল্প",
      description:
        "১৯৫৮ সাল থেকে চট্টগ্রামের সাড়ে জাগানগা বৃত্তি প্রকল্প, ১৯৯৫ সাল থেকে চট্টগ্রামের সাড়ে জাগানগা বৃত্তি প্রকল্প",
      bgColor: "bg-blue-100",
      icon: "🎓",
    },
    {
      title: "বৃক্ষরোপণ অভিযান",
      description:
        "স্কুল ক্যাম্পাসে বৃক্ষরোপণ অভিযান ও স্কুল ছাত্রদের মাঝে গাছের চারা বিতরণ",
      bgColor: "bg-purple-100",
      icon: "🌱",
    },
    {
      title: "উন্নত মূল্যবোধ ও চরিত্রিক নির্মলতা সৃষ্টি",
      description:
        "স্কুল ছাত্রদের মাঝে উন্নত মূল্যবোধ ও চরিত্রিক নির্মলতা সৃষ্টির প্রয়াস",
      bgColor: "bg-green-100",
      icon: "⚙️",
    },
    {
      title: "কাউন্সিলিং ব্যবস্থা",
      description:
        "মেধা ও মানসিক স্বাস্থ্য বিকাশে কাউন্সিলিং ও বাহিকাজ আঞ্জানের ব্যবস্থা",
      bgColor: "bg-pink-100",
      icon: "🧠",
    },
  ];

  return (
    <div className="programs-container">
      <h2 className="title">আমাদের কার্যক্রম</h2>
      <p className="subtitle">
        উল্লেখযোগ্য স্পর্শকাতর লাইনটি স্বপ্ন বিকশিত হোক সততা (ট্যাগলাইন).....
      </p>
      <ul className="cards">
        {data.map((item, index) => (
          <li key={index} className="card" style={{ "--index": index + 1 }}>
            <div className="card__content">
              <div className="icon">{item.icon}</div>
              <div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OurActivities;
