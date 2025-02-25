import React from "react";

type AnswerCellProps = {
  text: string;
  correctAnswer: string;
};

export default function AnswerCell({ text, correctAnswer }: AnswerCellProps) {
  return (
    <div
      className={`p-3 rounded-lg ${
        text === correctAnswer
          ? "bg-green-100 border-green-500"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      {text}
      {text === correctAnswer && (
        <span className="text-green-600 ml-2">✓ Correct Answer</span>
      )}
    </div>
  );
}
