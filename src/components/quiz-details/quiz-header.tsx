import { FaEdit, FaShareAlt } from "react-icons/fa";
import { Button } from "../ui/button";
import Container from "../container";
import { QuizEssentials } from "@/lib/types";

type QuizHeaderProps = {
  quiz: QuizEssentials;
};

export default function QuizHeader({ quiz }: QuizHeaderProps) {
  return (
    <Container>
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            {quiz.title}
          </h1>
          <p className="text-indigo-600 font-medium">{quiz.category}</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <Button>
            <FaEdit /> Edit Quiz
          </Button>
          <Button variant="outline">
            <FaShareAlt /> Share
          </Button>
        </div>
      </header>
    </Container>
  );
}
