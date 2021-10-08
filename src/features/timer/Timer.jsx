import React, { useEffect } from "react";
import "./timer.css";

export const Timer = ({
  breatheInstructions,
  countdown,
  initialCircleState,
  initialCountdownState,
  initialInstructionState,
  initialTimeState,
  setBreatheInstructions,
  setCircle,
  setCountDown,
  setDisabled,
  setTime,
  circleTimeout,
  time
}) => {
  const handleClick = (event) => {
    const { name } = event.target;
    if (name === "start") {
      setTime({ ...time, isActive: true });
      setBreatheInstructions({ ...breatheInstructions, instruction: "Empty Your Lungs" });
      setDisabled(true);
    } else if (name === "cancel") {
      setTime(initialTimeState);
      setCountDown(initialCountdownState);
      setBreatheInstructions(initialInstructionState);
      setDisabled(false);
      setCircle(initialCircleState);
      console.log("circleTimeout", circleTimeout);
      clearTimeout(circleTimeout);
    }
  };

  useEffect(() => {
    let intervalId;
    if (time.isActive && countdown.step0.ranOnce) {
      intervalId = setInterval(() => {
        const secondCounter = time.counter % 60;
        const minuteCounter = Math.floor(time.counter / 60);

        setBreatheInstructions({
          ...breatheInstructions,
          stepsCounter: (breatheInstructions.stepsCounter += 1)
        });

        setTime({
          ...time,
          minutes: minuteCounter,
          seconds: secondCounter,
          counter: (time.counter += 1)
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, setTime, breatheInstructions, setBreatheInstructions, countdown.step0.ranOnce]);
  return (
    <div className="timer">
      {time.minutes}: {time.seconds < 10 ? "0" + time.seconds : time.seconds}
      <div className="timer__button-container">
        {time.isActive || countdown.step0.ranOnce ? (
          <button className="timer__button button" name="cancel" onClick={handleClick}>
            Cancel
          </button>
        ) : (
          <button className="timer__button button" name="start" onClick={handleClick}>
            Start
          </button>
        )}
      </div>
    </div>
  );
};
