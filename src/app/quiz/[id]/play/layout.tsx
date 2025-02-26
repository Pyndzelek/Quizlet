import { getWholeQuizById } from "@/actions/actions";
import GameContextProvider from "@/context/game-context-provider";
import { wholeQuiz } from "@/lib/types";
import React from "react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
