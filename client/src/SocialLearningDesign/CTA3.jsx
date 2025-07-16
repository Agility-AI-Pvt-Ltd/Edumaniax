import React from "react";
import { Link } from "react-router-dom";

const CTA3 = () => {
  return (
    <div className="max-w-7xl mt-16 mx-auto px-4 py-10">
      {/* 📱 Mobile Layout */}
      <div className="md:hidden bg-[#FFD86B] rounded-2xl p-6 flex flex-col items-center text-center">
        <img
          src="/imageForDesign/show-hat-magician--Streamline-Freehand.png"
          alt="Magic Hat"
          className="w-36 mb-4"
        />
        <h2 className="text-[1.5rem] font-extrabold text-gray-900 mb-3 text-center">
          Want to play all the levels?
        </h2>

        <p className="text-gray-800 text-sm mb-4">
          Our interactive stories, creative tools, and relatable characters are
          designed to nurture social and emotional growth. Through every
          activity, students learn to understand themselves, connect with
          others, manage emotions, and make thoughtful choices—building
          confidence and leadership skills along the way.
        </p>
        <Link to="/login">
          <button className="bg-[#068F36] hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md shadow-md transition text-base">
            Book your trial now! - It's Free
          </button>
        </Link>
      </div>

      {/* 🖥️ Desktop Layout */}
      <div className="hidden md:flex relative bg-[#FFD86B] rounded-2xl p-6 lg:p-10 flex-row items-center justify-between gap-6">
        {/* Left: Text Section */}
        <div className="max-w-xl flex-1 text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-3 md:mb-4">
            Want to play all the levels?
          </h2>
          <p className="text-gray-800 text-base mt-12">
            Our interactive stories, creative tools, and relatable characters
            are designed to nurture social and emotional growth. Through every
            activity, students learn to understand themselves, connect with
            others, manage emotions, and make thoughtful choices—building
            confidence and leadership skills along the way.
          </p>
        </div>

        {/* Right: Image + Button */}
        <div className="flex flex-col items-end flex-shrink-0 relative">
          <div className="relative mb-6 -left-12">
            <img
              src="/imageForDesign/show-hat-magician--Streamline-Freehand.png"
              alt="Magic Hat"
              className="w-44 lg:w-52"
            />
            <img
              src="/imageForDesign/arrow.png"
              alt="Arrow"
              className="w-10 h-10 lg:w-14 lg:h-14 absolute -bottom-2 -left-12 z-10 rotate-45"
            />
          </div>

          <Link to="/login">
            <button className="bg-[#068F36] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition text-lg">
              Book your trial now! - It's Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA3;
