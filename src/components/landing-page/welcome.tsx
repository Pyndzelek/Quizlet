import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "../ui/button";

export default function Welcome() {
  return (
    <div className="md:w-1/2 mb-10 md:mb-0">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
        Test your knowledge,
        <br />
        <span className="text-indigo-600">master new skills</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Challenge yourself with thousands of quizzes across various categories.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          variant="default"
          size={"lg"}
          className="flex items-center gap-2 py-3"
        >
          Start Now <FaArrowRight />
        </Button>
        {/* <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg hover:bg-indigo-50 transition">
          Browse Categories
        </button> */}
        <Button
          variant="outline"
          size={"lg"}
          className="flex items-center gap-2 py-3 px-8"
        >
          Browse categories
        </Button>
      </div>
    </div>
  );
}
