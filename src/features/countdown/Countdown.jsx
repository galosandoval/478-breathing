import React from "react";
import "./countdown.css";

export const Countdown = ({ countdown, animationPlayState }) => {
  console.log("countdown", countdown);
  console.log(animationPlayState);
  return (
    <div className="countdown">
      <svg className="countdown__svg-1">
        <circle
          style={{
            animation: countdown.step1.isActive
              ? `countdown-1 4s linear infinite forwards ${animationPlayState}`
              : "none"
            // animationPlayState
          }}
          className="countdown__circle-1"
          r="110"
          cx="120"
          cy="120"
        ></circle>
      </svg>
      <svg className="countdown__svg-2">
        <circle
          style={{
            animation: countdown.step2.isActive
              ? `countdown-2 7s linear infinite forwards ${animationPlayState}`
              : "none"
          }}
          className="countdown__circle-2"
          r="120"
          cx="130"
          cy="128"
        ></circle>
      </svg>
      <svg className="countdown__svg-3">
        <circle
          style={{
            animation: countdown.step3.isActive
              ? `countdown-3 8s linear infinite forwards ${animationPlayState}`
              : "none"
          }}
          className="countdown__circle-3"
          r="130"
          cx="133"
          cy="132"
        ></circle>
      </svg>
    </div>
  );
};
