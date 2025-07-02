import React from "react";

export default function ConvertedDesign() {
  return (
    <main className="bg-gradient-to-br from-[#eee8dd] to-[#e3d9c6] min-h-screen flex flex-col">
      {/* Cards Container */}
      <section className="flex flex-wrap items-center justify-evenly p-6 flex-1">
        {/* Card: City */}
        <div className="relative w-64 h-64 bg-transparent group">
          {/* Flip card container */}
          <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-700 transition-transform">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="bg-white w-full h-full shadow-lg">
                {/* Top section (icon, heading, price) */}
                <div
                  className="flex flex-col items-center justify-center h-40 text-white"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)",
                    background: "linear-gradient(to bottom, #ff73b9, #ff40a1)",
                  }}
                >
                  <svg
                    viewBox="0 0 60 60"
                    className="w-12 h-12 mb-1 text-white"
                    fill="currentColor"
                  >
                    <g>
                      <path d="M49.7,22c-1.1,0-2,0.9-2,2v32.2c0,1.1,0.9,2,2,2s2-0.9,2-2V24C51.7,22.9,50.8,22,49.7,22z" />
                      <path
                        d="M13,29.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3h20.8c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7
                          V7.1h24.8v15.3c0,1.1,0.9,2,2,2s2-0.9,2-2V5.1c0-1.1-0.9-2-2-2H3.7c-1.1,0-2,0.9-2,2v51c0,1.1,0.9,2,2,2s2-0.9,2-2V36.5H13
                          c1.1,0,2-0.9,2-2s-0.9-2-2-2H5.7v-3H13z"
                      />
                      <path
                        d="M58,11.9c0-0.1,0-0.1,0-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1,0-0.1-0.1-0.2c0-0.1-0.1-0.1-0.1-0.2c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0
                          c0-0.1-0.1-0.1-0.1-0.2c0,0-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1c-0.1,0-0.1-0.1-0.2-0.1c0,0-0.1-0.1-0.2-0.1
                          c-0.1,0-0.1-0.1-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c-0.1,0-0.1,0-0.2-0.1c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c0,0,0,0,0,0
                          c0,0-0.1,0-0.1,0c-0.1,0-0.2,0-0.2,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.1,0-0.2,0.1c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0-0.1,0.1l-12.6,7.8
                          c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.2,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.1c0,0-0.1,0.1-0.1,0.2c0,0.1-0.1,0.1-0.1,0.2
                          c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0,0,0v5.4H22.1
                          c-1.1,0-2,0.9-2,2v28.9c0,1.1,0.9,2,2,2s2-0.9,2-2V29.3h17.3v26.9c0,1.1,0.9,2,2,2s2-0.9,2-2V21l8.6-5.3v40.5c0,1.1,0.9,2,2,2
                          s2-0.9,2-2V12.1C58,12,58,12,58,11.9z"
                      />
                      <path d="M28,31L28,31c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,31,28,31z" />
                      <path d="M33.5,31L33.5,31c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,31,33.5,31z" />
                      <path d="M28,36L28,36c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S29.1,36,28,36z" />
                      <path d="M33.5,36L33.5,36c-1.1,0-2,0.9-2,2s0.9,2,2,2c1.1,0,2-0.9,2-2S34.6,36,33.5,36z" />
                    </g>
                  </svg>
                  <h2 className="text-xl font-bold">City break</h2>
                  <p className="text-base mt-1">From £29</p>
                </div>
                {/* Bottom section (View me) */}
                <div className="flex items-center justify-center h-24">
                  <p className="text-pink-500 font-extrabold text-lg">
                    View me
                  </p>
                </div>
              </div>
            </div>

            {/* Back Side (video) */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop>
                <source
                  src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Inside Page */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white shadow-inner p-4 transition-all duration-700 z-0">
            <div className="flex flex-col items-center text-center h-full justify-center">
              <h3 className="text-pink-500 text-lg font-bold mb-2">
                For urban lovers
              </h3>
              <p className="text-gray-700 text-sm">
                As cities never sleep, there are always something going on, no
                matter what time!
              </p>
              <a
                href="#"
                className="mt-4 px-4 py-2 border-2 border-pink-400 text-pink-400 rounded-md font-semibold transition-colors duration-300 hover:bg-pink-400 hover:text-white"
              >
                View deals
              </a>
            </div>
          </div>
        </div>

        {/* Card: Ski (similar structure) */}
        <div className="relative w-64 h-64 bg-transparent group">
          <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-700 transition-transform">
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="bg-white w-full h-full shadow-lg">
                <div
                  className="flex flex-col items-center justify-center h-40 text-white"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)",
                    background: "linear-gradient(to bottom, #47c2d7, #279eb2)",
                  }}
                >
                  <svg
                    viewBox="0 0 60 60"
                    className="w-12 h-12 mb-1"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M58.8,54.5L38.5,19.3c-0.4-0.6-1-1-1.7-1s-1.4,0.4-1.7,1L14.8,54.5c-0.4,0.6-0.4,1.4,0,2c0.4,0.6,1,1,1.7,1h40.6
                          c0.7,0,1.4-0.4,1.7-1C59.2,55.9,59.2,55.1,58.8,54.5z M36.8,24.3l5.8,10c-0.5-0.2-1.1-0.3-1.7-0.3c-2.5,0-3.7,1.5-4.6,2.5
                          c-0.7,0.9-1,1.1-1.5,1.1s-0.8-0.2-1.5-1.1c-0.6-0.7-1.3-1.5-2.4-2.1L36.8,24.3z M20,53.5l8.9-15.4c0.5,0,0.7,0.3,1.4,1.1
                          c0.8,1,2.1,2.5,4.6,2.5s3.7-1.5,4.6-2.5c0.7-0.9,1-1.1,1.5-1.1c0.5,0,0.8,0.2,1.5,1.1c0.8,1,2.1,2.5,4.5,2.5l6.8,11.8H20z"
                      />
                      <path
                        d="M14.7,51.5c1.1,0,2-0.9,2-2s-0.9-2-2-2H6.4l9.1-15.7c0.6,0.6,1.5,1.3,2.9,1.3c1.8,0,2.8-1.2,3.3-1.8
                          c0.1-0.1,0.2-0.2,0.3-0.3c0.1,0.1,0.2,0.2,0.3,0.3c0.5,0.6,1.5,1.8,3.3,1.8c1.1,0,2-0.9,2-2c0-1.1-0.9-2-1.9-2
                          c-0.1-0.1-0.2-0.2-0.3-0.4c-0.5-0.6-1.5-1.8-3.3-1.8c-1.8,0-2.8,1.2-3.3,1.8c-0.1,0.1-0.2,0.2-0.3,0.3c-0.1-0.1-0.2-0.2-0.3-0.3
                          c-0.1-0.2-0.3-0.4-0.5-0.6l5.7-9.9l3.8,6.6c0.6,1,1.8,1.3,2.7,0.7c1-0.6,1.3-1.8,0.7-2.7L25,13.2c-0.4-0.6-1-1-1.7-1
                          s-1.4,0.4-1.7,1l-8.4,14.5c-0.1,0.1-0.2,0.3-0.3,0.4L1.2,48.5c0,0,0,0.1,0,0.1c0,0.1-0.1,0.1-0.1,0.2c0,0.1,0,0.1-0.1,0.2
                          c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2c0,0,0,0.1,0,0.1c0,0,0,0,0,0.1c0,0.1,0,0.1,0,0.2c0,0.1,0,0.1,0,0.2C1,50,1,50,1,50.1
                          c0,0.1,0,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0.1,0.1,0.1,0.1,0.2c0,0,0.1,0.1,0.1,0.1c0,0,0.1,0.1,0.1,0.1
                          c0.1,0,0.1,0.1,0.2,0.1c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.1,0.1,0.2,0.1,0.3,0.1c0,0,0.1,0,0.1,0c0.1,0,0.3,0.1,0.5,0.1h8.7z"
                      />
                      <path
                        d="M40.7,12.3h3.1l-2.2,2.2c-0.6,0.6-0.6,1.5,0,2.1c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4l2.2-2.2v3.1
                          c0,0.8,0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5v-3.1l2.2,2.2c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1l-2.2-2.2h3.1
                          c0.8,0,1.5-0.7,1.5-1.5s-0.7-1.5-1.5-1.5h-3.1l2.2-2.2c0.6-0.6,0.6-1.5,0-2.1c-0.6-0.6-1.5-0.6-2.1,0L49,7.2V4
                          c0-0.8-0.7-1.5-1.5-1.5S46,3.2,46,4v3.1l-2.2-2.2c-0.6-0.6-1.5-0.6-2.1,0c-0.6,0.6-0.6,1.5,0,2.1l2.2,2.2h-3.1
                          c-0.8,0-1.5,0.7-1.5,1.5S39.9,12.3,40.7,12.3z"
                      />
                    </g>
                  </svg>
                  <h2 className="text-xl font-bold">Ski trip</h2>
                  <p className="text-base mt-1">From £199</p>
                </div>
                <div className="flex items-center justify-center h-24">
                  <p className="text-cyan-600 font-extrabold text-lg">
                    View me
                  </p>
                </div>
              </div>
            </div>

            {/* Back (video) */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop>
                <source
                  src="https://player.vimeo.com/external/195913085.sd.mp4?s=7c12f7a83de62a8900fd2ae049297070b9bc8a54&profile_id=164&oauth2_token_id=574477611"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Inside Page */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white shadow-inner p-4 transition-all duration-700 z-0">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-cyan-600 text-lg font-bold mb-2">
                For snow lovers
              </h3>
              <p className="text-gray-700 text-sm">
                Love snow? Why not take up exciting ski-in sessions and hit the
                slopes?
              </p>
              <a
                href="#"
                className="mt-4 px-4 py-2 border-2 border-cyan-600 text-cyan-600 rounded-md font-semibold transition-colors duration-300 hover:bg-cyan-600 hover:text-white"
              >
                View deals
              </a>
            </div>
          </div>
        </div>

        {/* Card: Beach */}
        <div className="relative w-64 h-64 bg-transparent group">
          <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-700 transition-transform">
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="bg-white w-full h-full shadow-lg">
                <div
                  className="flex flex-col items-center justify-center h-40 text-white"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)",
                    background: "linear-gradient(to bottom, #fb9b88, #f86647)",
                  }}
                >
                  <svg
                    viewBox="0 0 60 60"
                    className="w-12 h-12 mb-1"
                    fill="currentColor"
                  >
                    <path
                      d="M57.2,28h-7.4c-0.4-4-2-7.7-4.4-10.6l3.2-3.2c0.8-0.8,0.8-2,0-2.8
                      c-0.8-0.8-2-0.8-2.8,0l-3.2,3.2c-3-2.4-6.6-4-10.6-4.4V2.8c0-1.1-0.9-2-2-2s-2,0.9-2,2v7.4c-4,0.4-7.7,2-10.6,4.4l-3.2-3.2
                      c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l3.2,3.2c-2.4,3-4,6.6-4.4,10.6H2.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h7.4
                      c0.4,4,2,7.7,4.4,10.6l-3.2,3.2c-0.8,0.8-0.8,2,0,2.8c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l3.2-3.2c3,2.4,6.6,4,10.6,4.4v7.4
                      c0,1.1,0.9,2,2,2s2-0.9,2-2v-7.4c4-0.4,7.7-2,10.6-4.4l3.2,3.2c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8
                      l-3.2-3.2c2.4-3,4-6.6,4.4-10.6h7.4c1.1,0,2-0.9,2-2S58.3,28,57.2,28z M30,45.9c-8.8,0-15.9-7.2-15.9-15.9c0-8.8,7.2-15.9,15.9-15.9
                      c8.8,0,15.9,7.2,15.9,15.9C45.9,38.8,38.8,45.9,30,45.9z"
                    />
                  </svg>
                  <h2 className="text-xl font-bold">Beach time</h2>
                  <p className="text-base mt-1">From £229</p>
                </div>
                <div className="flex items-center justify-center h-24">
                  <p className="text-orange-500 font-extrabold text-lg">
                    View me
                  </p>
                </div>
              </div>
            </div>

            {/* Back (video) */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop>
                <source
                  src="https://player.vimeo.com/external/332588783.sd.mp4?s=cab1817146dd72daa6346a1583cc1ec4d9e677c7&profile_id=139&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Inside Page */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white shadow-inner p-4 transition-all duration-700 z-0">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-orange-500 text-lg font-bold mb-2">
                For sun lovers
              </h3>
              <p className="text-gray-700 text-sm">
                Relax and get a sun-kissed tan by the sea or take up surfing for
                an adventure!
              </p>
              <a
                href="#"
                className="mt-4 px-4 py-2 border-2 border-orange-500 text-orange-500 rounded-md font-semibold transition-colors duration-300 hover:bg-orange-500 hover:text-white"
              >
                View deals
              </a>
            </div>
          </div>
        </div>

        {/* Card: Camping */}
        <div className="relative w-64 h-64 bg-transparent group">
          <div className="relative w-full h-full preserve-3d group-hover:rotate-y-180 duration-700 transition-transform">
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="bg-white w-full h-full shadow-lg">
                <div
                  className="flex flex-col items-center justify-center h-40 text-white"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 90%, 57% 90%, 50% 100%, 43% 90%, 0 90%)",
                    background: "linear-gradient(to bottom, #00db93, #00b97d)",
                  }}
                >
                  <svg
                    viewBox="0 0 60 60"
                    className="w-12 h-12 mb-1"
                    fill="currentColor"
                  >
                    <path
                      d="M57,52.1c0-0.4-0.1-0.7-0.3-1.1l-6.3-10.8L32.4,9l2.3-4c0.6-1,0.2-2.2-0.7-2.7
                      c-1-0.6-2.2-0.2-2.7,0.7L30,5.2L28.7,3c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7l2.3,4l-18,31.1L3.3,51
                      C3.1,51.3,3,51.7,3,52.1c0,0.4,0.1,0.7,0.3,1c0.4,0.6,1,1,1.7,1h50c0.7,0,1.4-0.4,1.7-1C56.9,52.8,57,52.4,57,52.1z
                      M34.7,49.8C34.2,50,32.1,50,30,50s-4.2,0-4.7-0.2c-0.2-0.5-0.2-2.1-0.2-3.6l0-4.3c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9
                      l0,4.3C34.9,47.7,34.9,49.3,34.7,49.8z M13.1,42.1L28,16.5v16.7c-3.9,0.9-6.9,4.4-6.9,8.6l0,4.3c0,1.7,0,2.9,0.2,4H8.5
                      L13.1,42.1z M38.7,50.1c0.2-1,0.2-2.3,0.2-4l0-4.3c0-4.2-2.9-7.7-6.9-8.6V16.5l15,25.7l4.6,7.9H38.7z"
                    />
                  </svg>
                  <h2 className="text-xl font-bold">Camping trek</h2>
                  <p className="text-base mt-1">From £129</p>
                </div>
                <div className="flex items-center justify-center h-24">
                  <p className="text-green-600 font-extrabold text-lg">
                    View me
                  </p>
                </div>
              </div>
            </div>

            {/* Back (video) */}
            <div className="absolute w-full h-full rotate-y-180 backface-hidden overflow-hidden">
              <video className="w-full h-full object-cover" autoPlay muted loop>
                <source
                  src="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>

          {/* Inside Page */}
          <div className="absolute right-0 top-0 w-64 h-64 bg-white shadow-inner p-4 transition-all duration-700 z-0">
            <div className="flex flex-col items-center justify-center text-center h-full">
              <h3 className="text-green-600 text-lg font-bold mb-2">
                For nature lovers
              </h3>
              <p className="text-gray-700 text-sm">
                Get your boots on for some hiking and explore beautiful scenery!
              </p>
              <a
                href="#"
                className="mt-4 px-4 py-2 border-2 border-green-600 text-green-600 rounded-md font-semibold transition-colors duration-300 hover:bg-green-600 hover:text-white"
              >
                View deals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-4">
        <p className="text-white text-center text-sm">
          &copy; 2025 Created by Aunkur
        </p>
      </footer>
    </main>
  );
}
