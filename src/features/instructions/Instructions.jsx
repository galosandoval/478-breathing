import React from "react";
import { useEffect } from "react";

// 4, 11, 19, 23, 30, 38, 42

export const Instructions = ({
  breatheInstructions,
  setBreatheInstructions,
  setTime,
  initialTimeState,
  time
}) => {
  useEffect(() => {
    if (time.isActive) {
      const { stepsCounter, step, repeatCount, cycleCount } = breatheInstructions;

      if (stepsCounter === 0 && step === 0) {
        setBreatheInstructions({
          ...breatheInstructions,
          step: 1,
          cycleCount: (breatheInstructions.cycleCount += 1)
        });
        if (breatheInstructions.instruction === "Repeat")
          setBreatheInstructions({ ...breatheInstructions, instruction: "Breathe In", step: 1 });
      } else if (stepsCounter === 4 && step === 1) {
        setBreatheInstructions({
          ...breatheInstructions,
          step: 2,
          instruction: "Hold Your Breathe",
          stepsCounter: 0
        });
      } else if (stepsCounter === 7 && step === 2) {
        setBreatheInstructions({
          ...breatheInstructions,
          step: 3,
          instruction: "Breathe Out",
          stepsCounter: 0
        });
      } else if (stepsCounter === 7 && step === 3 && repeatCount > cycleCount) {
        setBreatheInstructions({
          ...breatheInstructions,
          step: 0,
          stepsCounter: -1,
          instruction: "Repeat"
        });
      } else if (stepsCounter === 8 && step === 3 && repeatCount === cycleCount) {
        setBreatheInstructions({
          ...breatheInstructions,
          instruction: "End",
          step: 0,
          stepsCounter: 0,
          cycleCount: 0
        });
        setTime(initialTimeState);
      }
      console.log(
        "step",
        step,
        "stepsCounter:",
        stepsCounter,
        "cycleCount",
        cycleCount,
        "repeatCount",
        repeatCount
      );
    }
  }, [time, setBreatheInstructions, breatheInstructions, setTime, initialTimeState]);
  return <div>{breatheInstructions.instruction}</div>;
};
