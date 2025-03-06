"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormEvent, useEffect, useState } from "react";
import CategorySelector from "./category-selector";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { IoTrashBin } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { createNewQuiz, EditQuiz } from "@/actions/actions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, formType } from "@/lib/validations";
import { wholeQuiz } from "@/lib/types";

type NewQuizFormProps = {
  actionType: "add" | "edit";
  quizData?: wholeQuiz;
  quizId?: string;
};

export default function NewQuizForm({
  actionType,
  quizData,
  quizId,
}: NewQuizFormProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryError, setCategoryError] = useState<
    null | "Category is required"
  >(null);

  if (actionType === "edit" && !quizData) {
    return <div>Not Found Quiz</div>;
  }
  if (actionType === "edit" && !quizId) {
    return <div>Not Found Quiz</div>;
  }

  useEffect(() => {
    if (actionType === "edit" && quizData) {
      setSelectedCategory(quizData.quiz.category);
    }
  }, []);

  const {
    register,
    trigger,
    getValues,
    control,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues:
      actionType === "edit"
        ? quizData
          ? {
              title: quizData.quiz.title,
              category: quizData.quiz.category,
              questions: quizData.questions.map((question) => ({
                question: question.question.text,
                answer1: question.answers[0].text as string,
                answer2: question.answers[1].text as string,
                answer3: question.answers[2].text as string,
                answer4: question.answers[3].text as string,
              })),
            }
          : {
              title: "",
              category: "",
              questions: [
                {
                  question: "",
                  answer1: "",
                  answer2: "",
                  answer3: "",
                  answer4: "",
                },
              ],
            }
        : {
            title: "",
            category: "",
            questions: [
              {
                question: "",
                answer1: "",
                answer2: "",
                answer3: "",
                answer4: "",
              },
            ],
          },
    reValidateMode: "onChange",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission behavior

    // validation
    const validation = await trigger();
    if (!selectedCategory) {
      setCategoryError("Category is required");
    } else {
      setCategoryError(null);
    }
    if (!validation || !selectedCategory) return;

    const data = getValues();
    const quizData = {
      title: data.title,
      questions: data.questions,
    };
    if (actionType === "edit" && quizId) {
      const updatedQuiz = await EditQuiz(quizData, selectedCategory, quizId);
    } else if (actionType === "add") {
      const newQuiz = await createNewQuiz(quizData, selectedCategory);
    }

    // Optionally, you can reset the form after successful submission
    // reset();
  };

  return (
    <form className="flex flex-col space-y-5 " onSubmit={onSubmit}>
      <div className="space-y-0">
        <Label htmlFor="title">Title</Label>
        <Input id="title" placeholder="My quiz" {...register("title")} />
        {errors.title && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-0">
        <CategorySelector setSelectedCategory={setSelectedCategory} />
        {categoryError && (
          <p className="text-red-500 text-sm -mt-4">{categoryError}</p>
        )}
      </div>

      {/* Question container */}
      {fields.map((field, index) => (
        <section key={field.id} className="border-2 p-4 pt-2 rounded-md">
          <div className="flex justify-between">
            <div className="space-y-1 w-full">
              <Label htmlFor={`question${index}`} className="text-lg">
                Question {index + 1}
              </Label>
              <Input
                id={`question${index}`}
                placeholder="What is the capital of France?"
                {...register(`questions.${index}.question`)}
              />
              {errors.questions?.[index]?.question && (
                <p className="text-red-500 text-sm">
                  {errors.questions[index].question.message}
                </p>
              )}
            </div>
            {index === 0 ? null : (
              <button
                type="button"
                onClick={() => {
                  remove(index);
                }}
                className="mb-auto pt-1"
              >
                <IoTrashBin className="text-indigo-600 hover:text-indigo-500" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3">
            <div>
              <Label htmlFor={`q${index}a1`}>
                Answer A -{" "}
                <span className="text-green-600">CORRECT ANSWER</span>
              </Label>
              <Input
                id={`q${index}a1`}
                {...register(`questions.${index}.answer1`)}
              />
              {errors.questions?.[index]?.answer1 && (
                <p className="text-red-500 text-sm">
                  {errors.questions[index].answer1.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor={`q${index}a2`}>Answer B</Label>
              <Input
                id={`q${index}a2`}
                {...register(`questions.${index}.answer2`)}
              />
              {errors.questions?.[index]?.answer2 && (
                <p className="text-red-500 text-sm">
                  {errors.questions[index].answer2.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor={`q${index}a3`}>Answer C</Label>
              <Input
                id={`q${index}a3`}
                {...register(`questions.${index}.answer3`)}
              />
              {errors.questions?.[index]?.answer3 && (
                <p className="text-red-500 text-sm">
                  {errors.questions[index].answer3.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor={`q${index}a4`}>Answer D</Label>
              <Input
                id={`q${index}a4`}
                {...register(`questions.${index}.answer4`)}
              />
              {errors.questions?.[index]?.answer4 && (
                <p className="text-red-500 text-sm">
                  {errors.questions[index].answer4.message}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Button to add a new question */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              size="icon"
              className="mx-auto bg-indigo-500 text-white px-4 py-2 rounded-full"
              type="button"
              onClick={() => {
                append({
                  question: "",
                  answer1: "",
                  answer2: "",
                  answer3: "",
                  answer4: "",
                });
              }}
            >
              <FaPlus className="text-white" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add question</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <Button variant={"outline"} className="mx-auto">
        {actionType === "edit" ? "Update Quiz" : "Create Quiz"}
      </Button>
    </form>
  );
}
