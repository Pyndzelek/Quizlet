import { getWholeQuizById } from "@/actions/actions";
import QuestionsList from "@/components/quiestions-list";
import QuizHeader from "@/components/quiz-details/quiz-header";

const quiz = {
  title: "Web Development Fundamentals",
  category: "Technology",
  questions: [
    {
      id: 1,
      text: "What does CSS stand for?",
      answers: [
        "Cascading Style Sheets",
        "Computer Style System",
        "Creative Style Solution",
        "Centralized Styling Service",
      ],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: "Which HTML tag is used for paragraph?",
      answers: ["<p>", "<para>", "<paragraph>", "<text>"],
      correctAnswer: 0,
    },
    // Add more questions as needed
  ],
};

type QuizPageProps = {
  params: {
    id: string;
  };
};

export default async function QuizPage({ params }: QuizPageProps) {
  const id = params.id;

  const quiz = await getWholeQuizById(id);

  return (
    <>
      {/* Quiz Header */}
      <QuizHeader quiz={quiz.quiz} />

      {/* Questions List */}
      <QuestionsList quiz={quiz} />
    </>
  );
}
