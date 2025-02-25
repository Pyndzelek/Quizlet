"use server";

import { wholeQuiz } from "@/lib/types";
import prisma from "../lib/db";

export async function getWholeQuizById(id: string) {
  const quizData = await prisma.quiz.findUnique({
    where: {
      id,
    },
    include: {
      questions: {
        include: {
          answers: true,
        },
      },
    },
  });

  if (!quizData) {
    throw new Error("Quiz not found");
  }

  const questions = quizData.questions.map((question) => ({
    question: {
      id: question.id,
      text: question.text,
    },
    answers: question.answers.map((answer) => ({
      id: answer.id,
      text: answer.text,
      isCorrect: answer.isCorrect,
    })),
  }));

  const wholeQuiz: wholeQuiz = {
    quiz: {
      id: quizData.id,
      title: quizData.title,
      category: quizData.category,
    },
    questions,
  };

  return wholeQuiz;
}
