import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

const CardItem: React.FC<{ title: string; icon: any }> = (props) => (
  <li className="card-item">
    <strong>
      <span className="card-icon">
        <Icon icon={props.icon} />
      </span>
      {props.title}
    </strong>
    {props.children}
  </li>
);

export default CardItem;
