"use client";
import { useGameContext } from "@/lib/hooks";
import React from "react";
import QuestionsList from "./quiestions-list";
import { wholeQuiz } from "@/lib/types";

type GameResultProps = {
  quiz: wholeQuiz;
};

export default function GameResult({ quiz }: GameResultProps) {
  const { answers, resultScore, numberOfQuestions } = useGameContext();
  return (
    <div>
      <h1>Results</h1>
      <p>
        You got {resultScore} out of {numberOfQuestions} questions right.
      </p>
      <QuestionsList quiz={quiz} type="result" />
    </div>
  );
}
