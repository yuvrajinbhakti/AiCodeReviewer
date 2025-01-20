"use client";
import { useState } from "react";
import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = ({
  onGenerateReview,
}: {
  onGenerateReview(code: string): void;
}) => {
  const [code, setCode] = useState("");
  //   const onChange = (value: string) => setCode(value);

  return (
    <div className="h-full w-6/12 relative">
      <button
        onClick={onGenerateReview}
        className="w-max absolute bottom-3 right-3 z-50 bg-green-500 p-2 rounded hover:bg-green-700 active: translate-y-1 disabled:pointer-events-none disabled:cursor-not-allowed"
      >
        Generate Review
      </button>
      <ReactCodeMirror
        minHeight="100vh"
        value={code}
        onChange={setCode}
        theme={"dark"}
        extensions={[javascript()]}
        style={{ fontSize: "30px" }}
      />
    </div>
  );
};

export default Editor;
