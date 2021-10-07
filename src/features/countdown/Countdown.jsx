import React from "react";
import "./countdown.css";

export const Countdown = ({ countdown }) => {
  return (
    <div className="countdown">
      <svg className="countdown__svg-1">
        <circle
          style={{
            animation: countdown.step1.isActive
              ? `countdown-1 4000ms linear infinite forwards`
              : "none"
          }}
          className="countdown__circle-1"
          r="105"
          cx="130"
          cy="135"
        ></circle>
      </svg>
      <svg className="countdown__svg-2">
        <circle
          style={{
            animation: countdown.step2.isActive
              ? `countdown-2 7000ms linear infinite forwards`
              : "none"
          }}
          className="countdown__circle-2"
          r="135"
          cx="162"
          cy="169"
        ></circle>
      </svg>
      <svg className="countdown__svg-3">
        <circle
          style={{
            animation: countdown.step3.isActive
              ? `countdown-3 8000ms linear infinite forwards`
              : "none"
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
