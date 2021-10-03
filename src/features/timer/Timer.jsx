import React, { useEffect } from "react";

export const Timer = ({
  time,
  setTime,
  breatheInstructions,
  setBreatheInstructions,
  countdown,
  setCountdown
}) => {
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

        if (breatheInstructions.step === 1) {
          setCountdown({ ...countdown, step1: (countdown.step1 -= 1), step3: 8 });
        } else if (breatheInstructions.step === 2) {
          setCountdown({ ...countdown, step1: 4, step2: (countdown.step2 -= 1) });
        } else {
          setCountdown({ ...countdown, step2: 7, step3: (countdown.step3 -= 1) });
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [time, setTime, breatheInstructions, setBreatheInstructions, setCountdown, countdown]);
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
