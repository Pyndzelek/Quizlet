"use client";
import { useGameContext } from "@/lib/hooks";
import React from "react";
import QuestionsList from "./quiestions-list";
import { wholeQuiz } from "@/lib/types";
import { Separator } from "./ui/separator";
import CircularDiagram from "./circular-diagram";
import { Button } from "./ui/button";
import Link from "next/link";

type GameResultProps = {
  quiz: wholeQuiz;
};

export default function GameResult({ quiz }: GameResultProps) {
  const { resultScore, numberOfQuestions, resetQuiz } = useGameContext();

  const percentage = (resultScore / numberOfQuestions) * 100;
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-md shadow-lg mb-7 ">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Results</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Circular Progress Diagram */}
          <CircularDiagram percentage={percentage} />

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
      <div className="flex items-center gap-3 mb-7">
        <Button onClick={resetQuiz} variant={"secondary"}>
          Try again
        </Button>
        <Link href="/browse">
          <Button variant={"ghost"}>More quizes</Button>
        </Link>
      </div>

      <Separator className="mb-5" />
      <QuestionsList quiz={quiz} type="result" />
    </>
  );
}
