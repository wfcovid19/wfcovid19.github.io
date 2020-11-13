import React from "react";
import Markdown from "react-markdown/with-html";
import raw from "raw.macro";
const markdown = raw("./stories.md");

const Stories = () => {
  return (
    <div className="container">
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default Stories;
