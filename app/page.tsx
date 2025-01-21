"use client";
import { useState } from "react";
import Editor from "./_components/Editor";
import Review from "./_components/Review";
export default function Home() {
  // const [code, setCode] = useState(" RAM RAM JI");
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "generating" | "generated">(
    "idle"
  );
  const isGenerating = state === "generating";
  const handleGenerateReview = async (code: string) => {
    try {
      setState("generating");
      const response = await fetch("http://localhost:3005/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      setReview(data.review);
    } catch (err) {
      alert("Something went wrong.Please try again later.");
      console.log(err);
    }
    setState("generated");
  };
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      {/* RAM RAM */}
      <Editor
        isGenerating={isGenerating}
        onGenerateReview={handleGenerateReview}
      />
      <Review isGenerating={isGenerating} review={review} />
    </div>
  );
}
