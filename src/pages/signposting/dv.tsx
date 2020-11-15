import React from "react";
import Markdown from "react-markdown/with-html";
import { usePageTitle } from "../../hooks/use-page-title";
import raw from "raw.macro";
const markdown = raw("./dv.md");

const DV = () => {
  usePageTitle("Signposting: Domestic violence / intimate partner abuse");
  return (
    <div className="container">
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default DV;
