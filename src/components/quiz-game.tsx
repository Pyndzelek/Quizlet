"use client";

import { Progress } from "./ui/progress";
import Container from "./container";
import { wholeQuiz } from "@/lib/types";
import QuestionGameCell from "./question-game-cell";
import { useGameContext } from "@/lib/hooks";
import GameResult from "./game-result";

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
      <div className="w-[300px] mx-auto mt-5 -mb-1">
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
