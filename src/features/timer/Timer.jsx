import React, { useEffect } from "react";

export const Timer = ({ time, setTime, breatheInstructions, setBreatheInstructions }) => {
  const handleClick = () => {
    setTime({ ...time, isActive: !time.isActive });
    setBreatheInstructions({ ...breatheInstructions, instruction: "Breathe In" });
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
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, setTime, breatheInstructions, setBreatheInstructions]);
  return (
    <div>
      {time.minutes}: {time.seconds < 10 ? "0" + time.seconds : time.seconds}
      <button onClick={handleClick}>Start</button>
    </div>
  );
};
