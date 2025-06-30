import React from "react";
import { MdStarPurple500 } from "react-icons/md";
const syllabusData = [
  {
    title: "৪র্থ শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink: "#",
    downloadLink: "#",
    upcoming: false,
  },
  {
    title: "৫ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink: "#",
    downloadLink: "#",
    upcoming: false,
  },
  {
    title: "৬ষ্ঠ শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink: "#",
    downloadLink: "#",
    upcoming: false,
  },
  {
    title: "৭ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink: "#",
    downloadLink: "#",
    upcoming: false,
  },
  {
    title: "৮ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink: "#",
    downloadLink: "#",
    upcoming: false,
  },
  {
    title: "৯ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink: "#",
    downloadLink: "#",
    upcoming: false,
  },
  {
    title: "১০ শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink: "#",
    downloadLink: "#",
    upcoming: false,
  },
  {
    title: "",
    subjects: [],
    viewLink: "",
    downloadLink: "",
    upcoming: true,
  },
  // ...add more upcoming if needed
];

const DownloadIcon = () => (
  <svg width="18" height="18" fill="none" className="mr-1 inline">
    <path
      d="M9 2v10m0 0l-4-4m4 4l4-4M3 16h12"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" fill="gold" className="mr-1 inline">
    <polygon points="8,2 10,6.5 15,6.5 11,10 12.5,15 8,12.5 3.5,15 5,10 1,6.5 6,6.5" />
  </svg>
);

const AunkurSyllabus = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-center font-bold text-3xl mb-2">সিলেবাস</h1>
      <p className="text-center text-gray-600 mb-8 text-base">
        নিচের দেওয়া সিলেবাস গুলো থেকে তোমার শ্রেণির সিলেবাস ডাউনলোড করে এখনি
        প্রস্তুতি শুরু করে দাও।
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {syllabusData.map((item, idx) => (
          <div
            key={idx}
            className="animate-border rounded-2xl p-[2px] transition-shadow duration-300"
          >
            {item.upcoming ? (
              <div className="min-h-[260px] bg-white rounded-2xl flex items-center justify-center shadow w-full h-full">
                <div className="animate-border rounded-full p-[2px] inline-block">
                  <button className="text-lg px-6 py-2  bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl font-semibold shadow-md tracking-wide">
                    UpComing..
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl items-center shadow p-7 min-h-[260px] flex flex-col w-full h-full">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <span className="inline-flex items-center bg-yellow-300 text-gray-800 px-3 py-1 rounded font-semibold text-sm mb-3 mt-1 shadow-sm">
                  <MdStarPurple500 className="mr-1" /> Subjects
                </span>
                <ul className="grid grid-cols-2 gap-x-4 pl-4 mb-4 text-gray-700 text-base">
                  {item.subjects.map((sub, i) => (
                    <li key={i} className="mb-1 list-disc list-inside">
                      {sub}
                    </li>
                  ))}
                </ul>
                <button
                  className="w-full mb-2 py-2 border-2 border-green-600 rounded-md bg-green-50 text-green-700 font-semibold text-base flex items-center justify-center gap-2 hover:bg-green-100 transition"
                  type="button"
                >
                  বিস্তারিত দেখুন
                </button>
                <a
                  href={item.downloadLink}
                  className="w-full py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-base flex items-center justify-center gap-2 hover:bg-green-700 text-white"
                  download
                >
                  <DownloadIcon />
                  ডাউনলোড করুন
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AunkurSyllabus;
