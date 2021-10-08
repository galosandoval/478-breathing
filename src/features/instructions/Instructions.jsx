import React, { useEffect } from "react";
import "./instructions.css";

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
    if (!countdown.step0.ranOnce && time.isActive) {
      // Step 0
      setCountdown((state) => ({
        ...state,
        step0: { ...state.step0, isActive: true }
      }));
      setTime((state) => ({ ...state, isActive: false }));
      setTimeout(() => {
        setCircle((state) => ({
          ...state,
          circle0: {
            ...state.circle0,
            isVisible: false,
            class: "countdown__svg-0 hide-countdown"
          }
        }));
        setCountdown((state) => ({ ...state, step0: { ...state.step0, ranOnce: true } }));
        setTime((state) => ({ ...state, isActive: true }));
      }, 3000);
    } else if (time.isActive) {
      const { stepsCounter, step, repeatCount, cycleCount } = breatheInstructions;

      // Step 1
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
        }, 3700);
        setBreatheInstructions({
          ...breatheInstructions,
          step: 1,
          cycleCount: (breatheInstructions.cycleCount += 1),
          instruction: "Breathe In"
        });
        setCountdown({
          ...countdown,
          step0: { ...countdown.step0, isActive: false },
          step1: { isActive: true },
          step3: { isActive: false }
        });
        if (breatheInstructions.instruction === "Repeat") {
          setBreatheInstructions({ ...breatheInstructions, instruction: "Breathe In", step: 1 });
          setCircle((state) => ({ ...state, circle3: initialCircleState.circle3 }));
        }
      }
      // Step 2
      else if (stepsCounter === 4 && step === 1) {
        setTimeout(() => {
          setCircle((state) => ({
            ...state,
            circle2: {
              ...state.circle2,
              isVisible: false,
              class: "countdown__svg-2 hide-countdown"
            }
          }));
        }, 6400);
        setBreatheInstructions({
          ...breatheInstructions,
          step: 2,
          instruction: "Hold Your Breath",
          stepsCounter: 0
        });
        setCountdown({
          ...countdown,
          step1: { isActive: false },
          step2: { isActive: true }
        });
        // Step 3
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
        }, 7100);
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
        setCountdown({
          ...countdown,
          step3: { isActive: false },
          step0: { ranOnce: false, isActive: false }
        });
        setDisabled(false);
      }
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
