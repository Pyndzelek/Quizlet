"use server";

import { QuizData, wholeQuiz } from "@/lib/types";
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

export async function createNewQuiz(quizData: QuizData, category: string) {
  const quiz = await prisma.quiz.create({
    data: {
      title: quizData.title,
      category: category,
      questions: {
        create: quizData.questions.map((question) => ({
          text: question.question,
          answers: {
            create: [
              { text: question.answer1, isCorrect: true },
              { text: question.answer2, isCorrect: false },
              { text: question.answer3, isCorrect: false },
              { text: question.answer4, isCorrect: false },
            ],
          },
        })),
      },
    },
  });

  return quiz;
}
