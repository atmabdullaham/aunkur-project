import React from "react";
import { MdStarPurple500 } from "react-icons/md";

const syllabusData = [
  {
    title: "৪র্থ শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    upcoming: false,
  },
  {
    title: "৫ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    upcoming: false,
  },
  {
    title: "৬ষ্ঠ শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    upcoming: false,
  },
  {
    title: "৭ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    upcoming: false,
  },
  {
    title: "৮ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    upcoming: false,
  },
  {
    title: "৯ম শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    upcoming: false,
  },
  {
    title: "১০ শ্রেণির সিলেবাস",
    subjects: ["বাংলা", "বিজ্ঞান", "গণিত", "ইংরেজি"],
    viewLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    downloadLink:
      "https://drive.google.com/file/d/1xiTM93cRsWKR4DepowkcIXEhScZ1gXL1/view?usp=sharing",
    upcoming: false,
  },
  {
    title: "",
    subjects: [],
    viewLink: "",
    downloadLink: "",
    upcoming: true,
  },
];

// 🔽 Utility to get direct download link
const getDirectDownloadLink = (driveViewLink) => {
  const match = driveViewLink.match(/\/d\/(.*?)\//);
  return match
    ? `https://drive.google.com/uc?export=download&id=${match[1]}`
    : driveViewLink;
};

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

const AunkurSyllabus = () => {
  return (
    <div className="w-10/12 mx-auto md:px-4 py-14 md:py-18 lg:py-24">
      <h1 className="text-center font-bold text-3xl mb-2">সিলেবাস</h1>
      <p className="text-center text-gray-600 mb-8 text-base">
        নিচের দেওয়া সিলেবাস গুলো থেকে তোমার শ্রেণির সিলেবাস ডাউনলোড করে এখনি
        প্রস্তুতি শুরু করে দাও।
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {syllabusData.map((item, idx) => (
          <div
            key={idx}
            className="animate-border to-blue-500 rounded-2xl p-[2px] transition-shadow duration-300"
          >
            {item.upcoming ? (
              <div className="min-h-[260px] bg-green-100 rounded-2xl flex items-center justify-center shadow w-full h-full">
                <div className="animate-border rounded-full p-[2px] inline-block">
                  <button className="text-lg px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-3xl font-semibold shadow-md tracking-wide">
                    UpComing..
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-green-100 rounded-2xl items-center shadow p-7 min-h-[260px] flex flex-col w-full h-full">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <span className="inline-flex items-center bg-white text-gray-800 px-3 py-1 rounded font-semibold text-sm mb-3 mt-1 shadow-sm">
                  <MdStarPurple500 className="mr-1" /> Subjects
                </span>
                <ul className="grid grid-cols-2 gap-x-2 pl-4 mb-4 text-gray-700 text-base">
                  {item.subjects.map((sub, i) => (
                    <li key={i} className="mb-1 list-disc list-inside">
                      {sub}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mb-2 py-2 border-2 border-green-600 rounded-md bg-green-50 text-green-700 font-semibold text-base flex items-center justify-center gap-2 hover:bg-green-100 transition"
                >
                  বিস্তারিত দেখুন
                </a>
                <a
                  href={getDirectDownloadLink(item.downloadLink)}
                  className="w-full py-2 rounded-md bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-base flex items-center justify-center gap-2 hover:bg-green-700 text-white"
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
