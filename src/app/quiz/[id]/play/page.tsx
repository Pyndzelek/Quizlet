import React from "react";

type QuizGamePageProps = {
  params: {
    id: string;
  };
};

export default function QuizGamePage({ params }: QuizGamePageProps) {
  return (
    <div>
      <h1>Playing Quiz ID: {params.id}</h1>
    </div>
  );
}
