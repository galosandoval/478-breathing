import React from "react";
import "./countdown.css";

export const Countdown = ({ countdown, circle }) => {
  return (
    <div className="countdown">
      <svg className={circle.circle0.class}>
        <circle
          style={{
            animation: countdown.step0.isActive ? `countdown-0 3000ms linear` : "none"
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
            animation: countdown.step1.isActive ? `countdown-1 4000ms linear` : "none"
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
            animation: countdown.step2.isActive ? `countdown-2 7000ms 1 linear forwards` : "none"
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
            animation: countdown.step3.isActive ? `countdown-3 8000ms linear forwards` : "none"
          }}
          className="countdown__circle-3"
          r="165"
          cx="185"
          cy="198"
        ></circle>
      </svg>
    </div>
  );
};
