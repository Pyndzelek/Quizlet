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
  const [isShowingAnswers, setIsShowingAnswers] = useState(false);
  const handleShowAnswers = () => setIsShowingAnswers(!isShowingAnswers);

  return (
    <>
      <QuestionsHeader onClick={handleShowAnswers} />
      <div className="space-y-6">
        {quiz.questions.map((question, index) => (
          <QuestionListCell
            type={type}
            key={index}
            question={question}
            isShowingAnswers={isShowingAnswers}
          />
        ))}
      </div>
    </>
  );
}
