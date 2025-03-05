import { z } from "zod";

// ------ New quiz form ------
export const formSchema = z.object({
  title: z
    .string({ message: "Title is required" })
    .min(3, { message: "Title should be at least 3 characters long" })
    .trim(),
  category: z.string(),
  questions: z.array(
    z.object({
      question: z
        .string({ message: "Fill in this form" })
        .min(3, { message: "Question should be at least 3 characters long" })
        .trim(),
      answer1: z.string().min(1, { message: "Fill in this form" }).trim(),
      answer2: z.string().min(1, { message: "Fill in this form" }).trim(),
      answer3: z.string().min(1, { message: "Fill in this form" }).trim(),
      answer4: z.string().min(1, { message: "Fill in this form" }).trim(),
    })
  ),
});

export type formType = z.infer<typeof formSchema>;
