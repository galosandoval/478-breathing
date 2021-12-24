import React from "react";
import "./countdown.css";
import { CountdownStyles } from "./Countdown.styles";

export const Countdown = ({ countdown, circle }) => {
  const animation = (countdown, time) => `countdown-${countdown} ${time}ms linear forwards`;

  return (
    <CountdownStyles>
      <svg className={circle.circle0.class}>
        <circle
          style={{
            animation: countdown.step0.isActive ? animation(0, 3000) : "none"
          }}
          className="countdown__circle-0"
          r="84"
          cx="130"
          cy="135"
        ></circle>
      </svg>
      <svg className={circle.circle1.class}>
        <circle
          style={{
            animation: countdown.step1.isActive ? animation(1, 4000) : "none"
          }}
          className="countdown__circle-1"
          r="105"
          cx="130"
          cy="135"
        ></circle>
      </svg>
      <svg className={circle.circle2.class}>
        <circle
          style={{
            animation: countdown.step2.isActive ? animation(2, 7000) : "none"
          }}
          className="countdown__circle-2"
          r="135"
          cx="162"
          cy="169"
        ></circle>
      </svg>
      <svg className={circle.circle3.class}>
        <circle
          style={{
            animation: countdown.step3.isActive ? animation(3, 8000) : "none"
          }}
          className="countdown__circle-3"
          r="165"
          cx="185"
          cy="198"
        ></circle>
      </svg>
    </CountdownStyles>
  );
};
