"use client";
import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
const Review = () => {
  return (
    <div className="h-full W-6/12 relative">
      <MarkdownPreview
        source={"Review will be here"}
        style={{ fontSize: "30px", height: "100vh" }}
      />
    </div>
  );
};

export default Review;
