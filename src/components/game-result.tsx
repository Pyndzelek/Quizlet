"use client";
import { useGameContext } from "@/lib/hooks";
import React from "react";
import QuestionsList from "./quiestions-list";
import { wholeQuiz } from "@/lib/types";

type GameResultProps = {
  quiz: wholeQuiz;
};

export default function GameResult({ quiz }: GameResultProps) {
  const { resultScore, numberOfQuestions, progressValue } = useGameContext();

  const percentage = (resultScore / numberOfQuestions) * 100;
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-md shadow-lg mb-10 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Circular Progress Diagram */}
          <div className="relative w-48 h-48">
            <svg
              viewBox="0 0 36 36"
              className="absolute top-0 left-0 w-full h-full"
            >
              {/* Background Circle */}
              <path
                className="stroke-gray-300 stroke-2 fill-none"
                d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              {/* Progress Circle */}
              <path
                className="stroke-indigo-600 stroke-2 fill-none transition-all duration-1000 ease-in-out"
                strokeDasharray={`${percentage}, 100`}
                d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
                style={{ strokeDashoffset: 25 }} // Adjust as needed
              />
            </svg>
            {/* Percentage Text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-4xl font-bold text-gray-800">
                {Math.round(percentage)}%
              </span>
            </div>
          </div>

          {/* Result Text */}
          <div className="text-center md:text-left">
            <p className="text-xl text-gray-800">
              You answered{" "}
              <strong className="text-indigo-600">{resultScore}</strong> out of{" "}
              <strong className="text-indigo-600">{numberOfQuestions}</strong>{" "}
              questions correctly.
            </p>
          </div>
        </div>
      </div>
      <QuestionsList quiz={quiz} type="result" />
    </>
  );
}
