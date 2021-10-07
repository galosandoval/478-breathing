import React, { useEffect } from "react";
import "./instructions.css";
// 4, 11, 19, 23, 30, 38, 42

export const Instructions = ({
  breatheInstructions,
  countdown,
  initialCircleState,
  initialTimeState,
  setBreatheInstructions,
  setCountdown,
  setCircle,
  setDisabled,
  setTime,
  time
}) => {
  useEffect(() => {
    if (time.isActive) {
      const { stepsCounter, step, repeatCount, cycleCount } = breatheInstructions;

      if (stepsCounter === 0 && step === 0) {
        setTimeout(() => {
          setCircle((state) => ({
            ...state,
            circle1: {
              ...state.circle1,
              isVisible: false,
              class: "countdown__svg-1 hide-countdown"
            }
          }));
        }, 3800);
        setBreatheInstructions({
          ...breatheInstructions,
          step: 1,
          cycleCount: (breatheInstructions.cycleCount += 1)
        });
        setCountdown({
          ...countdown,
          step1: { isActive: true },
          step3: { isActive: false }
        });
        if (breatheInstructions.instruction === "Repeat") {
          setBreatheInstructions({ ...breatheInstructions, instruction: "Breathe In", step: 1 });
        }
      }
      if (stepsCounter === 4 && step === 1) {
        setTimeout(() => {
          setCircle((state) => ({
            ...state,
            circle2: {
              ...state.circle2,
              isVisible: false,
              class: "countdown__svg-2 hide-countdown"
            }
          }));
        }, 6800);
        setBreatheInstructions({
          ...breatheInstructions,
          step: 2,
          instruction: "Hold Your Breathe",
          stepsCounter: 0
        });
        setCountdown({
          ...countdown,
          step1: { isActive: false },
          step2: { isActive: true }
        });
      } else if (stepsCounter === 7 && step === 2) {
        setTimeout(() => {
          setCircle((state) => ({
            ...state,
            circle3: {
              ...state.circle3,
              isVisible: false,
              class: "countdown__svg-3 hide-countdown"
            }
          }));
        }, 7300);
        setBreatheInstructions({
          ...breatheInstructions,
          step: 3,
          instruction: "Breathe Out",
          stepsCounter: 0
        });
        setCountdown({
          ...countdown,
          step2: { isActive: false },
          step3: { isActive: true }
        });
      } else if (stepsCounter === 7 && step === 3 && repeatCount > cycleCount) {
        setCircle(initialCircleState);
        setBreatheInstructions({
          ...breatheInstructions,
          step: 0,
          stepsCounter: -1,
          instruction: "Repeat"
        });
      } else if (stepsCounter === 8 && step === 3 && repeatCount === cycleCount) {
        setCircle(initialCircleState);
        setBreatheInstructions({
          ...breatheInstructions,
          instruction: "End",
          step: 0,
          stepsCounter: 0,
          cycleCount: 0
        });
        setTime(initialTimeState);
        setCountdown({
          ...countdown,
          step3: { isActive: false }
        });
        setDisabled(false);
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
  }, [
    breatheInstructions,
    countdown,
    initialCircleState,
    initialTimeState,
    setBreatheInstructions,
    setCountdown,
    setCircle,
    setDisabled,
    setTime,
    time
  ]);
  return (
    <div className="instructions">
      <p className="instructions__p">{breatheInstructions.instruction}</p>
    </div>
  );
};
