import React from "react";
import Markdown from "react-markdown/with-html";
import raw from "raw.macro";
import { usePageTitle } from "../hooks/use-page-title";
import "./chingfordhighamsparkgifthub.css";
const markdown = raw("./chingfordhighamsparkgifthub.md");
const shops = raw("./shops.md");

const ChingfordHighamsParkGiftHub = () => {
  usePageTitle("Chingford & Highams Park GiftHub");

  return (
    <div className="gifthub container">
      <Markdown children={markdown} allowDangerousHtml={true} />
      <hr />
      <div className="anchor" id="shops">
        <Markdown children={shops} allowDangerousHtml={true} />
      </div>

      <hr />
      <h2>Voucher Terms and Conditions</h2>
      <p>
        <ol>
          <li>
            1 x voucher per child. One time, one transaction used in full.
          </li>
          <li>For children under 18 only.</li>
          <li>Voucher must be redeemed by 31 January 2021.</li>
          <li>
            Non transferrable - only to be redeemed in store or online with
            participating businesses.
          </li>
        </ol>
      </p>
    </div>
  );
};

export default ChingfordHighamsParkGiftHub;
