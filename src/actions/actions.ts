"use server";

import { QuizData, wholeQuiz } from "@/lib/types";
import prisma from "../lib/db";
import { redirect } from "next/navigation";
import { formSchema } from "@/lib/validations";

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
  const newQuiz = {
    ...quizData,
    category,
  };

  const validatedQuizObject = formSchema.safeParse(newQuiz);
  if (!validatedQuizObject.success) {
    return { message: "Invalid form data" };
  }

  try {
    const quiz = await prisma.quiz.create({
      data: {
        title: validatedQuizObject.data.title,
        category: validatedQuizObject.data.category,
        questions: {
          create: validatedQuizObject.data.questions.map((question) => ({
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

    redirect("/quiz/" + quiz.id);
  } catch (error) {
    throw error;
  }
}

export async function EditQuiz(
  quizData: QuizData,
  category: string,
  id: string
) {
  const newQuiz = {
    ...quizData,
    category,
  };

  const validatedQuizObject = formSchema.safeParse(newQuiz);
  if (!validatedQuizObject.success) {
    return { message: "Invalid form data" };
  }

  try {
    const quiz = await prisma.quiz.update({
      where: {
        id,
      },
      data: {
        title: validatedQuizObject.data.title,
        category: validatedQuizObject.data.category,
        questions: {
          deleteMany: {},
          create: validatedQuizObject.data.questions.map((question) => ({
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
    redirect("/quiz/" + quiz.id);
  } catch (error) {
    throw error;
  }
}

export async function deleteQuiz(id: string) {
  try {
    await prisma.quiz.delete({
      where: {
        id,
      },
    });
    redirect("/");
  } catch (error) {
    throw error;
  }
}
