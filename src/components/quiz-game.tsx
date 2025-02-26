"use client";

import { Progress } from "./ui/progress";
import Container from "./container";
import { wholeQuiz } from "@/lib/types";
import QuestionGameCell from "./question-game-cell";
import { useGameContext } from "@/lib/hooks";

type QuizGameProps = {
  quiz: wholeQuiz;
};

export default function QuizGame() {
  const { quiz, numberOfQuestions, progressValue } = useGameContext();
  return (
    <>
      <div className="w-[300px] mx-auto mt-5 -mb-1">
        <Progress value={progressValue} max={numberOfQuestions} />
      </div>
      <Container>
        <QuestionGameCell question={quiz.questions[1]} />
      </Container>
    </>
  );
}
