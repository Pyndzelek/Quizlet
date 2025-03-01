"use client";

import QuestionListCell from "./question-cell";
import { wholeQuiz } from "@/lib/types";
import QuestionsHeader from "./quiestions-header";
import { useState } from "react";

type QuestionsListProps = {
  quiz: wholeQuiz;
  type: "preview" | "result";
};

export default function QuestionsList({ quiz, type }: QuestionsListProps) {
  //state variables
  const [isShowingAnswers, setIsShowingAnswers] = useState(false);
  const [isShowingQuestions, setIsShowingQuestions] = useState(false);
  const handleShowAnswers = () => setIsShowingAnswers(!isShowingAnswers);
  const handleShowQuestions = () => setIsShowingQuestions(!isShowingQuestions);

  return (
    <>
      <QuestionsHeader
        onShowAnswers={handleShowAnswers}
        onShowQuestions={handleShowQuestions}
        isShowingAnswers={isShowingAnswers}
        isShowingQuestions={isShowingQuestions}
      />
      {isShowingQuestions && (
        <div className="space-y-6">
          {quiz.questions.map((question, index) => (
            <QuestionListCell
              type={type}
              key={index}
              question={question}
              isShowingAnswers={isShowingAnswers}
              numberOfQuestion={index + 1}
            />
          ))}
        </div>
      )}
    </>
  );
}
