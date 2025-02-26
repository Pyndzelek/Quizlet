import { FaListOl } from "react-icons/fa";

export default function QuestionsHeader() {
  return (
    <div className="flex items-center gap-2 mb-4">
      <FaListOl className="text-2xl text-indigo-600" />
      <h2 className="text-2xl font-bold text-gray-800">Questions</h2>
    </div>
  );
}
