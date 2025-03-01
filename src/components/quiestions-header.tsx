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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { Button } from "./ui/button";
import { IoIosArrowDropdownCircle } from "react-icons/io";

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
      </div>

      {isShowingQuestions ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <IoIosArrowDropdownCircle className="h-7 w-7 text-indigo-600 hover:text-indigo-500" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-auto">
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem className="flex items-center gap-3 px-3">
              <Switch
                id="questions"
                checked={isShowingQuestions}
                onCheckedChange={onShowQuestions}
                aria-readonly
              />
              <label htmlFor="questions">Questions</label>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex items-center gap-3 px-3">
              <Switch
                id="answers"
                checked={isShowingAnswers}
                onCheckedChange={onShowAnswers}
              />
              <label htmlFor="answers">Answers</label>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={onShowQuestions}
                className="text-sm flex items-center gap-1"
              >
                <IoMdEyeOff className="h-7 w-7 text-indigo-600 hover:text-indigo-500" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Show questions</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
}
