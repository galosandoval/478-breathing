import React, { useEffect } from "react";

export const Timer = ({ time, setTime, instructions, setInstructions }) => {
  const handleClick = () => {
    setTime({ ...time, isActive: !time.isActive });
  };

  useEffect(() => {
    let intervalId;
    if (time.isActive) {
      intervalId = setInterval(() => {
        const secondCounter = time.counter % 60;
        const minuteCounter = Math.floor(time.counter / 60);

        if (instructions.step === 0 && instructions.stepsCounter === 0) {
          setInstructions({ ...instructions, step: 1, instruction: "Breathe In" });
        } else if (instructions.step === 1 && instructions.stepsCounter === 4) {
          setInstructions({ ...instructions, step: 2, instruction: "Hold Your Breathe" });
        } else if (instructions.step === 2) {
        }
        setInstructions({ ...instructions, stepsCounter: (instructions.stepsCounter += 1) });

        setTime({
          ...time,
          minutes: minuteCounter,
          seconds: secondCounter,
          counter: (time.counter += 1)
        });
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, setTime]);
  return (
    <div>
      {time.minutes}: {time.seconds < 10 ? "0" + time.seconds : time.seconds}
      <button onClick={handleClick}>Start</button>
    </div>
  );
};
