import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/container";
import QuizCell from "@/components/quiz-cell";
import Link from "next/link";
import prisma from "@/lib/db";
import { Button } from "@/components/ui/button";

export default async function BrowsePage() {
  const quizes = await prisma.quiz.findMany();

  return (
    <>
      <Carousel
        className="w-[500px] mx-auto"
        opts={{
          align: "start",
        }}
      >
        <CarouselContent>
          {quizes.map((quiz) => (
            <CarouselItem key={quiz.id}>
              <Container>
                <Link href={`/quiz/${quiz.id}`}>
                  <QuizCell quiz={quiz} />
                </Link>
              </Container>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-20">
        <Link href="/new-quiz">
          <Button>New quiz</Button>
        </Link>
      </div>
    </>
  );
}
