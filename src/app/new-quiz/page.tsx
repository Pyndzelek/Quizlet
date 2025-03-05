import Container from "@/components/container";
import NewQuizForm from "@/components/new-quiz-form";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function NewQuizPage() {
  return (
    <Container>
      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold text-gray-800">New Quiz</h1>
      </div>
      <Separator orientation="horizontal" className=" mt-3 mb-3" />

      <NewQuizForm actionType="add" />
    </Container>
  );
}
