import React from "react";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

import CountUp from "./CountUp";

const Card = ({
  title = "Card Title",
  iconName = "star outline",
  start = 200,
  end = 500,
  timer = 50,
}) => {
  return (
    <>
      <Icon
        icon={iconName}
        size="4x"
        style={{ margin: "5% 38%", color: "grey" }}
      />

      <p style={{ textAlign: "center", marginTop: "10px" }}>
        <b>{title}</b> <br />
        <span>
          <h3
            style={{
              color: "#555555",
              fontSize: "25px",
            }}
          >
            <CountUp start={start} end={end} timer={timer} />
          </h3>
        </span>
      </p>
    </>
  );
};

export default Card;
