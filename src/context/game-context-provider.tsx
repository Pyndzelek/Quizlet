"use client";

import { wholeQuiz } from "@/lib/types";
import { createContext, useState } from "react";

type GameContextProviderProps = {
  children: React.ReactNode;
  quiz: wholeQuiz;
};

type TGameContext = {
  quiz: wholeQuiz;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  numberOfQuestions: number;
  progressValue: number;
};

export const GameContext = createContext<TGameContext | null>(null);

export default function GameContextProvider({
  children,
  quiz,
}: GameContextProviderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  if (!quiz) {
    console.log("No quiz");
    return null;
  }
  const numberOfQuestions = quiz.questions.length;
  const progressValue = (currentQuestion / numberOfQuestions) * 100;

  return (
    <GameContext.Provider
      value={{
        quiz,
        currentQuestion,
        setCurrentQuestion,
        numberOfQuestions,
        progressValue,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
