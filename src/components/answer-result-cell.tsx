"use client";

import { useGameContext } from "@/lib/hooks";
import { AnswerEssentials } from "@/lib/types";

type AnswerCellProps = {
  answer: AnswerEssentials;
};

export default function AnswerResultCell({ answer }: AnswerCellProps) {
  const { text, isCorrect, id } = answer;
  const { answers } = useGameContext();
  const isSelected = Boolean(answers.find((ans) => ans === id));

  return (
    <div
      className={`p-3 rounded-lg cursor-default flex ${
        isSelected
          ? isCorrect
            ? "bg-green-100 border border-green-500"
            : "bg-red-100 border border-red-500 "
          : isCorrect
          ? "bg-indigo-100"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      {text}
      {isSelected && isCorrect && (
        <span className="text-green-600 ml-2">✓ Correct</span>
      )}
      {isSelected && !isCorrect && (
        <span className="text-red-600 ml-2">X Wrong</span>
      )}
      {!isSelected && isCorrect && (
        <span className="text-indigo-600 ml-auto pr-3">Correct answer</span>
      )}
    </div>
  );
}
