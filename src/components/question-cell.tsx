import { FaQuestionCircle } from "react-icons/fa";
import AnswerCell from "./annswer-cell";
import { AnswerEssentials, QuestionEssentials, wholeQuiz } from "@/lib/types";
import AnswerResultCell from "./answer-result-cell";

type QuestionListCellProps = {
  question: {
    question: QuestionEssentials;
    answers: AnswerEssentials[];
  };
  type: "preview" | "result";
  isShowingAnswers?: boolean;
};

export default function QuestionListCell({
  question,
  type,
  isShowingAnswers,
}: QuestionListCellProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition ">
      <div className="flex items-center gap-2 mb-4">
        <FaQuestionCircle className="text-indigo-600" />
        <h3 className="font-semibold">Question</h3>
      </div>

      <p className="text-lg text-gray-800 mb-4 font-bold">
        {question.question.text}
      </p>

      {/* answers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {type === "preview"
          ? question.answers.map((answer, answerIndex) => (
              <AnswerCell
                isShowingAnswers={isShowingAnswers}
                text={answer.text}
                isCorrect={answer.isCorrect}
                key={answerIndex}
              />
            ))
          : question.answers.map((answer) => (
              <AnswerResultCell answer={answer} key={answer.id} />
            ))}
      </div>
    </div>
  );
}
