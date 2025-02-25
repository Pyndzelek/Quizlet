import { FaQuestionCircle } from "react-icons/fa";
import AnswerCell from "./annswer-cell";

type QuestionListCellProps = {
  question: {
    id: string;
    text: string;
    answers: string[];
    correctAnswer: string;
  };
};

export default function QuestionCell({ question }: QuestionListCellProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-4">
        <FaQuestionCircle className="text-indigo-600" />
        <h3 className="font-semibold">Question</h3>
      </div>

      <p className="text-lg text-gray-800 mb-4 font-bold">{question.text}</p>

      {/* answers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((answer, answerIndex) => (
          <AnswerCell
            text={answer}
            correctAnswer={question.correctAnswer}
            key={answerIndex}
          />
        ))}
      </div>
    </div>
  );
}
