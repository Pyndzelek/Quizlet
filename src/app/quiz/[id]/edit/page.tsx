import { getWholeQuizById } from "@/actions/actions";
import Container from "@/components/container";
import NewQuizForm from "@/components/new-quiz-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import React from "react";
import Link from "next/link";

type NewQuizPageProps = {
  params: {
    id: string;
  };
};

export default async function NewQuizPage({ params }: NewQuizPageProps) {
  const { id } = params;
  const quizData = await getWholeQuizById(id);
  if (!quizData) {
    return <div>Not Found</div>;
  }
  return (
    <Container>
      <div className="flex justify-center relative">
        <Link href={`/quiz/${id}`} className="absolute left-0">
          <Button variant="outline">Cancel</Button>
        </Link>

        <h1 className="text-4xl font-semibold text-gray-800">Edit Quiz</h1>
      </div>
      <Separator orientation="horizontal" className=" mt-3 mb-3" />

      <NewQuizForm actionType="edit" quizData={quizData} quizId={id} />
    </Container>
  );
}
