import React from "react";
import "./home.css";
import ContactInfo from "../contact-info";
import _ from "lodash";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import Markdown from "react-markdown/with-html";
import { usePostcodeSearch } from "../hooks/use-postcode-search";
import { usePageTitle } from "../hooks/use-page-title";
import raw from "raw.macro";
import Card from "../components/card";
const markdown = raw("./home.md");

const Home = () => {
  usePageTitle("Find your local group");
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
      <h2 className="text-center">Find your local group</h2>
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
      <hr />
      <h2>
        Chingford Bells and Highams Park Sparkle Christmas Present fundraiser
      </h2>
      <div className="cols mt-2">
        <div className="col">
          <a href="/chingfordhighamsparkgifthub">
            <img
              src="/img/gifthub-banner.jpg"
              alt="Be a Secret Santa! Local children are facing Christmas without a present. You can help."
              style={{ width: "100%", marginBottom: "12px" }}
            />
          </a>
        </div>
        <div className="col">
          <div className="ml-2">
            <p>
              Chingford and Highams Park Mutual Aid are running{" "}
              <a href="/chingfordhighamsparkgifthub">a fundraiser</a> in
              association with Highams Park Food Hub, Peabody’s Pantry and
              Friday Hill Food rescue Hub. They’re aiming to raise £5000 in
              order to give 250 children a £20 gift voucher to spend in local
              shops.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
