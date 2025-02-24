import React from "react";
import { FaBrain } from "react-icons/fa";

export default function RandomQuestion() {
  return (
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 bg-indigo-100 rounded-xl transform rotate-6"></div>
        <div className="relative bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <FaBrain className="text-indigo-600 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold">Current Question</h3>
              <p className="text-gray-500">5/10</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Which programming language is known as the 'language of the web'?
          </h2>
          <div className="space-y-4">
            {["JavaScript", "Python", "Java", "C++"].map((option, index) => (
              <button
                key={index}
                className="w-full p-4 text-left rounded-lg border hover:border-indigo-300 hover:bg-indigo-50 transition"
              >
                {option}
              </button>
            ))}
          </div>
          <div className="mt-6 flex justify-between items-center">
            <span className="text-gray-500">Time remaining: 00:45</span>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Next Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
