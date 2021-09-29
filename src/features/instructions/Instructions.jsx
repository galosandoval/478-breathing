import React from "react";

export const Instructions = ({ time, setTime }) => {
  console.log("time", time);
  const instructions = () => {
    if (time.seconds === 2) {
      console.log("Hey its 2");
    }
  };
  return <div>{instructions}</div>;
};
