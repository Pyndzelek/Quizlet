import { Quiz, Question, Answer } from "@prisma/client";

export type QuizEssentials = Omit<Quiz, "createdAt" | "updatedAt">;

export type QuestionEssentials = Omit<Question, "createdAt" | "updatedAt">;

export type AnswerEssentials = Omit<Answer, "createdAt" | "updatedAt">;
