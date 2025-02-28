type AnswerCellProps = {
  text: string;
  isCorrect: boolean;
  isShowingAnswers?: boolean;
};

export default function AnswerCell({
  text,
  isCorrect,
  isShowingAnswers,
}: AnswerCellProps) {
  return (
    <div
      className={`p-3 rounded-lg cursor-default ${
        isCorrect && isShowingAnswers
          ? "bg-green-100 border-green-500"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      {text}
      {isCorrect && isShowingAnswers && (
        <span className="text-green-600 ml-2">✓ Correct Answer</span>
      )}
    </div>
  );
}
