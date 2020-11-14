import React from "react";
import Markdown from "react-markdown/with-html";
import { usePageTitle } from "../hooks/use-page-title";
import raw from "raw.macro";
const markdown = raw("./signposting.md");

const Signposting = () => {
  usePageTitle("Signposting");
  return (
    <div className="container">
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default Signposting;
