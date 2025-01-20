"use client";
import { useState } from "react";
import Editor from "./_components/Editor";
import Review from "./_components/Review";
export default function Home() {
  // const [code, setCode] = useState(" RAM RAM JI");
  const [review, setReview] = useState("Review will be here");
  const handleGenerateReview = (code: string) => {
    alert("Review will be generated here");
  };
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      {/* RAM RAM */}
      <Editor onGenerateReview={handleGenerateReview} />
      <Review review={review} />
    </div>
  );
}
