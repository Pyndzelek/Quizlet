import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Welcome() {
  return (
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
        Test Your Knowledge,
        <br />
        <span className="text-indigo-600">Master New Skills</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Challenge yourself with thousands of quizzes across various categories.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-indigo-700 transition flex items-center gap-2">
          Start Now <FaArrowRight />
        </button>
        <button className="w-[150px] md:h-[100px] border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg hover:bg-indigo-50 transition">
          Browse Categories
        </button>
      </div>
    </div>
  );
}
