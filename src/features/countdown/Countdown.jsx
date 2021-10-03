import React from "react";
import "./countdown.css";

export const Countdown = ({ countdown }) => {
  
  console.log("countdown", countdown);
  return (
    <div className="countdown">
      <svg className="countdown__svg-1">
        {/* animation: countdown-1 4s linear infinite forwards;  */}
        <circle className="countdown__circle-1" r="110" cx="120" cy="120"></circle>
      </svg>
      <svg className="countdown__svg-2">
        {/* animation: countdown-2 7s linear infinite forwards; */}
        <circle className="countdown__circle-2" r="120" cx="130" cy="128"></circle>
      </svg>
      <svg className="countdown__svg-3">
        {/* animation: countdown-3 8s linear infinite forwards; */}
        <circle className="countdown__circle-3" r="130" cx="133" cy="132"></circle>
      </svg>
      {/* <div className="countdown">{countdown.step1}</div>
      <div className="countdown">{countdown.step2}</div>
      <div className="countdown">{countdown.step3}</div> */}
    </div>
  );
};
