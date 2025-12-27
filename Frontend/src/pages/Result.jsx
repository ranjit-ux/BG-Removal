import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [bg, setBg] = useState("transparent");

  const resultImage =
    bg === "transparent" ? assets.flowerWgrid : assets.flowerWObgHD;

  return (
    <div className="mx-4 my-6 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white rounded-xl px-8 py-8 shadow-md">

        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          {/* Original */}
          <div>
            <p className="font-semibold text-gray-600 mb-3">Original</p>
            <img
              src={assets.flowerWbg}
              alt="original"
              className="rounded-md border"
            />
          </div>

          {/* Result */}
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-3">
              Background Removed
            </p>

           <div className="relative rounded-md border border-gray-300 bg-layer 
            aspect-[4/3] w-full overflow-hidden flex items-center justify-center">

  
  {/* Badge */}
  <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full z-10">
    PNG • {bg === "transparent" ? "Transparent" : "White"}
  </span>

  <img
    src={resultImage}
    alt="result"
    className="w-full h-full object-contain"
  />
</div>

            {/* Background Switch */}
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setBg("transparent")}
                className={`px-4 py-1.5 rounded-full text-sm border transition ${
                  bg === "transparent"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "text-gray-600 hover:border-gray-400"
                }`}
              >
                transparent
              </button>

              <button
                onClick={() => setBg("white")}
                className={`px-4 py-1.5 rounded-full text-sm border transition ${
                  bg === "white"
                    ? "bg-purple-500 text-white border-purple-500"
                    : "text-gray-600 hover:border-gray-400"
                }`}
              >
                white
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500">
            Image processed successfully • Ready to download
          </p>
          
          <div className="flex gap-3">
            <button className="text-purple-500 border border-purple-300 px-8 py-3 rounded-full font-medium hover:scale-105 transition">
            🔄️ Try Another Image
            </button>

            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition">
              ⬇ Download HD Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
