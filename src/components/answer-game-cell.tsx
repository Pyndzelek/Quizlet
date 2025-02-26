"use client";
import { AnswerEssentials } from "@/lib/types";
import { Button } from "./ui/button";
import { useGameContext } from "@/lib/hooks";

type AnswerCellProps = {
  answer: AnswerEssentials;
};

export default function AnswerGameCell({ answer }: AnswerCellProps) {
  const { handleOnAnswerButtonClick } = useGameContext();

  return (
    <Button
      variant={"secondary"}
      onClick={() => handleOnAnswerButtonClick(answer.id)}
    >
      {answer.text}
    </Button>
  );
}
