import React, { useEffect } from "react";

export const Timer = ({
  time,
  setTime,
  breatheInstructions,
  setBreatheInstructions,
  setAnimationPlayState
}) => {
  const handleClick = () => {
    setTime({ ...time, isActive: !time.isActive });
    setBreatheInstructions({ ...breatheInstructions, instruction: "Breathe In" });
    time.isActive ? setAnimationPlayState("paused") : setAnimationPlayState("running");
  };

  useEffect(() => {
    let intervalId;
    if (time.isActive) {
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

        console.log("step", breatheInstructions.step);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, setTime, breatheInstructions, setBreatheInstructions]);
  return (
    <div className="timer">
      {time.minutes}: {time.seconds < 10 ? "0" + time.seconds : time.seconds}
      {time.isActive ? (
        <button onClick={handleClick}>Pause</button>
      ) : (
        <button onClick={handleClick}>Start</button>
      )}
    </div>
  );
};
