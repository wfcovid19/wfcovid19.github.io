import React from "react";
import Markdown from "react-markdown/with-html";
import { usePageTitle } from "../hooks/use-page-title";
import "./faq.css";
import raw from "raw.macro";
const markdown = raw("./faq.md");

const FAQ = () => {
  usePageTitle("FAQ");
  return (
    <div className="faq container">
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default FAQ;
