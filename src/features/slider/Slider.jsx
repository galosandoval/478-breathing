import React, { useState } from "react";
import "./slider.css";

export const Slider = ({ breatheInstructions, setBreatheInstructions }) => {
  const [value, setValue] = useState(1);

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
          setBreatheInstructions({ ...breatheInstructions, repeatCount: event.target.value });
        }}
      />
      <div className="slider">
        <div className="slider__track" />
        <div className="slider__range" />
      </div>
    </div>
  );
};
