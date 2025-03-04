"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import CategorySelector from "./category-selector";
import { useFieldArray, useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { IoTrashBin } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { createNewQuiz } from "@/actions/actions";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export default function NewQuizForm() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const {
    register,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
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
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "questions",
  });

  return (
    <form
      className="flex flex-col space-y-5"
      action={async () => {
        const data = getValues();
        const quizData = {
          title: data.title,
          questions: data.questions,
        };
        const result = await createNewQuiz(quizData, selectedCategory);
      }}
    >
      <div className="space-y-0">
        <Label htmlFor="title">Title</Label>
        <Input
          required
          id="title"
          placeholder="My quiz"
          {...register("title")}
        />
      </div>

      <CategorySelector setSelectedCategory={setSelectedCategory} />

      {/* Question container */}
      {fields.map((field, index) => (
        <section key={field.id} className="border-2 p-4 pt-2 rounded-md">
          <div className="flex justify-between">
            <div className="space-y-1 w-full">
              <Label htmlFor={`question${index}`} className="text-lg">
                Question {index + 1}
              </Label>
              <Input
                required
                id={`question${index}`}
                placeholder="What is the capital of France?"
                {...register(`questions.${index}.question`)}
              />
            </div>
            <button
              type="button"
              onClick={() => {
                remove(index);
              }}
              className="mb-auto pt-1"
            >
              <IoTrashBin className="text-indigo-600 hover:text-indigo-500" />
            </button>
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
            </div>
            <div>
              <Label htmlFor={`q${index}a2`}>Answer B</Label>
              <Input
                id={`q${index}a2`}
                {...register(`questions.${index}.answer2`)}
              />
            </div>
            <div>
              <Label htmlFor={`q${index}a3`}>Answer C</Label>
              <Input
                id={`q${index}a3`}
                {...register(`questions.${index}.answer3`)}
              />
            </div>
            <div>
              <Label htmlFor={`q${index}a4`}>Answer D</Label>
              <Input
                id={`q${index}a4`}
                {...register(`questions.${index}.answer4`)}
              />
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

      <Button type="submit" variant={"outline"} className="mx-auto">
        Create Quiz
      </Button>
    </form>
  );
}

//qNaM - question N answer M
