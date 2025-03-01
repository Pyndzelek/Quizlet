import { FaListOl } from "react-icons/fa";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Switch } from "./ui/switch";

type QuiestionsHeaderProps = {
  onShowQuestions: () => void;
  isShowingQuestions: boolean;
  onShowAnswers: () => void;
  isShowingAnswers: boolean;
};

export default function QuestionsHeader({
  onShowQuestions,
  isShowingQuestions,
  onShowAnswers,
  isShowingAnswers,
}: QuiestionsHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between",
        isShowingQuestions && "mb-4"
      )}
    >
      <div className="flex items-center gap-2">
        <FaListOl className="text-2xl text-indigo-600" />

        <h2 className="text-2xl font-bold text-gray-800">Questions</h2>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={onShowQuestions}
                className="text-sm flex items-center gap-1"
              >
                {!isShowingQuestions ? (
                  <IoMdEyeOff className="h-7 w-7 text-indigo-600" />
                ) : (
                  <IoMdEye className="h-7 w-7 text-indigo-600" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {isShowingQuestions ? (
                <p>Hide questions</p>
              ) : (
                <p>Show questions</p>
              )}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {isShowingQuestions && (
        <div className="flex items-center space-x-2">
          <Switch />
          <p>Show answes</p>
        </div>
      )}
    </div>
  );
}
