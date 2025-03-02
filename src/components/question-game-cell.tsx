import { FaQuestionCircle } from "react-icons/fa";
import { AnswerEssentials, QuestionEssentials } from "@/lib/types";
import AnswerGameCell from "./answer-game-cell";

type QuestionListCellProps = {
  question: {
    question: QuestionEssentials;
    answers: AnswerEssentials[];
  };
};

export default function QuestionListCell({ question }: QuestionListCellProps) {
  return (
    <div className="rounded-lg flex flex-col py-3 relative">
      <div className="absolute flex items-center gap-2 mb-4 top-0 left-0 scale-95">
        <FaQuestionCircle className="text-indigo-600" />
        <h3 className="font-semibold">Question</h3>
      </div>

      <p className="text-xl text-gray-800 mb-4 font-bold mx-auto">
        {question.question.text}
      </p>

      {/* answers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.answers.map((answer) => (
          <AnswerGameCell answer={answer} key={answer.id} />
        ))}
      </div>
    </div>
  );
}
