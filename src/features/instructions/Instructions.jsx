import React, { useEffect } from "react";
import { startStep0, startStep1, startStep2, startStep3 } from "../utils/steps";
import "./instructions.css";

export const Instructions = ({
  breatheInstructions,
  countdown,
  initialCircleState,
  initialCountdownState,
  initialTimeState,
  setBreatheInstructions,
  setCircle,
  setCircleTimeout,
  setCountdown,
  setDisabled,
  setTime,
  time
}) => {
  useEffect(() => {
    if (time.isActive) {
      if (!countdown.step0.ranOnce) {
        startStep0(setCountdown, setCircle, countdown, setCircleTimeout);
      } else {
        const { stepsCounter, step, repeatCount, cycleCount, instruction } = breatheInstructions;

        if (stepsCounter === 0 && step === 0) {
          startStep1(
            breatheInstructions,
            setBreatheInstructions,
            setCountdown,
            countdown,
            setCircle,
            setCircleTimeout,
            initialCircleState,
            instruction,
            stepsCounter,
            step
          );
        } else if (stepsCounter === 4 && step === 1) {
          startStep2(setCircle, setBreatheInstructions, setCountdown, setCircleTimeout);

          // Step 3
        } else if (stepsCounter === 7 && step === 2) {
          startStep3(setCircle, setCircleTimeout, setBreatheInstructions, setCountdown);

          // On repeat
        } else if (stepsCounter === 7 && step === 3 && repeatCount > cycleCount) {
          setBreatheInstructions({
            ...breatheInstructions,
            step: 0,
            stepsCounter: -1,
            instruction: "Repeat"
          });
          setCircle({
            circle0: { isVisible: false, class: "countdown__svg-0 hide-countdown" },
            circle1: initialCircleState.circle1,
            circle2: initialCircleState.circle2,
            circle3: initialCircleState.circle3
          });
          // Finish
        } else if (stepsCounter === 8 && step === 3 && repeatCount === cycleCount) {
          setCircle(initialCircleState);
          setBreatheInstructions({
            ...breatheInstructions,
            instruction: "Finished",
            step: 0,
            stepsCounter: 0,
            cycleCount: 0
          });
          setTime(initialTimeState);
          setCountdown(initialCountdownState);
          setDisabled(false);
        }
      }
    }
  }, [
    breatheInstructions,
    countdown,
    initialCircleState,
    initialCountdownState,
    initialTimeState,
    setBreatheInstructions,
    setCircle,
    setCircleTimeout,
    setCountdown,
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
