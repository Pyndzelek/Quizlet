"use client";

import { wholeQuiz } from "@/lib/types";
import { sleep } from "@/lib/utils";
import { createContext, useState } from "react";

type GameContextProviderProps = {
  children: React.ReactNode;
  quiz: wholeQuiz;
};

type TGameContext = {
  quiz: wholeQuiz;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
  isShowingResults: boolean;
  numberOfQuestions: number;
  progressValue: number;
  handleOnAnswerButtonClick: (id: string) => Promise<void>;
  answers: string[];
  resultScore: number;
  resetQuiz: () => void;
};

export const GameContext = createContext<TGameContext | null>(null);

export default function GameContextProvider({
  children,
  quiz,
}: GameContextProviderProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isShowingResults, setIsShowingResults] = useState(false);
  const [answers, setAnswers] = useState<string[]>([]);

  //PROGRESS BAR
  const numberOfQuestions = quiz.questions.length;
  let progressValue = (currentQuestion / numberOfQuestions) * 100;

  //ONGOING GAME
  const handleOnAnswerButtonClick = async (id: string) => {
    if (answers.includes(id)) return;
    setAnswers((prev) => [...prev, id]);
    if (currentQuestion === numberOfQuestions - 1) {
      await sleep(100);
      setIsShowingResults(true);
      return;
    }
    setCurrentQuestion((prev) => prev + 1);
  };

  //result
  const resultScore = answers.filter((answer) =>
    quiz.questions.find((question) => {
      return question.answers.find((ans) => ans.id === answer && ans.isCorrect);
    })
  ).length;

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setIsShowingResults(false);
    setAnswers([]);
  };

  return (
    <GameContext.Provider
      value={{
        quiz,
        currentQuestion,
        setCurrentQuestion,
        isShowingResults,
        numberOfQuestions,
        progressValue,
        handleOnAnswerButtonClick,
        answers,
        resultScore,
        resetQuiz,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
