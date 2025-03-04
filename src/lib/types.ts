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

export type wholeQuiz = {
  quiz: QuizEssentials;
  questions: {
    question: QuestionEssentials;
    answers: AnswerEssentials[];
  }[];
};

export type QuizData = {
  title: string;
  questions: {
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
  }[];
};
