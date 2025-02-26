import { getWholeQuizById } from "@/actions/actions";
import Container from "@/components/container";
import QuestionGameCell from "@/components/question-game-cell";
import { Progress } from "@/components/ui/progress";
import React from "react";

type QuizGamePageProps = {
  params: {
    id: string;
  };
};

export default async function QuizGamePage({ params }: QuizGamePageProps) {
  const { id } = await params;

  const quiz = await getWholeQuizById(id);

  return (
    <div className="h-[80vh] w-screen flex flex-col items-center justify-center">
      <div className="w-[300px] mx-auto mt-5 -mb-1">
        <Progress value={3} max={quiz.questions.length} />
      </div>
      <Container>
        <QuestionGameCell question={quiz.questions[0]} />
      </Container>
    </div>
  );
}
