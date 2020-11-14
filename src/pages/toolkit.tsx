import React from "react";
import Markdown from "react-markdown/with-html";
import raw from "raw.macro";
import { usePageTitle } from "../hooks/use-page-title";
const markdown = raw("./toolkit.md");

const Toolkit = () => {
  usePageTitle("Toolkit");
  return (
    <div className="container">
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default Toolkit;
