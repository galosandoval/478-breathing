import React, { useState } from "react";
import "./slider.css";

export const Slider = ({ breatheInstructions, setBreatheInstructions }) => {
  const [value, setValue] = useState(breatheInstructions.repeatCount);
  // console.log(breatheInstructions.)
  return (
    <div>
      <p>{value}x</p>
      <input
        type="range"
        min={1}
        max={4}
        value={value}
        className="thumb"
        onChange={(event) => {
          setValue(event.target.value);
          setBreatheInstructions((state) => ({ ...state, repeatCount: Number(event.target.value) }));
          console.log("breath isntructions", breatheInstructions);
        }}
      />
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
      </div>
    </div>
  );
};
