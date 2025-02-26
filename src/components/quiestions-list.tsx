import QuestionListCell from "./question-cell";
import { wholeQuiz } from "@/lib/types";
import QuestionsHeader from "./quiestions-header";

type QuestionsListProps = {
  quiz: wholeQuiz;
  type: "preview" | "result";
};

export default function QuestionsList({ quiz, type }: QuestionsListProps) {
  return (
    <>
      <QuestionsHeader />
      <div className="space-y-6">
        {quiz.questions.map((question, index) => (
          <QuestionListCell type={type} key={index} question={question} />
        ))}
      </div>
    </>
  );
}
