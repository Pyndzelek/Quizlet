import Link from "next/link";
import { FaBrain } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href={"/"} className="flex items-center space-x-2">
          <FaBrain className="text-3xl text-indigo-600" />
          <span className="text-2xl font-bold text-gray-800">Quizlet</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/browse" className="text-gray-600 hover:text-indigo-600">
            Categories
          </Link>
          <Link
            href="/browse"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
