"use client";

import { Progress } from "./ui/progress";
import Container from "./container";
import { wholeQuiz } from "@/lib/types";
import QuestionGameCell from "./question-game-cell";
import { useGameContext } from "@/lib/hooks";
import GameResult from "./game-result";
import { cn } from "@/lib/utils";

type QuizGameProps = {
  quiz: wholeQuiz;
};

export default function QuizGame() {
  const {
    quiz,
    currentQuestion,
    numberOfQuestions,
    progressValue,
    isShowingResults,
  } = useGameContext();
  return (
    <>
      <div
        className={cn(
          "w-[300px] mx-auto mt-8 -mb-1",
          isShowingResults && "hidden mt-0"
        )}
      >
        <Progress
          value={isShowingResults ? 100 : progressValue}
          max={numberOfQuestions}
        />
      </div>
      <Container>
        {isShowingResults ? (
          <GameResult quiz={quiz} />
        ) : (
          <QuestionGameCell question={quiz.questions[currentQuestion]} />
        )}
      </Container>
    </>
  );
}
