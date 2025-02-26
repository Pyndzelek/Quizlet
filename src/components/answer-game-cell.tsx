import { AnswerEssentials } from "@/lib/types";
import { Button } from "./ui/button";

type AnswerCellProps = {
  answer: AnswerEssentials;
};

export default function AnswerGameCell({ answer }: AnswerCellProps) {
  return <Button variant={"secondary"}>{answer.text}</Button>;
}
