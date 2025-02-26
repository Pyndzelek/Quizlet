import { getWholeQuizById } from "@/actions/actions";
import Container from "@/components/container";
import QuestionsList from "@/components/quiestions-list";
import QuizHeader from "@/components/quiz-details/quiz-header";

type QuizPageProps = {
  params: {
    id: string;
  };
};

export default async function QuizPage({ params }: QuizPageProps) {
  const id = await params.id;

  const quiz = await getWholeQuizById(id);

  return (
    <>
      {/* Quiz Header */}
      <QuizHeader quiz={quiz.quiz} />

      {/* Questions List */}
      <Container>
        <QuestionsList type="preview" quiz={quiz} />
      </Container>
    </>
  );
}
