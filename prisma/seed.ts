import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // Create a quiz with questions and answers
  const quiz = await prisma.quiz.create({
    data: {
      title: "General Knowledge Quiz",
      category: "Geography",
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
