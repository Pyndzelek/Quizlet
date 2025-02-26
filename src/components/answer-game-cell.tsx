"use client";
import { AnswerEssentials } from "@/lib/types";
import { Button } from "./ui/button";
import { useGameContext } from "@/lib/hooks";

type AnswerCellProps = {
  answer: AnswerEssentials;
};

export default function AnswerGameCell({ answer }: AnswerCellProps) {
  const { setCurrentQuestion } = useGameContext();

  const handleOnClick = () => {
    setCurrentQuestion((prev) => prev + 1);
  };
  return (
    <Button variant={"secondary"} onClick={handleOnClick}>
      {answer.text}
    </Button>
  );
}
