import { getWholeQuizById } from "@/actions/actions";
import QuizGame from "@/components/quiz-game";
import GameContextProvider from "@/context/game-context-provider";

export default async function QuizGamePage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const quiz = await getWholeQuizById(id);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <div className="min-h-[80vh] w-screen flex flex-col items-center justify-center">
      <GameContextProvider quiz={quiz}>
        <QuizGame />
      </GameContextProvider>
    </div>
  );
}
