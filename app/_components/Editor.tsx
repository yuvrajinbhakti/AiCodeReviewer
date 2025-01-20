"use client";
import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = () => {
  return (
    <div className="h-full W-6/12 relative">
      <ReactCodeMirror
        minHeight="100vh"
        value=" Hello World! "
        onChange={() => {}}
        theme={"dark"}
        extensions={[javascript()]}
        style={{ fontSize: "30px" }}
      />
    </div>
  );
};

export default Editor;
