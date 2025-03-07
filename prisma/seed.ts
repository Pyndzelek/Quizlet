import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create a quiz with questions and answers
  const quiz1 = await prisma.quiz.create({
    data: {
      title: "General Knowledge Quiz",
      category: "General Knowledge",
      questions: {
        create: [
          {
            text: "What is the capital of France?",
            answers: {
              create: [
                { text: "Paris", isCorrect: true },
                { text: "London", isCorrect: false },
                { text: "Berlin", isCorrect: false },
                { text: "Madrid", isCorrect: false },
              ],
            },
          },
          {
            text: "Which planet is known as the Red Planet?",
            answers: {
              create: [
                { text: "Earth", isCorrect: false },
                { text: "Mars", isCorrect: true },
                { text: "Jupiter", isCorrect: false },
                { text: "Venus", isCorrect: false },
              ],
            },
          },
          {
            text: "Who wrote 'To Kill a Mockingbird'?",
            answers: {
              create: [
                { text: "Harper Lee", isCorrect: true },
                { text: "Mark Twain", isCorrect: false },
                { text: "Jane Austen", isCorrect: false },
                { text: "F. Scott Fitzgerald", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  // Create the second quiz: Math Quiz
  const quiz2 = await prisma.quiz.create({
    data: {
      title: "Math Quiz",
      category: "Mathematics",
      questions: {
        create: [
          {
            text: "What is 5 + 7?",
            answers: {
              create: [
                { text: "11", isCorrect: false },
                { text: "12", isCorrect: true },
                { text: "13", isCorrect: false },
                { text: "14", isCorrect: false },
              ],
            },
          },
          {
            text: "What is the square root of 64?",
            answers: {
              create: [
                { text: "6", isCorrect: false },
                { text: "7", isCorrect: false },
                { text: "8", isCorrect: true },
                { text: "9", isCorrect: false },
              ],
            },
          },
          {
            text: "What is 3 x 9?",
            answers: {
              create: [
                { text: "26", isCorrect: false },
                { text: "27", isCorrect: true },
                { text: "28", isCorrect: false },
                { text: "29", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  const quiz3 = await prisma.quiz.create({
    data: {
      title: "Capitals of the World Quiz",
      category: "Geography",
      questions: {
        create: [
          {
            text: "What is the capital of Canada?",
            answers: {
              create: [
                { text: "Ottawa", isCorrect: true },
                { text: "Toronto", isCorrect: false },
                { text: "Vancouver", isCorrect: false },
                { text: "Montreal", isCorrect: false },
              ],
            },
          },
          {
            text: "What is the capital of Australia?",
            answers: {
              create: [
                { text: "Canberra", isCorrect: true },
                { text: "Sydney", isCorrect: false },
                { text: "Melbourne", isCorrect: false },
                { text: "Perth", isCorrect: false },
              ],
            },
          },
          {
            text: "What is the capital of Japan?",
            answers: {
              create: [
                { text: "Tokyo", isCorrect: true },
                { text: "Osaka", isCorrect: false },
                { text: "Kyoto", isCorrect: false },
                { text: "Hiroshima", isCorrect: false },
              ],
            },
          },
          {
            text: "What is the capital of Brazil?",
            answers: {
              create: [
                { text: "Brasília", isCorrect: true },
                { text: "Rio de Janeiro", isCorrect: false },
                { text: "São Paulo", isCorrect: false },
                { text: "Salvador", isCorrect: false },
              ],
            },
          },
          {
            text: "What is the capital of South Africa?",
            answers: {
              create: [
                { text: "Pretoria", isCorrect: true },
                { text: "Cape Town", isCorrect: false },
                { text: "Johannesburg", isCorrect: false },
                { text: "Durban", isCorrect: false },
              ],
            },
          },
        ],
      },
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
