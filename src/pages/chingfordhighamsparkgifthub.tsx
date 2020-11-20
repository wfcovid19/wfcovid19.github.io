import React from "react";
import Markdown from "react-markdown/with-html";
import raw from "raw.macro";
import { usePageTitle } from "../hooks/use-page-title";
import "./chingfordhighamsparkgifthub.css";
const markdown = raw("./chingfordhighamsparkgifthub.md");

const ChingfordHighamsParkGiftHub = () => {
  usePageTitle("Chingford & Highams Park GiftHub");
  return (
    <div className="container">
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default ChingfordHighamsParkGiftHub;
