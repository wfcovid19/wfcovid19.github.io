import React from "react";
import Markdown from "react-markdown/with-html";
import { usePageTitle } from "../hooks/use-page-title";
import raw from "raw.macro";
const markdown = raw("./stories.md");

const Stories = () => {
  usePageTitle("Stories");
  return (
    <div className="container">
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default Stories;
