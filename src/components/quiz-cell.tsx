import { QuizEssentials } from "@/lib/types";
import { BiBrain } from "react-icons/bi";

type QuizcellProps = {
  quiz: QuizEssentials;
};

export default function QuizCell({ quiz }: QuizcellProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition ">
      <div className="flex items-center gap-2 mb-4">
        <BiBrain className="text-indigo-600" />
        <h3 className="font-semibold">Quiz</h3>
      </div>

      <p className="text-lg text-gray-800 mb-4 font-bold">{quiz.title}</p>
    </div>
  );
}
