import { FaListOl, FaQuestionCircle } from "react-icons/fa";
import Container from "./container";
import QuestionCell from "./question-list-cell";

type QuestionsListProps = {
  quiz: {
    questions: {
      id: string;
      text: string;
      answers: string[];
      correctAnswer: string;
    }[];
  };
};

export default function QuestionsList({ quiz }: QuestionsListProps) {
  return (
    <Container>
      <QuestionsHeader />
      <div className="space-y-6">
        {quiz.questions.map((question, index) => (
          <QuestionCell key={index} question={question} />
        ))}
      </div>
    </Container>
  );
}

function QuestionsHeader() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <FaListOl className="text-2xl text-indigo-600" />
      <h2 className="text-2xl font-bold text-gray-800">Questions</h2>
    </div>
  );
}
