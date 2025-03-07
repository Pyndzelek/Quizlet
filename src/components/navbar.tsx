import Link from "next/link";
import { FaBrain } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center space-x-2">
          <FaBrain className="text-3xl text-indigo-600" />
          <span className="text-2xl font-bold text-gray-800">Quizus</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/new-quiz"
            className="text-gray-600 hover:text-indigo-600"
          >
            New quiz
          </Link>
          <Link href="/browse" className="text-gray-600 hover:text-indigo-600">
            Categories
          </Link>
          <Link href={"/browse"}>
            <Button>Get started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
