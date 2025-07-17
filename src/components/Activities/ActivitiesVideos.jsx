import React from "react";

const videoData = [
  {
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAunkur85%2Fvideos%2F1193347828976372%2F&show_text=false&width=560&t=0",
    type: "facebook",
  },
  {
    videoUrl:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAunkur85%2Fvideos%2F3059445190884481%2F&show_text=false&width=560&t=0",
    type: "facebook",
  },
  {
    videoUrl:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAunkur85%2Fposts%2Fpfbid025ZSz6UNqvHbyJBg94A9wDvg539R6t6KzLW7vMkSSkaYu73zcimu9a6Vw3XMPnRfZl&show_text=true&width=500",
    type: "facebook",
  },
  {
    videoUrl:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FAunkur85%2Fposts%2Fpfbid02WnkmjFiAywmo9K5CzUWiV5zRfGjqfJWXbJJV75D5KxQtfo2SDaDPEyttuiWxWiFYl&show_text=true&width=500",
    type: "facebook",
  },
];

const ActivitiesVideos = () => {
  return (
    <section className="bg-green-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-2 text-center">
          এক নজরে আমাদের কার্যক্রম
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8 text-center">
          শুভ্রতার স্পর্শে লালিত স্বপ্ন বিকশিত হোক সত্যের ছোঁয়ায়….
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoData.map((video, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl shadow hover:shadow-xl transition bg-gray-50 flex items-center justify-center aspect-video"
            >
              <iframe
                src={video.videoUrl}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full rounded-xl"
                scrolling="no"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActivitiesVideos;
