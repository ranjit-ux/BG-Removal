import React from "react";
import { assets } from "../assets/assets";

const UploadImg = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-18 pb-13 text-center">
      
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800">
        See the Magic.{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-indigo-500">
          Try Now
        </span>
      </h1>

      <p className="mt-4 text-lg text-slate-700 max-w-2xl mx-auto">
        Upload your image and remove the background instantly using AI <br /> clean,
        sharp & professional.
      </p>

      {/* Upload Card */}
      <div className="mt-12 relative group max-w-xl mx-auto">
        
        {/* Glow */}
        <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-purple-500 to-indigo-500 blur opacity-25 group-hover:opacity-60 transition"></div>

        {/* Card */}
        <div className="relative bg-white rounded-3xl border border-slate-200 p-10 cursor-pointer hover:border-purple-400 transition">
          
          {/* Icon */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition">
              <img src={assets.upload_btn_icon} alt="upload" className="w-8" />
            </div>
          </div>

          {/* CTA Text */}
          <h3 className="mt-6 text-xl font-semibold text-slate-800">
            Click or Drag & Drop Image
          </h3>

          <p className="mt-2 text-slate-500 text-sm">
            JPG, PNG supported • Max 10MB
          </p>

          {/* Button */}
          <button className="mt-6 inline-flex items-center gap-3 bg-linear-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-purple-400/50 transition">
            ✨ Upload Image
          </button>

          {/* Trust Points */}
          <div className="mt-6 flex justify-center gap-6 text-sm text-slate-500">
            <span>⚡ 1-Click AI</span>
            <span>🔒 No Signup</span>
            <span>🖼 HD Output</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UploadImg;
