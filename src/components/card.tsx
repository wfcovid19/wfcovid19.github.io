import React from "react";
import "./card.css";
import CardItem from "./card-item";

const Card: React.FC<{ ward: string; details: any }> = (props) => {
  const { ward, details } = props;
  return (
    <div key={ward} className="card">
      <h3>{ward} Mutual Aid</h3>
      <div className="card-body">
        <ul>
          {"phone" in details && (
            <CardItem title="Phone" icon="phone">
              {details.phone}
            </CardItem>
          )}

          {"email" in details && (
            <CardItem title="Email" icon="envelope">
              <a href={`mailto:${details.email}`}>{details.email}</a>
            </CardItem>
          )}

          {"facebook" in details && (
            <CardItem title="Facebook" icon={["fab", "facebook-square"]}>
              <a href={details.facebook} target="_blank" rel="noreferrer">
                {details.facebook}
              </a>
            </CardItem>
          )}

          {"form" in details && (
            <CardItem title="Signup form" icon="clipboard-list">
              <a href={details.form} target="_blank" rel="noreferrer">
                {details.form}
              </a>
            </CardItem>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
