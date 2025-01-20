"use client";
import React from "react";
// import CodeMirror from "@uiw/react-codemirror";
import ReactCodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { jsx } from "react/jsx-runtime";

const Editor = () => {
  return (
    <div>
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
