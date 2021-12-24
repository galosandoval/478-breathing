import React, { useState } from "react";
import { SelectStyles } from "./Select.styles";

export const Select = ({ breatheInstructions, setBreatheInstructions, disabled }) => {
  const [value, setValue] = useState(breatheInstructions.repeatCount);
  return (
    <SelectStyles className="select">
      <select
        disabled={disabled}
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
    </SelectStyles>
  );
};
