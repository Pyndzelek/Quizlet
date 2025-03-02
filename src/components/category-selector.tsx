"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

const schoolCategories = [
  "Geography",
  "Mathematics",
  "Science",
  "History",
  "Literature",
  "Art",
  "Sports",
];
const generalCategories = [
  "General Knowledge",
  "Entertainment",
  "Technology",
  "Politics",
  "Animals",
  "Food",
  "Movies",
  "Books",
  "Music",
];

export default function CategorySelector({
  setSelectedCategory,
}: {
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div>
      <Label>Category</Label>
      <Select onValueChange={(value) => setSelectedCategory(value)}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>School</SelectLabel>
            {schoolCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>General</SelectLabel>
            {generalCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
