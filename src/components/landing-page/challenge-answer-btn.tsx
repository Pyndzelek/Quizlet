"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

export default function ChallengeAnswerBtn({
  id,
  children,
}: {
  id: number;
  children: React.ReactNode;
}) {
  const [isClicked, setisClicked] = useState(false);
  const classNameElement = isClicked
    ? id === 2
      ? "text-green-600 bg-green-100 border-green-500 hover:bg-green-100 hover:border-green-500"
      : "text-red-600 bg-red-100 border-red-500 hover:bg-red-100 hover:border-red-500"
    : " ";

  const handleClick = () => {
    setisClicked(true);
    setTimeout(() => setisClicked(false), 800);
  };

  return (
    <button
      key={id}
      className={`w-full p-4 text-left rounded-lg border hover:border-indigo-300 hover:bg-indigo-50 transition-colors duration-200 ${classNameElement}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
