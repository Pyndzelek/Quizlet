import { FaListOl } from "react-icons/fa";
import { Button } from "./ui/button";

export default function QuestionsHeader() {
  return (
    <div className="flex items-center justify-between  mb-4">
      <div className="flex items-center gap-2">
        <FaListOl className="text-2xl text-indigo-600" />

        <h2 className="text-2xl font-bold text-gray-800">Questions</h2>
      </div>
      <Button variant={"secondary"}>Show correct answers</Button>
    </div>
  );
}
