import React from "react";

const videoData = [
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+1",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+2",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+3",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+4",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+5",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+6",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+7",
    videoUrl: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
  {
    thumbnail: "https://via.placeholder.com/400x250?text=Video+8",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const ActivitiesVideos = () => {
  return (
    <div className="py-6 px-4 md:px-8 bg-white">
      <h1 className="text-center font-bold text-3xl mb-4">
        এক নজরে আমাদের কার্যক্রম
      </h1>
      <p className="text-center text-gray-600 mb-8 text-base">
        শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়….
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow hover:shadow-xl transition"
          >
            <iframe
              src={video.videoUrl}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-60 rounded-xl"
            ></iframe>
          </div>
        ))}
      </div>

      {/* Facebook Video Embed */}
      <div className="mt-8">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAunkur85%2Fvideos%2F1193347828976372%2F&show_text=false&width=560&t=0"
          width="560"
          height="314"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ActivitiesVideos;
