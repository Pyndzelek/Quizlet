import React from "react";

type AnswerCellProps = {
  text: string;
  isCorrect: boolean;
};

export default function AnswerCell({ text, isCorrect }: AnswerCellProps) {
  return (
    <div
      className={`p-3 rounded-lg ${
        isCorrect
          ? "bg-green-100 border-green-500"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      {text}
      {isCorrect && (
        <span className="text-green-600 ml-2">✓ Correct Answer</span>
      )}
    </div>
  );
}
