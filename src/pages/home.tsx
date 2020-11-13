import React from "react";
import "./home.css";
import ContactInfo from "../contact-info";
import _ from "lodash";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown/with-html";
import { usePostcodeSearch } from "../hooks/use-postcode-search";
import raw from "raw.macro";
import Card from "../components/card";
const markdown = raw("./home.md");

const Home = () => {
  const search = usePostcodeSearch();
  const [postcode, setPostcode] = React.useState("");
  const [expanded, setExpanded] = React.useState(false);
  const ref = React.useRef<HTMLInputElement>(null);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    search.clear();
    setPostcode(e.target.value);
  };

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();
    search.perform(postcode);
  };

  const clearSearch = () => {
    search.clear();

    setPostcode("");
    (ref.current as any)?.focus();
  };

  const ward = search.result?.ward;

  return (
    <div className="home container">
      <p>
        Waltham Forest Mutual Aid is a network of local people who have come
        together to support each other and our neighbours during the pandemic.
      </p>
      <h2>Find your local group</h2>
      <div className="postcode-search">
        <form onSubmit={onSubmit}>
          <input
            ref={ref}
            placeholder="Enter your postcode..."
            type="text"
            name="postcode"
            onChange={onChange}
            value={postcode}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {ward && ward in ContactInfo && (
        <React.Fragment>
          <p className="result-description">
            Your local group is {ward} Mutual Aid.
            <small style={{ display: "block" }}>
              <button className="link" onClick={clearSearch}>
                Clear search
              </button>
            </small>
          </p>
          <Card ward={ward} details={(ContactInfo as any)[ward]} />
        </React.Fragment>
      )}
      {ward && !(ward in ContactInfo) && (
        <React.Fragment>
          <p className="result-description">
            Your ward is {ward}, but this is not in Waltham Forest. Visit{" "}
            <a
              href="https://covidmutualaid.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://covidmutualaid.org
            </a>{" "}
            to find mutual aid group in other parts of the UK.
            <small style={{ display: "block" }}>
              <button className="link" onClick={clearSearch}>
                Clear search
              </button>
            </small>
          </p>
        </React.Fragment>
      )}
      {search.error && (
        <p className="result-description">
          Could not find a local group for that postcode - are you sure you've
          typed it correctly?
          <small style={{ display: "block" }}>
            <button className="link" onClick={clearSearch}>
              Clear search
            </button>
          </small>
        </p>
      )}
      {!ward && (
        <React.Fragment>
          <p className="full-list-toggle">
            <button className="text" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Hide" : "See"} the full list{" "}
              <Icon icon={expanded ? "caret-up" : "caret-down"} />
            </button>
          </p>
          {expanded && (
            <div className="results">
              {_.map(ContactInfo, (details, ward) => (
                <Card key={ward} ward={ward} details={details} />
              ))}
            </div>
          )}
        </React.Fragment>
      )}
      <hr />
      <Markdown children={markdown} allowDangerousHtml={true} />
    </div>
  );
};

export default Home;
