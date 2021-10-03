import React, { useState } from "react";

export const Slider = ({ breatheInstructions, setBreatheInstructions }) => {
  const [value, setValue] = useState(breatheInstructions.repeatCount);
  return (
    <div>
      <select
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          setBreatheInstructions((state) => ({
            ...state,
            repeatCount: Number(event.target.value)
          }));
        }}
        name="repeat"
        id="repeat"
      >
        <option value={1}>1x</option>
        <option value={2}>2x</option>
        <option value={3}>3x</option>
        <option value={4}>4x</option>
      </select>
    </div>
  );
};
