import Link from "next/link";

type QuizPageProps = {
  params: {
    id: string;
  };
};

export default function QuizPage({ params }: QuizPageProps) {
  const id = params.id;
  return (
    <div>
      <h2>quiz {id}</h2>
      <Link href={`/quiz/${id}/play`}>Start Quiz</Link>
    </div>
  );
}
