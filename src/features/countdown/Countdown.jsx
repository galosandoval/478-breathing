import React from "react";

export const Countdown = ({countdown}) => {
  return (
    <div className="countdown-container">
      <div className="countdown">{countdown.step1}</div>
      <div className="countdown">{countdown.step2}</div>
      <div className="countdown">{countdown.step3}</div>
    </div>
  );
};
