import React from "react";
import { Button } from "../ui/button";
import ChallengeAnswerBtn from "./challenge-answer-btn";
import Link from "next/link";
import { BiBrain } from "react-icons/bi";

export default function RandomQuestion() {
  return (
    <div className="md:w-1/2 flex justify-center">
      <div className="relative w-full max-w-lg">
        <div className="absolute inset-0 bg-indigo-100 rounded-xl transform rotate-6"></div>
        <div className="relative bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
              <BiBrain className="text-indigo-600 text-xl" />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold">Capitals of the world</h3>
              <p className="text-gray-500">5/10</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            What is the capital of Sri Lanka?
          </h2>
          <div className="space-y-4">
            {["Ella", "Yala", "Sri Dźajawardanapura Kotte", "Butterfly"].map(
              (option, index) => (
                <ChallengeAnswerBtn id={index} key={index}>
                  {option}
                </ChallengeAnswerBtn>
              )
            )}
          </div>
          <div className="mt-6 flex">
            <Link
              href="/quiz/3c08dd89-3b4b-429b-8156-17b4d449d0ba"
              className="ml-auto"
            >
              <Button variant="outline" size="sm">
                More Questions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
