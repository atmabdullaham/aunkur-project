import React from "react";

const WhyScholarshipProject = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Why this <span className="text-green-500">Scholarship</span>{" "}
            Project?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            এই অ্যাপ ব্যবহার করে তুমিও হতে পারো একটি মেরিটরি বিজেতা, তাই এখনই
            রেজিস্ট্রেশন কর ফেনোসায়।
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Recognition of Talent */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-body p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  RECOGNITION OF TALENT
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We identify and reward exceptional talents, ensuring that
                deserving students receive the acknowledgment they deserve.
              </p>
            </div>
          </div>

          {/* Access to Opportunities */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-body p-8">
              <div className="flex items-center mb-6">
                <div className="bg-cyan-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-cyan-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM17 9H7V7H17V9ZM17 13H7V11H17V13ZM14 17H7V15H14V17Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  ACCESS TO OPPORTUNITIES
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Gain access to exclusive academic and extracurricular
                opportunities that enhance your learning and development.
              </p>
            </div>
          </div>

          {/* Challenge-Taking Student */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-body p-8">
              <div className="flex items-center mb-6">
                <div className="bg-pink-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17L4 12L5.41 10.59L9 14.17L18.59 4.58L20 6L9 17Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  CHALLENGE-TAKING STUDENT
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Be ready with all the essential academic skills needed to tackle
                the next challenge. Be the student who can quickly adapt,
                contribute, and excel.
              </p>
            </div>
          </div>

          {/* Support for Future Leaders */}
          <div className="card bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="card-body p-8">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-4 rounded-full mr-4">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 13.18V4H19V13.18C19 13.18 19 13.18 19 13.18L12 20L5 13.18ZM12 7.5L10.5 9H13.5L12 7.5ZM12 15.5L13.5 14H10.5L12 15.5Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  SUPPORT FOR FUTURE LEADERS
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our scholarship aims to nurture future leaders by providing
                resources and support for personal and professional growth.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="btn btn-primary btn-lg px-8 py-3 text-white bg-gradient-to-r from-green-500 to-blue-500 border-none hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyScholarshipProject;
