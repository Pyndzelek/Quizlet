import { Quiz, Question, Answer } from "@prisma/client";

export type QuizEssentials = Omit<Quiz, "createdAt" | "updatedAt">;

export type QuestionEssentials = Omit<
  Question,
  "createdAt" | "updatedAt" | "quizId"
>;

export type AnswerEssentials = Omit<
  Answer,
  "createdAt" | "updatedAt" | "questionId"
>;

type QuestionWithAnswers = QuestionEssentials & {
  answers: AnswerEssentials[];
};

export type wholeQuiz = {
  quiz: QuizEssentials;
  questions: {
    question: QuestionEssentials;
    answers: AnswerEssentials[];
  }[];
};
